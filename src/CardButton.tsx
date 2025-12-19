
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
  const [isActive, setIsActive] = useState(false);

  const isSelected = selectedId === id;

  return (
    <button
      onClick={() => {
        setSelectedId(id);
        if (url.startsWith("http")) window.location.href = url;
        else navigate(url);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      style={{
        width: "100%",
        maxWidth: 360,
        height: 160,

        borderRadius: 20,
        background: isSelected ? "#fff6f0" : "#ffffff",
        border: isSelected
          ? "2px solid #fe6a0f"
          : "1.5px solid #eee",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",

        cursor: "pointer",
        outline: "none",

        boxShadow: isActive
          ? "0 4px 10px rgba(0,0,0,0.15)"
          : isHovered || isSelected
          ? "0 12px 28px rgba(254, 106, 15, 0.18)"
          : "0 6px 18px rgba(0, 0, 0, 0.08)",

        transform: isActive
          ? "translateY(1px) scale(0.98)"
          : isHovered
          ? "translateY(-4px)"
          : "translateY(0)",

        transition: "all 0.18s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          textAlign: "center",
        }}
      >
        {/* 아이콘 / 이모지 */} 
        {/* <div
          style={{
            fontSize: 26,
            marginBottom: 2,
            transition: "transform 0.2s ease",
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        >
          🛋️
        </div> */}

        <p
          style={{
            fontSize: 20,
            fontWeight: 500,
            color: "#666",
            margin: 0,
            letterSpacing: "-0.2px",
          }}
        >
          {subtitle}
        </p>

        <p
          style={{
            fontSize: 40,
            fontWeight: 800,
            color: "#111",
            margin: 0,
            letterSpacing: "-0.6px",
          }}
        >
          {title}
        </p>
      </div>
    </button>
  );
}


// // //카드 크기 통일하려고 만든 페이지임

// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// export default function CardButton({
//   id,
//   title,
//   subtitle,
//   imgSrc,
//   url,
//   selectedId,
//   setSelectedId,
// }) {
//   const navigate = useNavigate();
//   const [isHovered, setIsHovered] = useState(false);

//   const borderColor =
//     selectedId === id
//       ? "#fe6a0f" // 클릭 선택 상태
//       : isHovered
//       ? "#fe6a0f" // hover 상태
//       : "#ddd9d9"; // 기본

//   return (
//     <button
//       onClick={() => {
//         setSelectedId(id);
//         if (url.startsWith("http")) window.location.href = url;
//         else navigate(url);
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{
//         width: "100%",
//         maxWidth: 360,
//         height: 150,
//         borderRadius: 12,
//         background: "#fff",
//         border: `2px solid ${borderColor}`,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         // alignItems: "flex-start",
//         padding: "20px",
//         cursor: "pointer",
//         outline: "none",
//         transition: "border 0.2s ease, transform 0.15s ease",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//           height: "90%", // ← 전체 카드 높이에 맞춤
//           textAlign: "center",
//         }}
//       >
//         <p style={{ fontSize: 20, fontWeight: 600, color: "#000", margin: 8 }}>
//           {subtitle}
//         </p>
//         <p style={{ fontSize: 40, fontWeight: 800, color: "#000", margin: 8 }}>
//           {title}
//         </p>
//       </div>
//     </button>
//   );
// }

