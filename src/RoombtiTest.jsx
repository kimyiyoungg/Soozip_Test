
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ 추가
;
export default function RoombtiTest() {
  const [selected, setSelected] = useState(null); // 선택 상태 저장

  const navigate = useNavigate();
  return (
    <div
      style={{
        width: 408,
        height: 852,
        position: "relative",
        overflow: "hidden",
        background: "#fbf2d5",
      }}
    >
      <img
        src="src/assets/IMG_3286.png"
        style={{
          width: 50,
          height: 36,
          position: "absolute",
          left: 133,
          top: 127,
          objectFit: "cover",
        }}
      />

      <div
        style={{
          width: 280,
          height: 10,
          position: "absolute",
          left: 63,
          top: 163,
          borderRadius: 20,
          background: "#ddd9d9",
        }}
      />
      <div
        style={{
          width: 95,
          height: 10,
          position: "absolute",
          left: 63,
          top: 163,
          borderRadius: 20,
          background: "#fe6a0f",
        }}
      />
    <svg
      onClick={() => navigate("/TestResult")}
      style={{ cursor: "pointer", position: "absolute", left: "365.5px", top: "67.5px" }}
      width={14}
      height={16}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path d="M13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289L7.34315 0.928932C6.95262 0.538408 6.31946 0.538408 5.92893 0.928932C5.53841 1.31946 5.53841 1.95262 5.92893 2.34315L11.5858 8L5.92893 13.6569C5.53841 14.0474 5.53841 14.6805 5.92893 15.0711C6.31946 15.4616 6.95262 15.4616 7.34315 15.0711L13.7071 8.70711ZM0 8V9H13V8V7H0V8Z"
        fill="black"
        fillOpacity="0.42"
      />
    </svg>

      <svg
      onClick={() => navigate("/")}
        width={14}
        height={16}
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: "pointer", position: "absolute", left: "38.5px", top: "67.5px" }}
        preserveAspectRatio="none"
      >
        <path
          d="M0.292893 7.29289C-0.0976314 7.68342 -0.0976315 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538407 7.04738 0.538407 6.65685 0.928932L0.292893 7.29289ZM14 8L14 7L1 7L1 8L1 9L14 9L14 8Z"
          fill="black"
          fillOpacity="0.42"
        />
      </svg>

      <p
        style={{
          position: "absolute",
          left: 57,
          top: 243,
          fontSize: 20,
          fontWeight: 600,
          textAlign: "left",
          color: "#000",
        }}
      >
        선호하는 방 스타일을 선택해주세요.
      </p>

      <p
        style={{
          position: "absolute",
          left: 59,
          top: 213,
          fontSize: 20,
          fontWeight: 600,
          textAlign: "left",
          color: "#000",
        }}
      >
        Q1.
      </p>

      {/* 선택1 */}
      <div
        onClick={() => setSelected(1)}
        style={{
          width: 312,
          height: 200,
          position: "absolute",
          left: "48.5px",
          top: "315.5px",
          borderRadius: 12,
          background: "#fff",
          border: `2px solid ${selected === 1 ? "#fe6a0f" : "#ddd9d9"}`,
          cursor: "pointer",
        }}
      >
        <p
          style={{
            width: 227,
            position: "absolute",
            left: 192,
            top: 409,
            fontSize: 14,
            fontWeight: 500,
            textAlign: "left",
            color: "#000",
          }}
        >
          선택1
        </p>
      </div>

      {/* 선택2 */}
      <div
        onClick={() => setSelected(2)}
        style={{
          width: 312,
          height: 200,
          position: "absolute",
          left: 49,
          top: 554,
          borderRadius: 12,
          background: "#fff",
          border: `2px solid ${selected === 2 ? "#fe6a0f" : "#ddd9d9"}`,
          cursor: "pointer",
        }}
      >
        <p
          style={{
            width: 227,
            position: "absolute",
            left: 189,
            top: 647,
            fontSize: 14,
            fontWeight: 500,
            textAlign: "left",
            color: "#000",
          }}
        >
          선택2
        </p>
      </div>
    </div>
  );
}

