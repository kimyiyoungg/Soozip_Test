import { useState } from "react";

import CardButton from "/Users/2eeeee0/soozip/src/CardButton.tsx";
export default function StylingTypePage() {
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
      }}
    >
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
        스타일링
      </div>

      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: 20, fontWeight: 600 }}>
          <b>soozip과 함께 스타일링 더 알아보고</b>
          <br />
          <b>맞춤 솔루션을 찾아보세요</b>
        </p>
        <p style={{ fontSize: 13, fontWeight: 600, color: "#b8b1b1" }}>
          개인별 맞춤 솔루션을 선택할 수 있습니다.
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
