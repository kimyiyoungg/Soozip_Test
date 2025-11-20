import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CardButton from "./CardButton.tsx";

export default function RoomCounsult() {
  const [selectedId, setSelectedId] = useState(null);

  const cards = [
    {
      id: 1,
      title: "스타일링 상담",
      subtitle: "카카오톡 1:1 상담으로 맞춤 솔루션 제공해드려요",
      url: "https://open.kakao.com/o/sHCcxOnh",
      imgSrc: "src/assets/image1.jpg",
    },
    {
      id: 2,
      title: "스타일링 타입",
      subtitle: "설문을 미리 작성하여 상담 시간을 줄일 수 있어요",
      url: "https://www.instagram.com/soozip.01/",
      imgSrc: "src/assets/image2.png",
    },
    {
      id: 3,
      title: "스타일링 사례",
      subtitle: "수집과 함께 스타일링을 더 알아보아요",
      url: "/styling-type",
      imgSrc: "src/assets/soozip_logo.png",
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
        // padding: "1rem 1rem",
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
          marginBottom: 80,
        }}
      >
        상담 알아보기
      </div>

      {cards.map((card) => (
        <CardButton
          key={card.id}
          {...card}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      ))}
    </div>
  );
}
