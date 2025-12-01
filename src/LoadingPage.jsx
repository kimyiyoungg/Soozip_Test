import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/RoombtiTest");
    }, 1000); // 1초 로딩 후 이동

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        width: 408,
        height: "100dvh",
        background: "#fbf2d5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 로딩 이미지 / 애니메이션 */}
      <img
        src="src/assets/loading_bear.png"
        alt="loading"
        style={{
          width: 130,
          height: 90,
          marginBottom: "1.5rem",
          animation: "bounce 1s infinite ease-in-out",
        }}
      />

      <p style={{ fontSize: 30, fontWeight: 600, color: "#000" }}>
        잠시만 기다려주세요...
      </p>
    </div>
  );
}
