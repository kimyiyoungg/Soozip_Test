//카드 크기 통일하려고 만든 페이지임

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CardButton({
  id,
  title,
  subtitle,
  imgSrc,
  url,
  selectedId,
  setSelectedId,
}) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const borderColor =
    selectedId === id
      ? "#fe6a0f" // 클릭 선택 상태
      : isHovered
      ? "#fe6a0f" // hover 상태
      : "#ddd9d9"; // 기본

  return (
    <button
      onClick={() => {
        setSelectedId(id);
        if (url.startsWith("http")) window.location.href = url;
        else navigate(url);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: "100%",
        maxWidth: 360,
        height: 150,
        borderRadius: 12,
        background: "#fff",
        border: `2px solid ${borderColor}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // alignItems: "flex-start",
        padding: "20px",
        cursor: "pointer",
        outline: "none",
        transition: "border 0.2s ease, transform 0.15s ease",
      }}
    >
      <div 
        style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "90%",       // ← 전체 카드 높이에 맞춤
        textAlign: "left",
      }}>
        <p style={{ fontSize: 18, fontWeight: 600, color: "#000", margin: 8}}>
          {subtitle}
        </p>
        <p style={{ fontSize: 35, fontWeight: 800, color: "#000", margin: 8}}>{title}</p>
      </div>
      <img
        src={imgSrc}
        alt={title}
        width={80}
        height={80}
        style={{ borderRadius: 8, objectFit: "cover", margin: 5}}
      />
    </button>
    
  );
}
