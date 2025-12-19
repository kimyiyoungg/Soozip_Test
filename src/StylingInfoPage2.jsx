import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

export default function StylingInfoPage2() {
  const navigate = useNavigate();
  const images = [
    "src/assets/image1.jpg",
    "src/assets/image2.png",
    "src/assets/image3.png",
  ];
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100vw",
        minHeight: "100svh",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
        fontFamily: "NanumSquare, system-ui, sans-serif",
      }}
    >
      {/* 상단 배경 */}
      <div
        style={{
          width: "100%",
          height: 800,
          background: "#fbf2d5",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 36,
          paddingBottom: 36,
          position: "relative",
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
            position: "relative", // ⭐ 중요
            zIndex: 10,
          }}
        >
          <svg
            onClick={() => navigate("/styling-type")}
            width={14}
            height={16}
            style={{
              cursor: "pointer",
              zIndex: 11,
            }}
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
              color: "#7e7b7b",
              zIndex: 1, // 이미지 위로 올라오도록
            }}
          >
            <b>SOOZIP만의 감각적인</b>
          </p>
        </div>

        <p
          style={{
            marginTop: 1,
            fontSize: 45,
            fontWeight: 800,
            color: "#000",
          }}
        >
          풀 스타일링(온라인)
        </p>
        {/* 이미지 */}
        <div
          style={{
            width: "100%",
            height: 300,
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
          {/* <p
            style={{
              margin: "30px auto 10px",
              fontSize: 24,
              fontWeight: 600,
              textAlign: "center",
              color: "#000",
              letterSpacing: "-0.3px",
            }}
          >
            방을 최적의 배치로 꾸며주는 서비스
          </p> */}

          <p
            style={{
              margin: "0 auto",
              fontSize: 18,
              lineHeight: 1.7,
              textAlign: "center",
              color: "#4f4e4e",
              maxWidth: 720,
              wordBreak: "keep-all",
              padding: "0 16px",
            }}
          >
            라이프스타일에 맞는 적절한 배치와, 소품 선정 등 고객님이 상상만
            하셨던 공간을 3D 모델링을 활용하여 전체적인 스타일링을 도와드립니다.
            무료/유료 타입으로 나뉘어 진행되고 있습니다. (3가지 동의사항에
            동의가 가능하실 경우 무료 진행 가능합니다)
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
            marginBottom: 150,
          }}
        >
          배치솔루션 GUIDE
        </p>

        {/* 버튼 1 */}
        <div
          style={{
            width: 77,
            height: 31,
            borderRadius: 100,
            background: "#2f2f2f",
            color: "#fff",
            fontSize: 18,
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            marginBottom: 16,
          }}
        >
          하나
        </div>
        <p
          style={{
            fontSize: 30,
            textAlign: "center",
            color: "#000",
            fontWeight: 800,
            marginBottom: 1,
          }}
        >
          1:1 맞춤 상담
        </p>
        <p
          style={{
            margin: "0px auto 24px",
            fontSize: "clamp(15px, 2.8vw, 18px)", // PC/모바일 자동
            lineHeight: 1.7,
            textAlign: "center",
            color: "#4f4e4e",
            maxWidth: 720,
            padding: "0 16px",
            wordBreak: "keep-all",
          }}
        >
          원하시는 공간에 대한 상담 후 3D 모델링 작업을 위한 실제 공간 자료,
          기존 가구들에 대한 정보를 주실 수 있도록 상담을 도와드립니다.
        </p>

        <svg
          width={298}
          height={164}
          viewBox="0 0 298 164"
          fill="none"
          style={{
            marginTop: 70,
          }}
        >
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
            fontSize: 18,
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 200,
            marginBottom: 16,
          }}
        >
          둘
        </div>
        <p
          style={{
            fontSize: 30,
            textAlign: "center",
            color: "#000",
            fontWeight: 800,
            marginBottom: 1,
          }}
        >
          스타일링 3D 시안 전달
        </p>
        <p
          style={{
            margin: "0px auto 24px",
            fontSize: "clamp(15px, 2.8vw, 18px)", // PC/모바일 자동
            lineHeight: 1.7,
            textAlign: "center",
            color: "#4f4e4e",
            maxWidth: 720,
            padding: "0 16px",
            wordBreak: "keep-all",
          }}
        >
          라이프스타일이나 니즈를 반영하여 개인 맞춤형 3D 시안을 제작합니다.
          기존가구와 새로운 가구를 조합하거나 새로운 가구들로 가구를 배치한 후,
          공간에 어울리는 소품까지 더해 전체적인 스타일링을 도와드립니다.
        </p>

        <svg
          width={298}
          height={164}
          viewBox="0 0 298 164"
          fill="none"
          style={{
            marginTop: 70,
          }}
        >
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
            fontSize: 18,
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 200,
            marginBottom: 16,
          }}
        >
          셋
        </div>
        <p
          style={{
            fontSize: 30,
            textAlign: "center",
            color: "#000",
            fontWeight: 800,
            marginBottom: 1,
          }}
        >
          피드백 및 가구리스트 전달
        </p>
        <p
          style={{
            margin: "0px auto 24px",
            fontSize: "clamp(15px, 2.8vw, 18px)", // PC/모바일 자동
            lineHeight: 1.7,
            textAlign: "center",
            color: "#4f4e4e",
            maxWidth: 720,
            padding: "0 16px",
            wordBreak: "keep-all",
          }}
        >
          스타일링 시안에 따라 피드백을 주시면 최대 2회 수정 도와드리고 있으며,
          3D 모델링에 활용된 전 제품 리스트를 바로 구매하실 수 있도록 제품
          상세옵션과 링크를 정리하여 전달 드립니다.
        </p>
        <svg
          width={298}
          height={164}
          viewBox="0 0 298 164"
          fill="none"
          style={{
            marginTop: 70,
          }}
        >
          <path
            d="M0 20C0 8.95431 8.9543 0 20 0H278C289.046 0 298 8.95431 298 20V144C298 155.046 289.046 164 278 164H20C8.95431 164 0 155.046 0 144V20Z"
            fill="#D9D9D9"
          />
        </svg>

        {/* 상담톡 */}
        <a href="https://open.kakao.com/o/sHCcxOnh">
          <p
            style={{
              fontSize: 20,
              textAlign: "center",
              color: "#2f2f2f",
              marginTop: 100,
            }}
          >
            <u>1:1 상담톡 연결하기</u> ▶
          </p>
        </a>
      </div>
    </div>
  );
}
