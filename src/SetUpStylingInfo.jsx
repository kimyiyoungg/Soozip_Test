import { useNavigate } from "react-router-dom";

export default function SetUpStylingInfo() {
  const navigate = useNavigate(); // ✅ 선언  
  return (
    <div
      style={{
        width: 408,      // PC에서도 모바일처럼 보이게 제한
        height: "100dvh",      // 기기 높이 100% (주소창 대응)
        minHeight: 2100,
        // background: "#fff",
        background: "#fbf2d5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
        gap: 20,
      }}
    >
        
        <svg
            onClick={() => navigate("/room-counsult")}
            width={14}
            height={16}
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", left: "38.5px", top: "67.5px" }}
            preserveAspectRatio="none"
        >
            <path
                d="M0.292893 7.29289C-0.0976314 7.68342 -0.0976315 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538407 7.04738 0.538407 6.65685 0.928932L0.292893 7.29289ZM14 8L14 7L1 7L1 8L1 9L14 9L14 8Z"
                fill="black"
                fillOpacity="0.42"
            />
        </svg>
      

      {/* 상단 배경
      <div
        style={{
          width: "100%",
          height: 800,
          borderRadius: 30,
          background: "#fbf2d5",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 36,
        }}
      > */}
        
        {/* 상단 SVG */}
      {/* <div style={{ width: "100%", display: "flex", justifyContent: "flex-start", paddingLeft: 38.5, paddingTop: 67.5 }}>
        <svg
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
      </div> */}
     
        
       <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center", // 텍스트 중심
                position: "relative",
                marginTop: 100,
                width: "100%",
            }}
            >
            {/* 이미지: 왼쪽에 기울어지도록 position 조정 */}
            <img
                src="src/assets/bear3.png"
                style={{
                width: 91.14,
                height: 91.14,
                objectFit: "cover",
                position: "absolute",
                left: 30, // 왼쪽으로 조금 이동
                transform: "rotate(-5deg)", // 살짝 기울임
                }}
            />

            {/* 텍스트: 컨테이너 중앙 */}
            <p
                style={{
                fontSize: 15,
                textAlign: "center",
                color: "#000",
                zIndex: 1, // 이미지 위로 올라오도록
                marginTop: 100,
                }}
            >
                <b>SOOZIP만의 감각적인</b>
            </p>
        </div>



        {/* 메인 타이틀 */}
        <p style={{ marginTop: 1, fontSize: 32, fontWeight: 700, color: "#000" }}>
          배치 솔루션
        </p>
        {/* 이미지 */}
        <img
          src="src/assets/image 3.png"
          style={{
            width: 322,
            height: 211,
            marginTop: 20,
            borderRadius: 20,
            objectFit: "cover",
          }}
        />
        {/* 페이지 점 */}
        <div style={{ display: "flex", flexDirection: "row", gap: 5, marginTop: 11 }}>
          <div style={{ width: 20, height: 10, borderRadius: 50, background: "#fe6a0f" }} />
          <svg width={10} height={10} viewBox="0 0 10 10" fill="none">
            <circle cx={5} cy={5} r={5} fill="#D9D9D9" />
          </svg>
          <svg width={10} height={10} viewBox="0 0 10 10" fill="none">
            <circle cx={5} cy={5} r={5} fill="#D9D9D9" />
          </svg>
        </div>

            {/* 설명 텍스트 */}
        <div style={{ marginTop: 80, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
            <p style={{ margin: 0, fontSize: 20, textAlign: "center", color: "#000" }}>
            공간을 바꾸는 배치솔루션
            </p>
            <p style={{ margin: 0, fontSize: 20, textAlign: "center", color: "#000" }}>
            방을 최적의 배치로 꾸며주는 서비스
            </p>
        </div>
        
      {/* </div> */}

      

      {/* GUIDE 섹션 */}
      <div style={{ marginTop: 50, display: "flex", flexDirection: "column", alignItems: "center", gap: 20, marginBottom: 0 }}>
        <p style={{ fontSize: 20, fontWeight: 600, color: "#000", marginBottom:4 }}>배치솔루션 GUIDE</p>
        <svg width={207} height={1} viewBox="0 0 207 1" fill="none">
          <line x1="0" y1="0.5" x2={207} y2="0.5" stroke="black"/>
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
        <p style={{ fontSize: 20, textAlign: "center", color: "#000", marginTop: 20 }}>
          일단, 이렇게 이렇게 이렇게 해요
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
        <p style={{ fontSize: 20, textAlign: "center", color: "#000", marginTop: 20 }}>
          이단, 이렇게 이렇게 이렇게 해요
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
        <p style={{ fontSize: 20, textAlign: "center", color: "#000", marginTop: 20 }}>
          삼단, 이렇게 이렇게 이렇게 해요
        </p>
        <svg width={298} height={164} viewBox="0 0 298 164" fill="none">
          <path
            d="M0 20C0 8.95431 8.9543 0 20 0H278C289.046 0 298 8.95431 298 20V144C298 155.046 289.046 164 278 164H20C8.95431 164 0 155.046 0 144V20Z"
            fill="#D9D9D9"
          />
        </svg>

        {/* 상담톡 */}
        <a href="https://open.kakao.com/o/sHCcxOnh">
          <p style={{ fontSize: 16, textAlign: "center", color: "#2f2f2f", marginTop: 20 }}>
            <u>1:1 상담톡 연결하기</u> ▶
          </p>
        </a>
        
      </div>
    </div>
  );
}

