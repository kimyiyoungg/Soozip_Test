/**
 * RoombtiTest.jsx
 *
 * 방BTI 테스트의 핵심 로직을 담당하는 페이지
 *
 * 역할:
 * - Supabase에서 질문 데이터 불러오기
 * - 사용자 선택을 단계별로 상태 관리
 * - 추가 질문(extra question) 동적 생성
 * - 테스트 결과를 DB에 저장
 * - dimension 점수 계산 → 최종 방BTI 결과 도출
 * - 결과 페이지(TestResult)로 이동
 * 
 **/

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import progressIcon from "./assets/loading_bear.png";
import LoadingPage from "./LoadingPage";

// Supabase 설정
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function RoombtiTest() {
  // 페이지 이동을 위한 navigate 함수
  const navigate = useNavigate();

  // 상태 관리
  const [loading, setLoading] = useState(true); //질문 로딩 여부
  const [questions, setQuestions] = useState([]); // 전체 질문 목록（DB 질문 + extra 질문)
  const [choices, setChoices] = useState({}); // 사용자의 선택 저장
  const [step, setStep] = useState(0); // 현재 질문 단계
  const [selected, setSelected] = useState(null); // 현재 질문에서 선택된 옵션
  const [submitted, setSubmitted] = useState(false); // 제출 중복 방지
  const [loadingSubmit, setLoadingSubmit] = useState(false); // 제출 로딩팝업 표시 여부
  const [hoveredIndex, setHoveredIndex] = useState(null); // 마우스 상태(PC만)

  // ===================== 질문 구성 =====================
  // DB에서 질문 불러오기
  useEffect(() => {
    async function fetchQuestions() {
      setLoading(true);
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
        return;
      }

      // 추가 질문 : 사용자의 인테리어 취향 테스트(사진)
      const extraQuestions = [
        {
          question_id: "extra1",
          question_text: "더 마음에 드는 인테리어는?",
          questionoption: [
            { option_id: "A", option_text: "https://mmfurloptocazvhfmcvk.supabase.co/storage/v1/object/public/roombti/my_pick_interier/A.png" },
            { option_id: "B", option_text: "https://mmfurloptocazvhfmcvk.supabase.co/storage/v1/object/public/roombti/my_pick_interier/B.png" },
            { option_id: "C", option_text: "https://mmfurloptocazvhfmcvk.supabase.co/storage/v1/object/public/roombti/my_pick_interier/C.png" },
            { option_id: "D", option_text: "https://mmfurloptocazvhfmcvk.supabase.co/storage/v1/object/public/roombti/my_pick_interier/D.png" },
          ],
        },
        {
          question_id: "extra2",
          question_text: "또 더 마음에 드는 인테리어는?",
          questionoption: [
            { option_id: "E", option_text: "https://mmfurloptocazvhfmcvk.supabase.co/storage/v1/object/public/roombti/my_pick_interier/E.png" },
            { option_id: "F", option_text: "https://mmfurloptocazvhfmcvk.supabase.co/storage/v1/object/public/roombti/my_pick_interier/F.png" },
            { option_id: "G", option_text: "https://mmfurloptocazvhfmcvk.supabase.co/storage/v1/object/public/roombti/my_pick_interier/G.png" },
            { option_id: "H", option_text: "https://mmfurloptocazvhfmcvk.supabase.co/storage/v1/object/public/roombti/my_pick_interier/H.png" },
          ],
        },
        {
          question_id: "extra3",
          question_text: "최종 선택! 어떤 스타일이 더 좋아?",
          questionoption: [], // 이후 step 14에서 동적 생성
        },
      ];

      setQuestions([...data, ...extraQuestions]); // DB 질문 + extra 질문 합치기
      setLoading(false);
    }
    fetchQuestions();
  }, []);

  // 현재 질문
  const current = questions[step];
 
  // ===================== 답변 선택 =====================
  const handleAnswer = (option_id, index) => {
    setSelected(index);

    // 선택 결과 저장
    const updatedChoices = { ...choices, [current.question_id]: option_id };
    setChoices(updatedChoices);

    // 마지막 질문이면 제출
    if (step === questions.length - 1) {
      handleSubmit(updatedChoices);
    } else {
      // 마지막 질문 아니면 다음 질문으로 이동
      setStep(step + 1);
      setSelected(null);
    }
  };

  // extra1과 extra2에서 고른 이미지로 extra3 이미지 생성
      useEffect(() => {
        if (step === 14) {
          const extra1Question = questions[12];
          const extra2Question = questions[13];

          // 선택한 값(A~D)
          const pick1 = choices["extra1"]; 
          const pick2 = choices["extra2"];

          // 그 선택지의 이미지 URL 추출
          const pick1Image = extra1Question.questionoption.find(o => o.option_id === pick1)?.option_text;
          const pick2Image = extra2Question.questionoption.find(o => o.option_id === pick2)?.option_text;

          const q3 = {
            ...questions[14],
           
            questionoption: [
              {
                option_id: pick1,       // A, B, C, D
                option_text: pick1Image // extra1에서의 이미지 그대로
              },
              {
                option_id: pick2,       // E, F, G, H
                option_text: pick2Image // extra2에서의 이미지 그대로
              }
            ],
          };

          const newQs = [...questions];
          newQs[14] = q3;
          setQuestions(newQs);
        }
      }, [step]);

  const handlePrev = () => {
    if (step === 0) return; // 첫 질문이면 막기

    const prevStep = step - 1;
    const prevQuestion = questions[prevStep];
    const prevAnswer = choices[prevQuestion.question_id];

    setStep(prevStep);

    // 이전에 선택했던 옵션 index 복구
    if (prevAnswer) {
      const prevIndex = prevQuestion.questionoption.findIndex(
        (opt) => opt.option_id === prevAnswer
      );
      setSelected(prevIndex);
    } else {
      setSelected(null);
    }

    // 혹시 마지막 질문에서 돌아오는 경우 submit 상태 해제
    setSubmitted(false);
  };


  

  // ===================== 제출 & 결과 계산 =====================
  const handleSubmit = async (finalChoices) => {
    if (submitted) return; // 이미 제출되었으면 아무것도 안 함
    setSubmitted(true); // 제출 시작 표시
    setLoadingSubmit(true); //제출 로딩 페이지 표시

    try {
      // 1. sessionuser 테이블에 세션 id 생성
      const { data: sessionData, error: sessionError } = await supabase
        .from("sessionuser")
        .insert([{ session_uuid: crypto.randomUUID() }])
        .select("session_id")
        .single();

      if (sessionError) throw sessionError;

      const session_id = sessionData.session_id;

      // 2. DB 질문만 필터링 (extra 질문 제외)
      const dbOnlyChoices = Object.entries(finalChoices)
        .filter(([qId, _]) => !qId.startsWith("extra"));

      const choiceInserts = dbOnlyChoices.map(([qId, optionId]) => ({
        session_id,
        option_id: optionId,
      }));

      const { error: choiceError } = await supabase
        .from("choice")
        .insert(choiceInserts);

      if (choiceError) throw choiceError;

      // 3. dimension_value 점수 계산
      const onlyDbOptionIds = dbOnlyChoices.map(([_, optionId]) => optionId);
      const valueScores = {};
      
      for (let option_id of onlyDbOptionIds) {
        const { data: optionData, error: optionErr } = await supabase
          .from("questionoption")
          .select("dimension_value_id")
          .eq("option_id", option_id)
          .single();
        if (optionErr) throw optionErr;

        const { data: dimValueData, error: dimErr } = await supabase
          .from("dimensionvalue")
          .select("dimension_id")
          .eq("dimension_value_id", optionData.dimension_value_id)
          .single();
        if (dimErr) throw dimErr;

        const dim_id = dimValueData.dimension_id;
        const value_id = optionData.dimension_value_id;

        if (!valueScores[value_id]) {
          valueScores[value_id] = { dimension_id: dim_id, score: 1 };
        } else {
          valueScores[value_id].score += 1;
        }
      }

      // 4. 결과 상세 저장
      const resultInserts = Object.entries(valueScores).map(
        ([value_id, { dimension_id, score }]) => ({
          session_id,
          dimension_id,
          dimension_value_id: value_id,
          score,
        })
      );

      const { error: resultError } = await supabase
        .from("sessionresultdetail")
        .upsert(resultInserts, {
          onConflict: ["session_id", "dimension_id", "dimension_value_id"],
        });

      if (resultError) throw resultError;


      // 5. 방BTI 계산 및 ResultType 저장
      const { data: details, error: detailErr } = await supabase
        .from("sessionresultdetail")
        .select("dimension_id, dimension_value_id, score")
        .eq("session_id", session_id);
      if (detailErr) throw detailErr;

      const bestValues = {}; // dimension별 최고 score 선택
      details.forEach(({ dimension_id, dimension_value_id, score }) => {
        if (
          !bestValues[dimension_id] ||
          score > bestValues[dimension_id].score
        ) {
          bestValues[dimension_id] = { dimension_value_id, score };
        }
      });

      const dimensionOrder = [1, 2, 3, 4]; // 실제 dimension_id 순서에 맞게 수정
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

      // 6. resulttype 저장
      const result_text = `${result_code} 유형입니다!`;
      const result_image = `https://mmfurloptocazvhfmcvk.supabase.co/storage/v1/object/public/roombti/${result_code}.png`;
      const result_info_image = `https://mmfurloptocazvhfmcvk.supabase.co/storage/v1/object/public/roombti/${result_code}_info.png`;
      const { error: resultTypeErr } = await supabase
        .from("resulttype")
        .insert([{ session_id, result_code, result_text, result_image, result_info_image }]);
      if (resultTypeErr) throw resultTypeErr;

      //  7. 결과 페이지로 이동
      const finalPick = finalChoices["extra3"];
      const finalImage = questions[14].questionoption.find(
        o => o.option_id === finalPick
      )?.option_text;

      navigate("/TestResult", { // TestResult 페이지로 이동 
         state: {
          session_id,
          myInterior: finalPick,        // 최종 선택한 인테리어 ID
          myInteriorImage: finalImage // 최종 선택한 인테리어 이미지 링크
        } });
    } catch (err) {
      console.error("제출 오류:", err);
    } finally {
      setLoadingSubmit(false);
    }
  };

  // ===================== 렌더링 분기 =====================
  if (loading) return <LoadingPage/>;
  if (!current) return <p>질문이 없습니다.</p>;

  const progressStep = Math.min(step, questions.length - 1);
  const progressPercent = progressStep / (questions.length - 1);
  const progressWidth = `${progressPercent * 280}px`;
  const isLastQuestion = step === questions.length - 1;

  return (
    <div
      style={{
        width: "100vw", // 화면 가로 전체
        minHeight: "100vh", // 화면 세로 전체
        overflowX: "hidden",
        background: "#fbf2d5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between", // ✅ 요소가 위–중앙–아래 균등 배치
        padding: "80px 0 40px", // ✅ 상단/하단 여백만 지정
        boxSizing: "border-box", // ✅ 여백 포함 크기 계산
        paddingTop: "80px",
        gap: "10px",
        position: "relative",
      }}
    >
      {/* 뒤로가기 아이콘 */}
      <svg
        // onClick={() => navigate("/")}
        onClick={() => {
          if (step === 0) {
            navigate("/");
          } else {
            handlePrev();
          }
        }}
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

      <div
        style={{
          width: "60px",
          height: "25px",
          borderRadius: 12,
          background: "#000",
          border: "1px solid #ddd9d9",
          color: "#fff",
          fontWeight: 600,
          fontSize: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          right: "38.5px",
          top: "67.5px",
          cursor: "pointer",
        }}
        onClick={() => setStep(0)}
      >
        처음으로
      </div>


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
          fontSize: 28,
          fontWeight: 900,
          textAlign: "center",
          color: "#000",
          marginTop: "1.5rem",
          whiteSpace: "pre-wrap", // 줄바꿈 문자(\n) 적용
          wordWrap: "break-word", 
          lineHeight: 1.4,
        }}
      >
        {current.question_text}
      </p>
      

      {/* 선택 옵션 */}
      <div
      
        style={{
          display: "grid",
          gap: "1.5rem",
          // gridTemplateColumns:
          //   current.questionoption.length === 4 ? "1fr 1fr" : "1fr",
          gridTemplateColumns: isLastQuestion
            ? "1fr 1fr"                        // ✅ 마지막 질문 → 가로 배치
            : current.questionoption.length === 4
            ? "1fr 1fr"                        // 기존 4개
            : "1fr",                           // 기존 2개(세로)
          justifyItems: "center",
          // justifyContent: isLastQuestion ? "center" : "start",
          // marginTop: "1rem",
          marginTop: isLastQuestion ? "8rem" : "1rem",
          marginBottom: isLastQuestion ? "5rem" : "0",
        }}
      >
        {current.questionoption.map((opt, i) => {
          const isImage = opt.option_text?.toLowerCase().endsWith(".png");
          const isTouchDevice = "ontouchstart" in window;
          const isLastQuestion = step === questions.length - 1;
          const optionCount = current.questionoption.length;

          return (
            <div
              key={opt.option_id}
              onClick={() => {handleAnswer(opt.option_id, i);
                setHoveredIndex(null);}
              }
              onMouseEnter={() => {
                if (!isTouchDevice) setHoveredIndex(i); // ← 모바일에서는 hover 무시
              }}
              onMouseLeave={() => {
                if (!isTouchDevice) setHoveredIndex(null); // ← 모바일에서는 hover 무시
              }}
              style={{
                //width: current.questionoption.length === 4 ? 150 : 312,
                width: isLastQuestion
                  ? 150                // ✅ 마지막 질문은 무조건 150
                  : optionCount === 4
                  ? 150                // 기존 4개
                  : 312,               // 기존 2개
                height: 170,
                borderRadius: 12,
                background: "#fff",
                border: `2px solid ${
                  selected === i
                    ? "#fe6a0f"
                    : (!isTouchDevice && hoveredIndex === i)
                    ? "#fe6a0f"
                    : "#ddd9d9"
                }`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                textAlign: "center",
              }}
            >

              {/* 🔥 텍스트 vs 이미지 분기 */}
              {isImage ? (
                <img
                  src={`${opt.option_text}`}
                  alt="option"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                    borderRadius: 12,
                  }}
                />
              ) : (
                <p style={{ fontSize: 25, fontWeight: 500, color: "#000", whiteSpace: "pre-wrap", wordWrap: "break-word",}}>
                  {opt.option_text}
                </p>
              )}
            </div>
          );
        })}
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
              //src="src/assets/calc_bear.png"
              src="https://mmfurloptocazvhfmcvk.supabase.co/storage/v1/object/public/roombti/calc_bear.png"
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
                marginBottom: 1,
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
              방BTI 결과를 기다리는 중이에요 🔎
            </p>
          </div>
        </div>
      )}



    </div>
  );
}