// 예린 코드
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import progressIcon from "./assets/IMG_3286.png"; // 이미지 import

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function RoombtiTest() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [choices, setChoices] = useState({});
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false); // submit 중복 방지

  const [loadingSubmit, setLoadingSubmit] = useState(false);

  // DB에서 질문 불러오기
  useEffect(() => {
    async function fetchQuestions() {
      const { data, error } = await supabase
        .from("question")
        .select(
          `
          question_id,
          question_text,
          question_order,
          questionoption:questionoption(option_id, option_text)
        `
        )
        .order("question_order", { ascending: true });

      if (error) {
        console.error("DB 연결 실패:", error);
      } else {
        console.log("DB 연결 성공! 데이터:", data);
        setQuestions(data);
        setLoading(false);
      }
    }
    fetchQuestions();
  }, []);


   const current = questions[step];

  // 답변 선택
  const handleAnswer = (option_id, index) => {
    setSelected(index);

    // 선택지를 업데이트
    const updatedChoices = { ...choices, [current.question_id]: option_id };
    setChoices(updatedChoices);

    if (step === questions.length - 1) {
      // 마지막 문항이면 setState 외부에서 submit 호출
      handleSubmit(updatedChoices);
    } else {
      // 다음 문항으로 이동
      setStep(step + 1);
      setSelected(null);
    }
  };


  // 제출
  const handleSubmit = async (finalChoices) => {
    if (submitted) return; // 이미 제출되었으면 아무것도 안 함
    setSubmitted(true);     // 제출 시작 표시

    setLoadingSubmit(true);

    try {
      // sessionuser 테이블 이름 소문자
      const { data: sessionData, error: sessionError } = await supabase
        .from("sessionuser")
        .insert([{ session_uuid: crypto.randomUUID() }])
        .select("session_id")
        .single();

      if (sessionError) throw sessionError;

      const session_id = sessionData.session_id;

      // choice 테이블에 12개 선택지만 정확히 insert
      const choiceInserts = Object.entries(finalChoices).map(([qId, optionId]) => ({
        session_id,
        option_id: optionId,
      }));

      const { error: choiceError } = await supabase
        .from("choice")
        .insert(choiceInserts);

      if (choiceError) throw choiceError;

      
      // 3. sessionresultdetail 계산 (dimension_value_id 기준 점수 누적)
      const valueScores = {}; // { dimension_value_id: { dimension_id, score } }

      for (let option_id of Object.values(finalChoices)) {
        // option_id → dimension_value_id
        const { data: optionData, error: optionErr } = await supabase
          .from("questionoption")
          .select("dimension_value_id")
          .eq("option_id", option_id)
          .single();
        if (optionErr) throw optionErr;

        // dimension_value_id → dimension_id
        const { data: dimValueData, error: dimErr } = await supabase
          .from("dimensionvalue")
          .select("dimension_id")
          .eq("dimension_value_id", optionData.dimension_value_id)
          .single();
        if (dimErr) throw dimErr;

        const dim_id = dimValueData.dimension_id;
        const value_id = optionData.dimension_value_id;

        // 동일 dimension_value_id이면 점수 누적
        if (!valueScores[value_id]) {
          valueScores[value_id] = { dimension_id: dim_id, score: 1 };
        } else {
          valueScores[value_id].score += 1;
        }
      }

      // 4. sessionresultdetail upsert
      const resultInserts = Object.entries(valueScores).map(([value_id, { dimension_id, score }]) => ({
        session_id,
        dimension_id,
        dimension_value_id: value_id,
        score,
      }));

      const { error: resultError } = await supabase
        .from("sessionresultdetail")
        .upsert(resultInserts, { onConflict: ["session_id", "dimension_id", "dimension_value_id"] });

      if (resultError) throw resultError;

      // 5. 최종 MBTI/방BTI 계산 및 ResultType 저장
      const { data: details, error: detailErr } = await supabase
        .from("sessionresultdetail")
        .select("dimension_id, dimension_value_id, score")
        .eq("session_id", session_id);
      if (detailErr) throw detailErr;

      // dimension별 최고 score 선택
      const bestValues = {}; // { dimension_id: dimension_value_id }
      details.forEach(({ dimension_id, dimension_value_id, score }) => {
        if (!bestValues[dimension_id] || score > bestValues[dimension_id].score) {
          bestValues[dimension_id] = { dimension_value_id, score };
        }
      });

      // dimension_id 순서대로 MBTI 코드 조합
      const dimensionOrder = [1, 2, 3, 4]; // 실제 dimension_id 순서에 맞게 수정
      // let result_code = "";

      // for (let dim_id of dimensionOrder) {
      //   const value_id = bestValues[dim_id].dimension_value_id;

      //   // DB에서 dimension_value_id → 코드 문자 가져오기
      //   const { data: valueData, error: valueErr } = await supabase
      //     .from("dimensionvalue")
      //     .select("dimension_value") // code 컬럼에 I, E, S 등 저장
      //     .eq("dimension_value_id", value_id)
      //     .single();
      //   if (valueErr) throw valueErr;

      //   result_code += valueData.code;
      // }

      // // 결과 설명, 이미지
      // const result_text = `${result_code} 유형입니다!`;
      // const result_image = `/images/${result_code}.png`;

      // // ResultType 테이블 저장
      // const { error: resultTypeErr } = await supabase
      //   .from("resulttype")
      //   .insert([{ session_id, result_code, result_text, result_image }]);
      // if (resultTypeErr) throw resultTypeErr;

      let result_code = "";
      for (let dim_id of dimensionOrder) {
        const valueEntry = bestValues[dim_id];
        if (!valueEntry) continue;

        const value_id = valueEntry.dimension_value_id;
        const { data: valueData, error: valueErr } = await supabase
          .from("dimensionvalue")
          .select("dimension_value")
          .eq("dimension_value_id", value_id)
          .single();

        if (valueErr || !valueData?.dimension_value) {
          console.error("dimensionvalue 누락:", value_id);
          continue;
        }

        result_code += valueData.dimension_value; // dimension_value 컬럼 사용
      }

      const result_text = `${result_code} 유형입니다!`;
      const result_image = `src/assets/${result_code}.png`;

      const { error: resultTypeErr } = await supabase
        .from("resulttype")
        .insert([{ session_id, result_code, result_text, result_image }]);
      if (resultTypeErr) throw resultTypeErr;





      // TestResult 페이지로 이동
      navigate("/TestResult", { state: { session_id } });
    } catch (err) {
      console.error("제출 오류:", err);
    } finally {
      setLoadingSubmit(false);
    }
  };

  if (loading) return <p>로딩 중...</p>;
  if (!current) return <p>질문이 없습니다.</p>;

  const progressStep = Math.min(step, questions.length - 1);
  const progressPercent = progressStep / (questions.length - 1);
  const progressWidth = `${progressPercent * 280}px`;

  return (
    <div
      style={{
        width: 408,
        //height: 852,
        minHeight: 700,
        height: "100dvh",
        background: "#fbf2d5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between", // ✅ 요소가 위–중앙–아래 균등 배치
        padding: "80px 0 40px",   // ✅ 상단/하단 여백만 지정
        boxSizing: "border-box",  // ✅ 여백 포함 크기 계산
        paddingTop: "80px",
        gap: "10px",
        position: "relative",
      }}
    >
      {/* 뒤로가기 아이콘 */}
      <svg
        onClick={() => navigate("/")}
        width={14}
        height={16}
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          cursor: "pointer",
          position: "absolute",
          left: "38.5px",
          top: "67.5px",
        }}
      >
        <path
          d="M0.292893 7.29289C-0.0976314 7.68342 -0.0976315 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538407 7.04738 0.538407 6.65685 0.928932L0.292893 7.29289ZM14 8L14 7L1 7L1 8L1 9L14 9L14 8Z"
          fill="black"
          fillOpacity="0.42"
        />
      </svg>

      {/* 진행바 */}
      <div
        style={{
          position: "relative",
          width: 280,
          height: 50,
          marginTop: "20px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: 10,
            borderRadius: 20,
            background: "#ddd9d9",
            position: "absolute",
            bottom: 0,
            left: 0,
          }}
        >
          <div
            style={{
              width: progressWidth,
              height: 10,
              borderRadius: 20,
              background: "#fe6a0f",
              position: "absolute",
              top: 0,
              left: 0,
              transition: "width 0.4s ease",
            }}
          />
        </div>

        <img
          src={progressIcon}
          alt="progress icon"
          style={{
            width: 50,
            height: 36,
            objectFit: "cover",
            position: "absolute",
            bottom: "5px",
            left: `${progressPercent * (280 - 50)}px`,
            transition: "left 0.4s ease",
          }}
        />
      </div>

      {/* 질문 */}
      <p
        style={{
          fontSize: 20,
          fontWeight: 600,
          textAlign: "center",
          color: "#000",
          marginTop: "1.5rem",
        }}
      >
        {current.question_text}
      </p>

      {/* 선택 옵션 */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {current.questionoption.map((opt, i) => (
          <div
            key={opt.option_id}
            onClick={() => handleAnswer(opt.option_id, i)}
            style={{
              width: 312,
              height: 200,
              borderRadius: 12,
              background: "#fff",
              border: `2px solid ${selected === i ? "#fe6a0f" : "#ddd9d9"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <p style={{ fontSize: 16, fontWeight: 500, color:"#000" }}>{opt.option_text}</p>
          </div>
        ))}
      </div>
     

      


      {/* 🔥🔥🔥 제출 로딩 오버레이 (캐릭터 GIF) */}
      {loadingSubmit && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.45)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99999,
            backdropFilter: "blur(2px)",
          }}
        >
          <div
            style={{
              background: "#fff",
              width: 220,
              padding: "30px 20px 25px",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 4px 25px rgba(0,0,0,0.15)",
            }}
          >
            <img
              // src="src/assets/loading_character.gif"
              src="src/assets/bear4.png"
              alt="loading"
              style={{
                width: 120,
                height: 120,
                objectFit: "contain",
                marginBottom: 12,
              }}
            />

            <p
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: "#fe6a0f",
                marginBottom: 5,
              }}
            >
              잠시만요!
            </p>

            <p
              style={{
                fontSize: 15,
                color: "#555",
              }}
            >
              방BTI를 계산 중이에요 🔎
            </p>
          </div>
        </div>
      )}



    </div>
  );
}

// // 이영주임님 코드
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function RoombtiTest() {
//   const [selected, setSelected] = useState(null);
//   const [step, setStep] = useState(0);
//   const navigate = useNavigate();

// const questions = [
//   {
//     question: "1.내가 어떤 공간을 좋아하는지 알아보세요.",
//     options: ["아늑한 공간", "넓은 공간"],
//   },
//   {
//     question: "2.선호하는 가구 스타일은?",
//     options: ["심플 모던", "클래식 빈티지"],
//   },
//   {
//     question: "3.좋아하는 색감은?",
//     options: ["밝은 톤", "어두운 톤"],
//   },
//   {
//     question: "4.내가 정착할 곳은?",
//     options: ["교통이 불편 집상태 최상", "지하철역 3분컷 집상태 별로"],
//   },
//   {
//     question: "5.데스트테리어를 한다면?",
//     options: ["필요한것만 미니멀하게", "이것저것 취향껏 레이어"],
//   },
//   {
//     question: "6.마음에 드는 소품이 비싸다면?",
//     options: ["없다고 죽지않아~!", "볼 때마다 행복할듯 그냥 사."],
//   },
//   {
//     question: "7.침대 맡에 둘 예쁜조명 살까 말까?",
//     options: ["아무리 예뻐도 비싸면 별로", "내방에 찰떡이자냐"],
//   },
//   {
//     question: "8.1인 소파 무료 나눔이닷. 방에 둘곳이 없는데 어쩌지",
//     options: ["무리해서 들이는건 싫어", "공간 지각력 총출동~ 어떻게든"],
//   },
//   {
//     question: "9.청소기를 사려고 한다",
//     options: ["성능 최고, 리뷰 극찬", "고감도 디자인"],
//   },
//   {
//     question: "10.방문을 열었을 때 떠오르는?",
//     options: ["모든 물건이 제자리에! 깔끔", "따듯한 조명과 침구의 조화"],
//   },
//   {
//     question: "11.집 밖에 나가지 않는것은?",
//     options: ["포상이에요", "감금이에요"],
//   },
//   {
//     question: "12.끝 ~~!!",
//     options: ["메롱", "메롱"],
//   },
// ];
//   const current = questions[step];

//   const handleAnswer = (option) => {
//     if (step < questions.length - 1) {
//       setStep(step + 1);
//     } else {
//       alert("테스트 종료");
//       navigate("/TestResult");
//     }
//   };
//   const progressStep = Math.min(step, 11);
//   const progressPercent = progressStep / 11;
//   const progressWidth = `${(progressStep / 11) * 280}px`;

//   return (
//     <div
//       style={{
//         width: 408,
//         height: 852,
//         background: "#fbf2d5",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         overflow: "hidden",
//         paddingTop: "80px",
//         gap: "2rem",
//         position: "relative",
//       }}
//     >
//       <svg
//         onClick={() => navigate("/")}
//         width={14}
//         height={16}
//         viewBox="0 0 14 16"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         style={{
//           cursor: "pointer",
//           position: "absolute",
//           left: "38.5px",
//           top: "67.5px",
//         }}
//       >
//         <path
//           d="M0.292893 7.29289C-0.0976314 7.68342 -0.0976315 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538407 7.04738 0.538407 6.65685 0.928932L0.292893 7.29289ZM14 8L14 7L1 7L1 8L1 9L14 9L14 8Z"
//           fill="black"
//           fillOpacity="0.42"
//         />
//       </svg>
//       <div
//         style={{
//           position: "relative",
//           width: 280,
//           height: 50,
//           marginTop: "20px",
//         }}
//       >
//         {/* 진행바 */}
//         <div
//           style={{
//             width: "100%",
//             height: 10,
//             borderRadius: 20,
//             background: "#ddd9d9",
//             position: "absolute",
//             bottom: 0,
//             left: 0,
//           }}
//         >
//           <div
//             style={{
//               width: progressWidth,
//               height: 10,
//               borderRadius: 20,
//               background: "#fe6a0f",
//               position: "absolute",
//               top: 0,
//               left: 0,
//               transition: "width 0.4s ease",
//             }}
//           />
//         </div>

//         {/* ✅ 캐릭터 이미지 이동 */}
//         <img
//           src="src/assets/IMG_3286.png"
//           alt="progress icon"
//           style={{
//             width: 50,
//             height: 36,
//             objectFit: "cover",
//             position: "absolute",
//             bottom: "5px",
//             left: `${progressPercent * (280 - 50)}px`, // 진행비율에 따라 이동
//             transition: "left 0.4s ease",
//           }}
//         />
//       </div>

//       <p
//         style={{
//           fontSize: 20,
//           fontWeight: 600,
//           textAlign: "center",
//           color: "#000",
//           marginTop: "1.5rem",
//         }}
//       >
//         {current.question}
//       </p>

//       {/* 선택1 */}
//       <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
//         {current.options.map((option, i) => (
//           <div
//             key={i}
//             onClick={() => {
//               // setSelected(0);
//               handleAnswer(option);
//             }}
//             style={{
//               width: 312,
//               height: 200,
//               borderRadius: 12,
//               background: "#fff",
//               border: `2px solid ${selected === i ? "#fe6a0f" : "#ddd9d9"}`,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               cursor: "pointer",
//             }}
//           >
//             <p style={{ fontSize: 16, fontWeight: 500 }}>{option}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
