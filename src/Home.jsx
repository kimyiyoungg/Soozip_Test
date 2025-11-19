import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: 408,
        minHeight: 600,
        height: "100dvh", // 세로 꽉 차게
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#fbf2d5",
        padding: "2rem 1rem",
        boxSizing: "border-box",
        cursor: "default",
      }}
    >
      {/* 상단 로고 + 텍스트 */}
      <div style={{ textAlign: "center", cursor: "default" }}>
        {/* 로고 + '수집 방BTI' 한 줄 배치 */}
        <div
          style={{
            display: "flex",
            alignItems: "center", // 세로 가운데 정렬
            justifyContent: "center", // 전체 중앙 정렬
            gap: "6px", // 로고와 글씨 사이 간격
            margin: "30px 0 8px 0",
          }}
        >
          <img
            src="src/assets/soozip_logo.png"
            alt="로고"
            style={{
              width: "20px", // 작게!
              height: "20px",
              objectFit: "contain",
              position: "relative",
              top: "40px",
            }}
          />
          <p
            style={{
              fontSize: 25,
              fontWeight: 600,
              color: "rgba(0,0,0,0.68)",
              margin: 0, // 기본 여백 제거
              position: "relative",
              top: "40px",
            }}
          >
            수집 방BTI
          </p>
        </div>

        <p style={{ fontSize: 45, fontWeight: 1000, color: "#000" }}>
          나의 집꾸 스타일은?
        </p>
      </div>

      {/* 중앙 이미지 */}
      <img
        src="src/assets/bear3.png"
        alt="main"
        style={{
          marginBottom: "50px",
          width: 300,
          height: 300,
          objectFit: "cover",
          margin: "2rem 0",
        }}
      />

      {/* 하단 버튼 */}
      <button
        style={{
          width: "100%",
          maxWidth: 360,
          height: 54,
          borderRadius: 12,
          background: "#000",
          border: "1px solid #ddd9d9",
          color: "#fff",
          fontSize: 25,
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={() => navigate("/RoombtiTest")}
      >
        방BTI 알아보기
      </button>
    </div>
  );
}