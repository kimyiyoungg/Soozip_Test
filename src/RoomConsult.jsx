import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function RoomCounsult() {
  const [selected, setSelected] = useState(null); // 선택 상태 저장
  const navigate = useNavigate();
  const images = [
    "src/assets/image1.jpg",
    "src/assets/image2.png",
    "src/assets/image3.png",
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
      {/* 상단 버튼 */}
      <div
        style={{
          marginTop: 100,
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

      <div
        style={{
          width: "100%",
          height: 230,
          borderRadius: 20,
          overflow: "hidden",
          marginBottom: "1rem",
        }}
      >
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          style={{ width: "100%", height: "100%" }}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`slide-${idx}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 카드 리스트 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
          maxWidth: 360,
        }}
      >
        {/* 카드 1 */}
        <div
          onClick={() => {
            setSelected(1);
            window.location.href = "https://open.kakao.com/o/sHCcxOnh"; // 원하는 사이트 주소
          }}
          style={{
            background: "#fff",
            border: `2px solid ${selected === 1 ? "#fe6a0f" : "#ddd9d9"}`,
            cursor: "pointer",
            borderRadius: 12,
            padding: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "rgba(0,0,0,0.68)",
              }}
            >
              카카오톡 1:1 상담으로 맞춤 솔루션 제공해드려요
            </p>
            <p style={{ fontSize: 20, fontWeight: 600 }}>
              스타일링 상담 바로가기
            </p>
          </div>
          <div style={{ width: 50, height: 50, background: "#d9d9d9" }} />
        </div>

        {/* 카드 2 */}
        <div
          onClick={() => {
            setSelected(2);
            window.location.href = "https://www.instagram.com/soozip.01/"; // 원하는 사이트 주소
          }}
          style={{
            background: "#fff",
            border: `2px solid ${selected === 2 ? "#fe6a0f" : "#ddd9d9"}`,
            cursor: "pointer",
            borderRadius: 12,

            padding: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "rgba(0,0,0,0.68)",
              }}
            >
              설문을 미리 작성하여 상담 시간을 줄일 수 있어요
            </p>
            <p style={{ fontSize: 20, fontWeight: 600 }}>설문 작성하기</p>
          </div>
          <div style={{ width: 50, height: 50, background: "#d9d9d9" }} />
        </div>

        {/* 카드 3 */}
        <div
          onClick={() => {
            setSelected(3);
            navigate("/styling-type");
          }}
          style={{
            background: "#fff",
            border: `2px solid ${selected === 3 ? "#fe6a0f" : "#ddd9d9"}`,
            cursor: "pointer",
            borderRadius: 12,
            padding: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "rgba(0,0,0,0.68)",
              }}
            >
              수집과 함께 스타일링을 더 알아보아요
            </p>
            <p style={{ fontSize: 20, fontWeight: 600 }}>
              스타일링 과정 알아보기
            </p>
          </div>
          <div style={{ width: 50, height: 50, background: "#d9d9d9" }} />
        </div>
      </div>
    </div>
  );
}
