import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardButton from "./CardButton.tsx";

export default function StylingTypePage() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);

  // 🔥 모바일 브라우저에서 안전한 100vh 계산
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  const buttons = [
    {
      id: 1,
      title: "배치 솔루션",
      subtitle: "가구만 배치하고 싶어요!",
      url: "/",
      imgSrc:
        "https://mmfurloptocazvhfmcvk.supabase.co/storage/v1/object/public/roombti/image02.jpg",
    },
    {
      id: 2,
      title: "소품 솔루션",
      subtitle: "공간에 어울리는 소품을 찾고 싶어요!",
      url: "/",
      imgSrc:
        "https://mmfurloptocazvhfmcvk.supabase.co/storage/v1/object/public/roombti/image02.jpg",
    },
    {
      id: 3,
      title: "풀 스타일링",
      subtitle: "이제 입주해서 다 해주세요",
      url: "/",
      imgSrc:
        "https://mmfurloptocazvhfmcvk.supabase.co/storage/v1/object/public/roombti/image02.jpg",
    },
  ];

  return (
    // ⭐ 바깥 전체 영역 — 배경 전체 & 안전한 100vh
    <div
      style={{
        width: "100%",
        height: "calc(var(--vh, 1vh) * 100)",
        minHeight: "100dvh",
        background: "#fbf2d5",
        display: "flex",
        justifyContent: "center",
        padding: "2rem 1rem",
        boxSizing: "border-box",
      }}
    >
      {/* ⭐ 안쪽 콘텐츠 — 모바일 느낌 408px 고정 */}
      <div
        style={{
          width: 408,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        {/* 뒤로가기 버튼 */}
        <svg
          onClick={() => navigate("/room-counsult")}
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

        {/* 제목 */}
        <div
          style={{
            width: 150,
            height: 33,
            borderRadius: 30,
            background: "#000",
            color: "#fff",
            fontSize: 23,
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 60,
          }}
        >
          스타일링 타입
        </div>

        {/* 버튼 리스트 */}
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
  );
}
