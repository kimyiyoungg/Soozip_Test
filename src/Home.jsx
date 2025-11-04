import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: 408,
        minHeight: 600,
        height: "100dvh", //새로로 꽉차게 ,dvh는 주소창 높이를 제외한 실제 보이는 영역
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#fbf2d5",
        padding: "2rem 1rem",
        boxSizing: "border-box",
        cursor: "default"
      }}
    >
      <div style={{ textAlign: "center", cursor:"default"}}>
        <p style={{ fontSize: 12, fontWeight: 600, color: "#fe6a0f" }}>
          soozip
        </p>
        <p style={{ fontSize: 16, fontWeight: 600, color: "rgba(0,0,0,0.68)" }}>
          나의 집꾸 스타일은?
        </p>
        <p style={{ fontSize: 20, fontWeight: 600, color: "#000" }}>
          내가 어떤 공간을 좋아하는지 알아보세요.
        </p>
      </div>

      <img
        src="src/assets/bear3.png"
        alt="main"
        style={{
          width: 250,
          height: 250,
          objectFit: "cover",
          margin: "2rem 0",
        }}
      />

      <button
        style={{
          width: "100%",
          maxWidth: 360,
          height: 54,
          borderRadius: 12,
          background: "#000",
          border: "1px solid #ddd9d9",
          color: "#fff",
          fontSize: 19,
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={() => navigate("/RoombtiTest")}
      >
        방BTI 시작하기
      </button>
    </div>
  );
}
