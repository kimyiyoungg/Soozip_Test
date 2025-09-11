import { Routes, Route, useNavigate } from "react-router-dom";

import RoombtiTest from "./RoombtiTest";
import RoomCounsult from './RoomConsult';

export default function App() {
  const navigate = useNavigate();

  return (
<div>
  <RoomCounsult/>
</div>
    // <Routes>
    //   {/* 홈 화면 */}
    //   <Route
    //     path="/"
    //     element={
    //       <div
    //         style={{
    //           width: 408,
    //           minHeight: 852,
    //           display: "flex",
    //           flexDirection: "column",
    //           alignItems: "center",
    //           justifyContent: "space-between",
    //           background: "#fbf2d5",
    //           padding: "2rem 1rem",
    //           boxSizing: "border-box",
    //         }}
    //       >
    //         <div style={{ textAlign: "center" }}>
    //           <p style={{ fontSize: 12, fontWeight: 600, color: "#fe6a0f" }}>soozip</p>
    //           <p style={{ fontSize: 16, fontWeight: 600, color: "rgba(0,0,0,0.68)" }}>
    //             나의 집꾸 스타일은?
    //           </p>
    //           <p style={{ fontSize: 20, fontWeight: 600, color: "#000" }}>
    //             내가 어떤 공간을 좋아하는지 알아보세요.
    //           </p>
    //         </div>

    //         <img
    //           src="src/assets/IMG_3285 1.png"
    //           alt="main"
    //           style={{
    //             width: 250,
    //             height: 250,
    //             objectFit: "cover",
    //             margin: "2rem 0",
    //           }}
    //         />

    //         <button
    //           style={{
    //             width: "100%",
    //             maxWidth: 360,
    //             height: 54,
    //             borderRadius: 12,
    //             background: "#000",
    //             border: "1px solid #ddd9d9",
    //             color: "#fff",
    //             fontSize: 19,
    //             fontWeight: 600,
    //             display: "flex",
    //             alignItems: "center",
    //             justifyContent: "center",
    //             cursor: "pointer",
    //           }}
    //           onClick={() => navigate("/RoombtiTest")}
    //         >
    //           방BTI 시작하기
    //         </button>
    //       </div>
    //     }
    //   />

    //   {/* 다음 페이지 */}
    //   <Route path="/RoombtiTest" element={<RoombtiTest />} />
    // </Routes>
  );
}
