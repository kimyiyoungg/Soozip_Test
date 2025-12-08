import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardButton from "./CardButton.tsx";

export default function RoomConsult() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);

  const cards = [
    {
      id: 1,
      title: "스타일링 상담",
      subtitle: "카카오톡 1:1 상담으로 맞춤 솔루션 알아보기",
      url: "http://pf.kakao.com/_VNxiLn/chat",
      imgSrc:
        "https://mmfurloptocazvhfmcvk.supabase.co/storage/v1/object/public/roombti/kakao_icon.png",
    },
    {
      id: 2,
      title: "스타일링 타입",
      subtitle: "스타일링은 어떤 종류가 있고, 어떤 순서로 진행되는지 알아보기",
      url: "/styling-type",
      imgSrc:
        "https://mmfurloptocazvhfmcvk.supabase.co/storage/v1/object/public/roombti/type_icon.png",
    },
    {
      id: 3,
      title: "스타일링 사례",
      subtitle: "수집과 함께 스타일링을 더 알아보기",
      url: "https://soozip.co.kr/portfolio/list.html?cate_no=97",
      imgSrc:
        "https://mmfurloptocazvhfmcvk.supabase.co/storage/v1/object/public/roombti/soozip_logo.png",
    },
  ];

  return (
    <div
      style={{
        width: "100vw",
        height: "calc(var(--vh, 1vh) * 100)",
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
        {/* <svg
          onClick={() => navigate("/TestResult")}
          width={14}
          height={16}
          viewBox="0 0 14 16"
          fill="none"
          style={{
            cursor: "pointer",
            alignSelf: "flex-start",
            marginBottom: "1.8rem",
          }}
        >
          <path
            d="M0.292893 7.29289C-0.0976314 7.68342 -0.0976315 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538407 7.04738 0.538407 6.65685 0.928932L0.292893 7.29289ZM14 8L14 7L1 7L1 8L1 9L14 9L14 8Z"
            fill="black"
            fillOpacity="0.42"
          />
        </svg> */}

        {/* 페이지 타이틀 */}
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
          수집 홈 스타일링
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1.6rem", // ← 카드 간격!
          }}
        >
          {cards.map((card) => (
            <CardButton
              key={card.id}
              {...card}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
