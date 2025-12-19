import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardButton from "./CardButton.tsx";

export default function StylingTypePage() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);

  const buttons = [
    {
      id: 1,
      title: "배치 솔루션",
      subtitle: "가구만 재배치하고 싶어요!",
      url: "/styling-info1",
    },
    {
      id: 2,
      title: "풀 스타일링(온라인)",
      subtitle: "곧 입주라 처음부터 끝까지 비대면으로 해주세요!",
      url: "/styling-info2",
    },
    {
      id: 3,
      title: "풀 스타일링(오프라인)",
      subtitle: "곧 입주라 처음부터 끝까지 다 해주세요!",
      url: "/styling-info3",
    },
  ];

  return (
    <div
      style={{
        width: "100vw",
        //height: "calc(var(--vh, 1vh) * 100)",
        minHeight: "100svh",
        overflowY: "auto",
        background: "#fbf2d5",
        display: "flex",
        justifyContent: "center",
        paddingTop: "calc(env(safe-area-inset-top) + 7rem)",
        paddingBottom: "calc(env(safe-area-inset-bottom) + 1.5rem)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 408,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 1.2rem",
          boxSizing: "border-box",
        }}
      >
        {/* 뒤로가기 버튼 */}
        <svg
          onClick={() => navigate("/TestResult")}
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

        {/* 상단 타이틀 */}
        <div
          style={{
            width: 350,
            height: 58,
            borderRadius: 28,
            background: "#000",
            color: "#fff",
            fontSize: 30,
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "2.2rem",
          }}
        >
          스타일링 타입
        </div>

        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 25, fontWeight: 600, color:"#000", marginBottom:"-10px"}}>
            <b>나에게 필요한 솔루션을 찾아보세요</b>
          </p>
          <p style={{ fontSize: 20, fontWeight: 600, color: "#b8b1b1" ,marginTop:"20px" , marginBottom:"40px"}}>
            솔루션을 클릭하여 자세히 알아볼 수 있습니다.
          </p>
        </div>

        {/* 버튼 리스트 */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1.6rem", // ← 카드 간격!
          }}
        >
          {buttons.map((btn) => (
            <CardButton
              key={btn.id}
              {...btn}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
