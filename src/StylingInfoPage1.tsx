import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

export default function StylingInfoPage1() {
  const navigate = useNavigate();
  const images = [
    "src/assets/image1.jpg",
    "src/assets/image2.png",
    "src/assets/image3.png",
  ];
  return (
    <div
      style={{
        width: "100vw",
        // 기기에 맞게 가로 폭 자동
        // maxWidth: 408,         // PC에서도 모바일처럼 보이게 제한
        height: "100dvh", // 기기 높이 100% (주소창 대응)
        minHeight: 2100,
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
        gap: 20,
      }}
    >
      {/* 상단 배경 */}
      <div
        style={{
          width: "100%",
          height: 800,
          //   marginTop: -20,
          borderRadius: 30,
          background: "#fbf2d5",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 36,
        }}
      >
        {/* 상단 SVG */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            paddingLeft: 38.5,
            paddingTop: 67.5,
          }}
        >
          <svg
            onClick={() => navigate("/styling-type")}
            width={14}
            height={16}
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.292893 7.3029C-0.0976314 7.69343 -0.0976315 8.32659 0.292893 8.71712L6.65685 15.0811C7.04738 15.4716 7.68054 15.4716 8.07107 15.0811C8.46159 14.6906 8.46159 14.0574 8.07107 13.6669L2.41421 8.01001L8.07107 2.35316C8.46159 1.96263 8.46159 1.32947 8.07107 0.938941C7.68054 0.548417 7.04738 0.548417 6.65685 0.938941L0.292893 7.3029ZM14 8.01001L14 7.01001L1 7.01001L1 8.01001L1 9.01001L14 9.01001L14 8.01001Z"
              fill="black"
              fillOpacity="0.42"
            />
          </svg>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center", // 텍스트 중심
            position: "relative",
            marginTop: 20,
            width: "100%",
          }}
        >
          {/* 이미지: 왼쪽에 기울어지도록 position 조정 */}

          {/* 텍스트: 컨테이너 중앙 */}
          <p
            style={{
              fontSize: 15,
              textAlign: "center",
              color: "#000",
              zIndex: 1, // 이미지 위로 올라오도록
            }}
          >
            <b>SOOZIP만의 감각적인</b>
          </p>
        </div>

        <p
          style={{ marginTop: 1, fontSize: 32, fontWeight: 700, color: "#000" }}
        >
          배치 솔루션
        </p>
        {/* 이미지 */}
        <div
          style={{
            width: "100%",
            height: 230,
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
            style={{ width: "100%", height: "100%" }}
          >
            {images.map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  alt={`room-${i}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 설명 텍스트 */}
        <div
          style={{
            marginTop: 80,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 20,
              textAlign: "center",
              color: "#000",
            }}
          >
            곧 입주하실 공간 또는 입주중인 공간에 기존 가구들을 실제 사이즈로
            반영하여 라이프스타일에 맞게 2~3가지 배치 시안을 전달 드리드리고
            있으며, 추가로 필요하신 가구가 있다면 완성될 배치에 함께
            반영해드리고 있습니다.
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 20,
              textAlign: "center",
              color: "#000",
            }}
          >
            방을 최적의 배치로 꾸며주는 서비스
          </p>
        </div>
      </div>

      {/* GUIDE 섹션 */}
      <div
        style={{
          marginTop: 50,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          marginBottom: 0,
        }}
      >
        <p
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "#000",
            marginBottom: 4,
          }}
        >
          배치솔루션 GUIDE
        </p>
        <svg width={207} height={1} viewBox="0 0 207 1" fill="none">
          <line x1="0" y1="0.5" x2={207} y2="0.5" stroke="black" />
        </svg>

        {/* 버튼 1 */}
        <div
          style={{
            width: 77,
            height: 31,
            borderRadius: 100,
            background: "#2f2f2f",
            color: "#fff",
            fontSize: 20,
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          하나
        </div>
        <p
          style={{
            fontSize: 20,
            textAlign: "center",
            color: "#000",
            marginTop: 20,
          }}
        >
          - 1:1 맞춤 상담 - 원하시는 공간에 대한 상담 후 3D 모델링 작업을 위한
          실제 공간 자료, 기존 가구들에 대한 정보를 주실 수 있도록 상담을
          도와드립니다.
        </p>
        <svg width={298} height={164} viewBox="0 0 298 164" fill="none">
          <path
            d="M0 20C0 8.95431 8.9543 0 20 0H278C289.046 0 298 8.95431 298 20V144C298 155.046 289.046 164 278 164H20C8.95431 164 0 155.046 0 144V20Z"
            fill="#D9D9D9"
          />
        </svg>

        {/* 버튼 2 */}
        <div
          style={{
            width: 77,
            height: 31,
            borderRadius: 100,
            background: "#2f2f2f",
            color: "#fff",
            fontSize: 20,
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          둘
        </div>
        <p
          style={{
            fontSize: 20,
            textAlign: "center",
            color: "#000",
            marginTop: 20,
          }}
        >
          -배치 시안 전달 - 라이프스타일이나 니즈를 반영하여 개인 맞춤형 3D
          배치안을 제작합니다. 원하시는 배치를 선택하실 수 있도록 기본적으로
          2~3가지 시안을 함께 제공하고 있습니다. (사진과 같이 가구 및 공간의
          실제 사이즈만 반영됩니다)
        </p>
        <svg width={298} height={164} viewBox="0 0 298 164" fill="none">
          <path
            d="M0 20C0 8.95431 8.9543 0 20 0H278C289.046 0 298 8.95431 298 20V144C298 155.046 289.046 164 278 164H20C8.95431 164 0 155.046 0 144V20Z"
            fill="#D9D9D9"
          />
        </svg>

        {/* 버튼 3 */}
        <div
          style={{
            width: 77,
            height: 31,
            borderRadius: 100,
            background: "#2f2f2f",
            color: "#fff",
            fontSize: 20,
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          셋
        </div>
        <p
          style={{
            fontSize: 20,
            textAlign: "center",
            color: "#000",
            marginTop: 20,
          }}
        >
          - 피드백 및 가구리스트 전달 - 배치 시안에 따라 피드백을 주시면 최대
          1회 수정 도와드리고 있으며, 기존 가구 이외에 추가된 가구나 제품이 있을
          경우 구매링크를 정리하여 전달 드립니다.
        </p>
        <svg width={298} height={164} viewBox="0 0 298 164" fill="none">
          <path
            d="M0 20C0 8.95431 8.9543 0 20 0H278C289.046 0 298 8.95431 298 20V144C298 155.046 289.046 164 278 164H20C8.95431 164 0 155.046 0 144V20Z"
            fill="#D9D9D9"
          />
        </svg>

        {/* 상담톡 */}
        <a href="https://open.kakao.com/o/sHCcxOnh">
          <p
            style={{
              fontSize: 16,
              textAlign: "center",
              color: "#2f2f2f",
              marginTop: 20,
            }}
          >
            <u>1:1 상담톡 연결하기</u> ▶
          </p>
        </a>
      </div>
    </div>
  );
}
