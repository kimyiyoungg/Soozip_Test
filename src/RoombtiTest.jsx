import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RoombtiTest() {
  const [selected, setSelected] = useState(null);
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

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
      navigate("/TestResult");
    }
  };
  const progressStep = Math.min(step, 11);
  const progressPercent = progressStep / 11;
  const progressWidth = `${(progressStep / 11) * 280}px`;

  return (
    <div
      style={{
        width: 408,
        height: 852,
        background: "#fbf2d5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: "80px",
        gap: "2rem",
        position: "relative",
      }}
    >
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
      <div
        style={{
          position: "relative",
          width: 280,
          height: 50,
          marginTop: "20px",
        }}
      >
        {/* 진행바 */}
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

        {/* ✅ 캐릭터 이미지 이동 */}
        <img
          src="src/assets/IMG_3286.png"
          alt="progress icon"
          style={{
            width: 50,
            height: 36,
            objectFit: "cover",
            position: "absolute",
            bottom: "5px",
            left: `${progressPercent * (280 - 50)}px`, // 진행비율에 따라 이동
            transition: "left 0.4s ease",
          }}
        />
      </div>

      <p
        style={{
          fontSize: 20,
          fontWeight: 600,
          textAlign: "center",
          color: "#000",
          marginTop: "1.5rem",
        }}
      >
        {current.question}
      </p>

      {/* 선택1 */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
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
              borderRadius: 12,
              background: "#fff",
              border: `2px solid ${selected === i ? "#fe6a0f" : "#ddd9d9"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <p style={{ fontSize: 16, fontWeight: 500 }}>{option}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
