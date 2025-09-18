import { useNavigate } from "react-router-dom";

export default function StylingTypePage() {
  const navigate = useNavigate();
  return (

    <div
      style={{
        width: 408,
        // minHeight: 852,
        // width: "100%",         // 기기에 맞게 가로 폭 자동
        // maxWidth: 408,         // PC에서도 모바일처럼 보이게 제한
        // height: "100dvh",      // 기기 높이 100% (주소창 대응)
        // background: "#fbf2d5",
        // padding: "40px 20px",
        // display: "flex",
        // overflow: "hidden",    // 스크롤 제거
        // flexDirection: "column",
        // alignItems: "center",
        // gap: 20, // 요소 사이 간격
        height: "100vh",
        background: "#fbf2d5",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        alignItems: "center",
        // padding: "40px 20px",
        gap: 20, // 요소 사이 간격
      }}
    >

      <svg
        onClick={() => navigate("/TestResult")}
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

      {/* 헤더 */}
      <div
        style={{
          width: 150,
          height: 30,
          borderRadius: 30,
          background: "#000",
          color: "#fff",
          fontSize: 20,
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 60,
        }}
      >
        스타일링
      </div>

      {/* 설명 */}
      <div style={{fontSize: 20, fontWeight: 600, textAlign: "center", color: "#000"}}>
        <p>
            <b>soozip과 함께 스타일링 더 알아보고</b><br />
            <b>맞춤 솔루션을 찾아보세요</b>
        </p>

        <p style={{ fontSize: 13, fontWeight: 600, color: "#b8b1b1" }}>
        개인별 맞춤 솔루션을 선택할 수 있습니다.
        </p>
       </div>

    

      {/* === 배치 솔루션 === */}
      <button
        onClick={() => navigate("/styling-info")}
        style={{
          marginTop: 30,
          width: 312,
          height: 100,
          borderRadius: 12,
          background: "#fff",
          border: "1px solid #ddd9d9",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <p style={{ marginTop: 20, fontSize: 13, fontWeight: 600, color: "rgba(0,0,0,0.68)" }}>
            가구만 배치하고 싶어요!
          </p>
          <p style={{ marginTop: 8, fontSize: 20, fontWeight: 600 ,color: "#000"}}>배치 솔루션</p>
        </div>
        <img src="src/assets/bear.jpg" alt="bear" width="50" height="50" />
      </button>

      {/* === 소품 솔루션 버튼 === */}
      <button
        style={{
          width: 312,
          height: 100,
          borderRadius: 12,
          background: "#fff",
          border: "1px solid #ddd9d9",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <p style={{  marginTop: 20,fontSize: 13, fontWeight: 600, color: "rgba(0,0,0,0.68)" }}>
            공간에 어울리는 소품을 찾고 싶어요!
          </p>
          <p style={{  marginTop: 8,fontSize: 20, fontWeight: 600 ,color: "#000"}}>소품 솔루션</p>
        </div>
        <img src="src/assets/bear.jpg" alt="bear" width="50" height="50" />
      </button>

      {/* === 풀 스타일링 버튼 === */}
      <button
        style={{
          width: 312,
          height: 100,
          borderRadius: 12,
          background: "#fff",
          border: "1px solid #ddd9d9",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <p style={{  marginTop: 20, fontSize: 13, fontWeight: 600, color: "rgba(0,0,0,0.68)" }}>
            이제 입주해서 다 해주세요
          </p>
          <p style={{ marginTop: 8, fontSize: 20, fontWeight: 600,color: "#000" }}>풀 스타일링</p>
        </div>
        <img src="src/assets/bear.jpg" alt="bear" width="50" height="50" />
      </button>
    </div>
  );
}


// export default function StylingTypePage(){
    
//     return (
        
//         <div
//             style={{
//             width: 408,
//             height: 852,
//             position: "relative",
//             overflow: "hidden",
//             background: "#fbf2d5",
//             alignItems: 'center',
//         }}
//         >

//             <div
//                 style={{
//                 width: 150,
//                 height: 30,
//                 position: "absolute",
//                 left: 129,
//                 top: 144,
//                 borderRadius: 30,
//                 background: "#000",
//                 fontSize: 20,
//                 color: 'white',         // 글자 색 흰색
//                 alignItems: 'center',   // 세로 중앙
//                 justifyContent: 'center',// 가로 중앙
//                 fontWeight: 600
//                 }}
//             >
//                 스타일링
//             </div>

//             <p
//                 style={{
//                 position: "absolute",
//                 left: 56,
//                 top: 226,
//                 fontSize: 20,
//                 fontWeight: 600,
//                 textAlign: "center",
//                 color: "#000",
//                 }}
//             >
//                 <span style={{ fontSize: 20, fontWeight: 600, textAlign: "center", color: "#000" }}>
//                 soozip과 함께 스타일링 더 알아보고
//                 </span>
//                 <br />
//                 <span style={{ fontSize: 20, fontWeight: 600, textAlign: "center", color: "#000" }}>
//                 맞춤 솔루션을 찾아보세요
//                 </span>
//             </p>

//             <p
//                 style={{
//                 position: "absolute",
//                 left: 103,
//                 top: 299,
//                 fontSize: 13,
//                 fontWeight: 600,
//                 textAlign: "left",
//                 color: "#b8b1b1",
//                 }}
//             >
//                 개인별 맞춤 솔루션을 선택할 수 있습니다.
//             </p>

//             <button
//                 style={{
//                 cursor: "pointer",
//                 width: 312,
//                 height: 100,
//                 position: "absolute",
//                 left: 48,
//                 top: 382,
//                 borderRadius: 12,
//                 background: "#fff",
//                 borderWidth: 1,
//                 borderColor: "#ddd9d9",
//                 }}
//             >
                
            
//             </button>   
            
//             <p
//                 style={{
//                 position: "absolute",
//                 left: 69,
//                 top: 395,
//                 fontSize: 13,
//                 fontWeight: 600,
//                 textAlign: "left",
//                 color: "rgba(0,0,0,0.68)",
//                 }}
//             >
//                 가구만 배치하고 싶어요 !
//             </p>

//             <p
//             style={{
//             position: "absolute",
//             left: 69,
//             top: 415,
//             fontSize: 20,
//             fontWeight: 600,
//             textAlign: "left",
//             color: "#000",
//             }}
//             >
//                 배치솔루션
//             </p>

            
//             <div
//                 style={{
//                 width: 50,
//                 height: 50,
//                 position: "absolute",
//                 left: 292,
//                 top: 406,
//                 background: "#d9d9d9",
//             }}>
//                 <img src="src/assets/bear.jpg" alt="bear" width="50" height="50"/>
//             </div>
        
//             <button
//                 style={{
//                 cursor: "pointer",
//                 width: 312,
//                 height: 100,
//                 position: "absolute",
//                 left: 48,
//                 top: 498,
//                 borderRadius: 12,
//                 background: "#fff",
//                 borderWidth: 1,
//                 borderColor: "#ddd9d9",
//                 }}
//             >
                
//             </button>   
//             <p
//                 style={{
//                 position: "absolute",
//                 left: 70,
//                 top: 510,
//                 fontSize: 13,
//                 fontWeight: 600,
//                 textAlign: "left",
//                 color: "rgba(0,0,0,0.68)",
//                 }}
//             >
//                 공간에 어울리는 소품을 찾고 싶어요!
//             </p>

//             <p
//                 style={{
//                 position: "absolute",
//                 left: 69,
//                 top: 530,
//                 fontSize: 20,
//                 fontWeight: 600,
//                 textAlign: "left",
//                 color: "#000",
//                 }}
//             >
//                 소품 솔루션
//             </p>

//             <div
//                 style={{
//                 width: 50,
//                 height: 50,
//                 position: "absolute",
//                 left: 292,
//                 top: 527,
//                 background: "#d9d9d9",
//             }}>
//                 <img src="src/assets/bear.jpg" alt="bear" width="50" height="50"/>
//             </div>

//             <button
//                 style={{
//                 cursor: "pointer",
//                 width: 312,
//                 height: 100,
//                 position: "absolute",
//                 left: 48,
//                 top: 613,
//                 borderRadius: 12,
//                 background: "#fff",
//                 borderWidth: 1,
//                 borderColor: "#ddd9d9",
//                 }}>

//             </button>

//             <p
//                 style={{
//                 position: "absolute",
//                 left: 69,
//                 top: 622,
//                 fontSize: 13,
//                 fontWeight: 600,
//                 textAlign: "left",
//                 color: "rgba(0,0,0,0.68)",
//                 }}
//             >
//                 이제 입주해서 다 해주세요
//             </p>

//             <p
//                 style={{
//                 position: "absolute",
//                 left: 70,
//                 top: 640,
//                 fontSize: 20,
//                 fontWeight: 600,
//                 textAlign: "left",
//                 color: "#000",
//                 }}
//             >
//                 풀 스타일링
//             </p>      
//             <div
//                 style={{
//                 width: 50,
//                 height: 50,
//                 position: "absolute",
//                 left: 292,
//                 top: 636,
//                 background: "#d9d9d9",
//             }}>
//                 <img src="src/assets/bear.jpg" alt="bear" width="50" height="50"/>
//             </div> 
        

//         </div>
        

//     );
    
// }