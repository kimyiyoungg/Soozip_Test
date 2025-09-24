import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ 추가
export default function RoombtiTest() {
  const [selected, setSelected] = useState(null); // 선택 상태 저장
  const [step, setStep] = useState(0);

  const questions = [
    {
      question: "1.내가 어떤 공간을 좋아하는지 알아보세요.",
      options: ["아늑한 공간", "넓은 공간"],
    },
    {
      question: "2.선호하는 가구 스타일은?",
      options: ["심플 모던", "클래식 빈티지"],
    },
    {
      question: "3.좋아하는 색감은?",
      options: ["밝은 톤", "어두운 톤"],
    },
    {
      question: "4.내가 정착할 곳은?",
      options: ["교통이 불편 집상태 최상", "지하철역 3분컷 집상태 별로"],
    },
    {
      question: "5.데스트테리어를 한다면?",
      options: ["필요한것만 미니멀하게", "이것저것 취향껏 레이어"],
    },
    {
      question: "6.마음에 드는 소품이 비싸다면?",
      options: ["없다고 죽지않아~!", "볼 때마다 행복할듯 그냥 사."],
    },
    {
      question: "7.침대 맡에 둘 예쁜조명 살까 말까?",
      options: ["아무리 예뻐도 비싸면 별로", "내방에 찰떡이자냐"],
    },
    {
      question: "8.1인 소파 무료 나눔이닷. 방에 둘곳이 없는데 어쩌지",
      options: ["무리해서 들이는건 싫어", "공간 지각력 총출동~ 어떻게든"],
    },
    {
      question: "9.청소기를 사려고 한다",
      options: ["성능 최고, 리뷰 극찬", "고감도 디자인"],
    },
    {
      question: "10.방문을 열었을 때 떠오르는?",
      options: ["모든 물건이 제자리에! 깔끔", "따듯한 조명과 침구의 조화"],
    },
    {
      question: "11.집 밖에 나가지 않는것은?",
      options: ["포상이에요", "감금이에요"],
    },
    {
      question: "12.끝 ~~!!",
      options: ["메롱", "메롱"],
    },
  ];
  const current = questions[step];
  const handleAnswer = (option) => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      alert("테스트 종료");
    }
  };
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: 408,
        height: 852,
        position: "relative",
        overflow: "hidden",
        background: "#fbf2d5",
      }}
    >
      <img
        src="src/assets/IMG_3286.png"
        style={{
          width: 50,
          height: 36,
          position: "absolute",
          left: 133,
          top: 127,
          objectFit: "cover",
        }}
      />

      <div
        style={{
          width: 280,
          height: 10,
          position: "absolute",
          left: 63,
          top: 163,
          borderRadius: 20,
          background: "#ddd9d9",
        }}
      />
      <div
        style={{
          width: 95,
          height: 10,
          // position: "absolute",
          left: 63,
          top: 163,
          borderRadius: 20,
          background: "#fe6a0f",
        }}
      />
      <svg
        onClick={() => navigate("/TestResult")}
        style={{
          cursor: "pointer",
          position: "absolute",
          left: "365.5px",
          top: "67.5px",
        }}
        width={14}
        height={16}
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289L7.34315 0.928932C6.95262 0.538408 6.31946 0.538408 5.92893 0.928932C5.53841 1.31946 5.53841 1.95262 5.92893 2.34315L11.5858 8L5.92893 13.6569C5.53841 14.0474 5.53841 14.6805 5.92893 15.0711C6.31946 15.4616 6.95262 15.4616 7.34315 15.0711L13.7071 8.70711ZM0 8V9H13V8V7H0V8Z"
          fill="black"
          fillOpacity="0.42"
        />
      </svg>

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
        preserveAspectRatio="none"
      >
        <path
          d="M0.292893 7.29289C-0.0976314 7.68342 -0.0976315 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538407 7.04738 0.538407 6.65685 0.928932L0.292893 7.29289ZM14 8L14 7L1 7L1 8L1 9L14 9L14 8Z"
          fill="black"
          fillOpacity="0.42"
        />
      </svg>

      <p
        style={{
          position: "absolute",
          left: 57,
          top: 243,
          fontSize: 20,
          fontWeight: 600,
          textAlign: "left",
          color: "#000",
        }}
      >
        {current.question}
      </p>

      {/* 선택1 */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10rem" }}>
        {current.options.map((option, i) => (
          <div
            key={i}
            onClick={() => {
              // setSelected(0);
              handleAnswer(option);
            }}
            style={{
              width: 312,
              height: 200,
              // position: "absolute",
              left: "48.5px",
              top: "315.5px",
              borderRadius: 12,
              background: "#fff",
              border: `2px solid ${selected === 1 ? "#fe6a0f" : "#ddd9d9"}`,
              cursor: "pointer",
            }}
          >
            <p>{option}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
