import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CardButton from "/Users/2eeeee0/soozip/src/CardButton.tsx";

export default function RoomCounsult() {
  const [selectedId, setSelectedId] = useState(null);

  const cards = [
    {
      id: 1,
      title: "스타일링 상담 바로가기",
      subtitle: "카카오톡 1:1 상담으로 맞춤 솔루션 제공해드려요",
      url: "https://open.kakao.com/o/sHCcxOnh",
      imgSrc: "src/assets/image1.jpg",
    },
    {
      id: 2,
      title: "설문 작성하기",
      subtitle: "설문을 미리 작성하여 상담 시간을 줄일 수 있어요",
      url: "https://www.instagram.com/soozip.01/",
      imgSrc: "src/assets/image2.png",
    },
    {
      id: 3,
      title: "스타일링 과정 알아보기",
      subtitle: "수집과 함께 스타일링을 더 알아보아요",
      url: "/styling-type",
      imgSrc: "src/assets/image3.png",
    },
  ];

  return (
    <div
      style={{
        width: 408,
        minHeight: 852,
        background: "#fbf2d5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 1rem",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background: "#000",
          color: "#fff",
          borderRadius: 30,
          padding: "0.5rem 1rem",
          marginBottom: "1rem",
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        상담 알아보기
      </div>

      {/* 이미지 슬라이드 */}
      <div
        style={{
          width: "100%",
          height: 230,
          borderRadius: 20,
          overflow: "hidden",
          marginBottom: "1rem",
        }}
      >
        <Swiper pagination={{ clickable: true }} modules={[Pagination]}>
          {cards.map((card, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={card.imgSrc}
                alt={`slide-${idx}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
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
  );
}