// export default function RoombtiTest() {
//   return (
//    <div
//   style={{
//     width: 408,
//     height: 852,
//     position: "relative",
//     overflow: "hidden",
//     background: "#fbf2d5",
//   }}
// >
//   <img
//     src="src/assets/IMG_3286.png"
//     style={{ width: 50, height: 36, position: "absolute", left: 133, top: 127, objectFit: "cover" }}
//   />
//   <div
//     style={{
//       width: 280,
//       height: 10,
//       position: "absolute",
//       left: 63,
//       top: 163,
//       borderRadius: 20,
//       background: "#ddd9d9",
//     }}
//   />
//   <div
//     style={{
//       width: 95,
//       height: 10,
//       position: "absolute",
//       left: 63,
//       top: 163,
//       borderRadius: 20,
//       background: "#fe6a0f",
//     }}
//   />
//   <svg
//     width={14}
//     height={16}
//     viewBox="0 0 14 16"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     style={{ position: "absolute", left: "365.5px", top: "67.5px" }}
//     preserveAspectRatio="none"
//   >
//     <path
//       d="M13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289L7.34315 0.928932C6.95262 0.538408 6.31946 0.538408 5.92893 0.928932C5.53841 1.31946 5.53841 1.95262 5.92893 2.34315L11.5858 8L5.92893 13.6569C5.53841 14.0474 5.53841 14.6805 5.92893 15.0711C6.31946 15.4616 6.95262 15.4616 7.34315 15.0711L13.7071 8.70711ZM0 8V9H13V8V7H0V8Z"
//       fill="black"
//       fill-opacity="0.42"
//     />
//   </svg>
//   <svg
//     width={14}
//     height={16}
//     viewBox="0 0 14 16"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     style={{ position: "absolute", left: "38.5px", top: "67.5px" }}
//     preserveAspectRatio="none"
//   >
//     <path
//       d="M0.292893 7.29289C-0.0976314 7.68342 -0.0976315 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538407 7.04738 0.538407 6.65685 0.928932L0.292893 7.29289ZM14 8L14 7L1 7L1 8L1 9L14 9L14 8Z"
//       fill="black"
//       fill-opacity="0.42"
//     />
//   </svg>
//   <p
//     style={{
//       position: "absolute",
//       left: 57,
//       top: 243,
//       fontSize: 20,
//       fontWeight: 600,
//       textAlign: "left",
//       color: "#000",
//     }}
//   >
//     선호하는 방 스타일을 선택해주세요.
//   </p>
//   <p
//     style={{
//       position: "absolute",
//       left: 59,
//       top: 213,
//       fontSize: 20,
//       fontWeight: 600,
//       textAlign: "left",
//       color: "#000",
//     }}
//   >
//     Q1.
//   </p>
//   <div
//     style={{
//       width: 312,
//       height: 200,
//       position: "absolute",
//       left: "48.5px",
//       top: "315.5px",
//       borderRadius: 12,
//       background: "#fff",
//       borderWidth: 2,
//       borderColor: "#fe6a0f",
//     }}
//   />
//   <div
//     style={{
//       width: 312,
//       height: 200,
//       position: "absolute",
//       left: 49,
//       top: 554,
//       borderRadius: 12,
//       background: "#fff",
//       borderWidth: 1,
//       borderColor: "#ddd9d9",
//     }}
//   />
//   <p
//     style={{
//       width: 227,
//       position: "absolute",
//       left: 189,
//       top: 647,
//       fontSize: 14,
//       fontWeight: 500,
//       textAlign: "left",
//       color: "#000",
//     }}
//   >
//     선택2
//   </p>
//   <p
//     style={{
//       width: 227,
//       position: "absolute",
//       left: 192,
//       top: 409,
//       fontSize: 14,
//       fontWeight: 500,
//       textAlign: "left",
//       color: "#000",
//     }}
//   >
//     선택1
//   </p>

// </div>
//   )
// }