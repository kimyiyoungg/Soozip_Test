import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardButton from "./CardButton.tsx";

export default function StylingTypePage() {
  const navigate = useNavigate(); // ✅ 추가
  const [selectedId, setSelectedId] = useState(null);

  const buttons = [
    {
      id: 1,
      title: "배치 솔루션",
      subtitle: "가구만 배치하고 싶어요!",
      url: "/styling-info1",
      imgSrc: "src/assets/bear.jpg",
    },
    {
      id: 2,
      title: "소품 솔루션",
      subtitle: "공간에 어울리는 소품을 찾고 싶어요!",
      url: "/styling-info2",
      imgSrc: "src/assets/bear.jpg",
    },
    {
      id: 3,
      title: "풀 스타일링",
      subtitle: "이제 입주해서 다 해주세요",
      url: "/styling-info3",
      imgSrc: "src/assets/bear.jpg",
    },
  ];

  return (
    <div
      style={{
        width: 408,
        minHeight: "100dvh",
        background: "#fbf2d5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
        padding: "2rem 1rem",
        boxSizing: "border-box",
        position: "relative", // ✅ 추가 중요!!
      }}
    >
      {/* ✅ SVG 뒤로가기 버튼 */}
      <svg
        onClick={() => navigate(-1)} // 이전 페이지로 이동
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
          width: 150,
          height: 30,
          borderRadius: 30,
          background: "#000",
          color: "#fff",
          fontSize: 20,
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 60,
        }}
      >
        스타일링 타입
      </div>

      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: 20, fontWeight: 600, color: "#000" }}>
          <b>soozip과 함께 스타일링 더 알아보고</b>
          <br />
          <b>맞춤 솔루션을 찾아보세요</b>
        </p>
        <p style={{ fontSize: 13, fontWeight: 600, color: "#b8b1b1" }}>
          개인별 맞춤 솔루션을 알아볼 수 있습니다.
        </p>
      </div>

      {buttons.map((btn) => (
        <CardButton
          key={btn.id}
          {...btn}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      ))}
    </div>
  );
}
