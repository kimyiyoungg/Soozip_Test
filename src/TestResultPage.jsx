export default function TestResultPage() {
  return (
    <div
      style={{
        width: 408,
        minHeight: 1500, // 스크롤 영역 높이 고정
        margin: "0 auto",
        background: "#fbf2d5",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* ✅ 스크롤 되는 영역 */}
      <div style={{ flex: 1, padding: "150px 0 0 0", position: "relative" }}>
       
       
        <p
          style={{
            fontSize: 16,
            fontWeight: 700,
            textAlign: "center",
            color: "#000",
            marginBottom: 20,
          }}
        >
          SOOZIP
        </p>

        
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 50, paddingRight: 25 }}>
          <img
            src="src/assets/bear2.png"
            style={{ width: 148, height: 96, objectFit: "cover" }}
          />
        </div> 
       

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", padding: "0 25px", }}>
            {/* 왼쪽 텍스트 */}
            <p
                style={{
                fontSize: 16,
                fontWeight: 700,
                color: "#000",
                margin: 10,
                }}
            >
                SOOZIP
            </p>

            {/* 오른쪽 이미지 */}
            <img
                src="src/assets/bear2.png"
                style={{ width: 148, height: 96, objectFit: "cover" }}
            />
        </div>

        {/* 메인 SVG 박스 */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
          <svg
            width={361}
            height={490}
            viewBox="0 0 361 490"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 20C0 8.9543 8.9543 0 20 0H341C352.046 0 361 8.9543 361 20V470C361 481.046 352.046 490 341 490H20C8.95431 490 0 481.046 0 470V20Z"
              fill="#D9D9D9"
            />
          </svg>
        </div>

        

        {/* 이미지 저장 / 테스트 공유 */}
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", gap: 5, marginBottom: 20 }}>
          <p
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: "#000",
              cursor: "pointer",
              margin: 0
            }}
            onClick={() => alert("이미지 저장 기능 준비 중입니다")}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#555")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#000")}
          >
            이미지 저장
          </p>
          
          <p
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: "#000",
              cursor: "pointer",
            }}
            onClick={() => alert("테스트 공유 기능 준비 중입니다")}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#555")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#000")}
          >
            테스트 공유
          </p>
        </div>

        <hr style={{ border: "1px solid #D9D9D9", width: 354, marginTop: 30, marginBottom : 50 }} />

        
        {/* TIP 버튼 */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
          <div
            style={{
              width: 75,
              height: 36,
              borderRadius: 100,
              background: "#2f2f2f",
              color: "#fff",
              fontSize: 20,
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            TIP
          </div>
        </div>

        <p style={{ fontSize: 20, fontWeight: 600, textAlign: "center", color: "#000" ,marginTop:20 ,marginBottom: 30}}>
          나에게 어울리는 인테리어는?
        </p>


      <div style={{ display: "flex", justifyContent: "space-between", padding: "0 25px" }}>
        {/* 첫 번째 카드 + 글자 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <svg
            width={164}
            height={164}
            viewBox="0 0 164 164"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 20C0 8.95431 8.95431 0 20 0H144C155.046 0 164 8.95431 164 20V144C164 155.046 155.046 164 144 164H20C8.9543 164 0 155.046 0 144V20Z"
              fill="#D9D9D9"
            />
          </svg>
          <p style={{ fontSize: 16, textAlign: "center", color: "#000", marginTop: 8 }}>AAA 스타일</p>
        </div>

        {/* 두 번째 카드 + 글자 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <svg
            width={164}
            height={164}
            viewBox="0 0 164 164"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 20C0 8.95431 8.95431 0 20 0H144C155.046 0 164 8.95431 164 20V144C164 155.046 155.046 164 144 164H20C8.9543 164 0 155.046 0 144V20Z"
              fill="#D9D9D9"
            />
          </svg>
          <p style={{ fontSize: 16, textAlign: "center", color: "#000", marginTop: 8 }}>BBB 스타일</p>
        </div>
      </div>

    </div>


      {/* ✅ 하단 고정 영역 */}
      <div
        style={{
          width: 408,
          height: 119,
          position: "fixed",
          bottom: 0,
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 16px",
          boxSizing: "border-box",
        }}
      >
        <p style={{ fontSize: 14, marginBottom: 12, color: "#000" }}>
          내 인테리어 취향으로 방을 꾸며요
        </p>
        <div
          style={{
            width: "100%",
            height: 56,
            borderRadius: 18,
            background: "#2f2f2f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <p style={{ fontSize: 16, color: "#fff" }}>홈스타일링 상담 알아보기</p>
        </div>
      </div>
    </div>
  );
}




// // 자리 박은 버전
// export default function TestResultPage() {
//   return (
//     <div
//       style={{
//         width: 408,
//         minHeight: "100vh",
//         margin: "0 auto",
//         background: "#fbf2d5",
//         position: "relative",
//         overflowY: "auto",
//       }}
//     >
//       {/* ✅ 스크롤 되는 영역 */}
//       <div style={{ paddingBottom: 1500 }}>
        
//         <p
//                 style={{
//                 position: "absolute",
//                 left: 35,
//                 top: 150,
//                 fontSize: 16,
//                 fontWeight: 700,
//                 textAlign: "center",
//                 color: "#000",
//                 }}
//             >
//                 SOOZIP
//             </p>
           
            // <svg
            //     width={361}
            //     height={490}
            //     viewBox="0 0 361 490"
            //     fill="none"
            //     xmlns="http://www.w3.org/2000/svg"
            //     style={{ position: "absolute", left: 22, top: 193 }}
            //     preserveAspectRatio="none"
            // >
            //     <path
            //     d="M0 20C0 8.9543 8.9543 0 20 0H341C352.046 0 361 8.9543 361 20V470C361 481.046 352.046 490 341 490H20C8.95431 490 0 481.046 0 470V20Z"
            //     fill="#D9D9D9"
            //     />
            // </svg>
//             <img
//                 src="src/assets/bear2.png"
//                 style={{ width: 148, height: 96, position: "absolute", left: 235, top: 97, objectFit: "cover" }}
//             />

//             {/* 이미지 저장 */}
//             <p
//                 style={{
//                 position: "absolute",
//                 left: 177,
//                 top: 695,
//                 fontSize: 16,
//                 fontWeight: 700,
//                 textAlign: "center",
//                 color: "#000",
//                 cursor: "pointer",
//                 }}
//                 onClick={() => alert("이미지 저장 기능 준비 중입니다")}
//                 onMouseEnter={(e) => (e.currentTarget.style.color = "#555")}
//                 onMouseLeave={(e) => (e.currentTarget.style.color = "#000")}
//             >
//                 이미지 저장
//             </p>

//             {/* 테스트 공유 */}
//             <p
//                 style={{
//                 position: "absolute",
//                 left: 179,
//                 top: 740,
//                 fontSize: 16,
//                 fontWeight: 700,
//                 textAlign: "center",
//                 color: "#000",
//                 cursor: "pointer",
//                 }}
//                 onClick={() => alert("테스트 공유 기능 준비 중입니다")}
//                 onMouseEnter={(e) => (e.currentTarget.style.color = "#555")}
//                 onMouseLeave={(e) => (e.currentTarget.style.color = "#000")}
//             >
//                 테스트 공유
//             </p>
//             <svg
//                 width={354}
//                 height={1}
//                 viewBox="0 0 354 1"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 style={{ position: "absolute", left: 30, top: 857 }}
//                 preserveAspectRatio="none"
//             >
//                 <line y1="0.5" x2={354} y2="0.5" stroke="#D9D9D9" />
//             </svg>
//             <svg
//                 width={164}
//                 height={164}
//                 viewBox="0 0 164 164"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 style={{ position: "absolute", left: 25, top: 1064 }}
//                 preserveAspectRatio="none"
//             >
//                 <path
//                 d="M0 20C0 8.95431 8.95431 0 20 0H144C155.046 0 164 8.95431 164 20V144C164 155.046 155.046 164 144 164H20C8.9543 164 0 155.046 0 144V20Z"
//                 fill="#D9D9D9"
//                 />
//             </svg>
//             <svg
//                 width={164}
//                 height={164}
//                 viewBox="0 0 164 164"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 style={{ position: "absolute", left: 216, top: 1064 }}
//                 preserveAspectRatio="none"
//             >
//                 <path
//                 d="M0 20C0 8.95431 8.95431 0 20 0H144C155.046 0 164 8.95431 164 20V144C164 155.046 155.046 164 144 164H20C8.9543 164 0 155.046 0 144V20Z"
//                 fill="#D9D9D9"
//                 />
//             </svg>
//             <svg
//                 width={14}
//                 height={16}
//                 viewBox="0 0 14 16"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 style={{ position: "absolute", left: "38.5px", top: "67.51px" }}
//                 preserveAspectRatio="none"
//             >
//                 <path
//                 d="M0.292893 7.3029C-0.0976314 7.69343 -0.0976315 8.32659 0.292893 8.71712L6.65685 15.0811C7.04738 15.4716 7.68054 15.4716 8.07107 15.0811C8.46159 14.6906 8.46159 14.0574 8.07107 13.6669L2.41421 8.01001L8.07107 2.35316C8.46159 1.96263 8.46159 1.32947 8.07107 0.938941C7.68054 0.548417 7.04738 0.548417 6.65685 0.938941L0.292893 7.3029ZM14 8.01001L14 7.01001L1 7.01001L1 8.01001L1 9.01001L14 9.01001L14 8.01001Z"
//                 fill="black"
//                 fill-opacity="0.42"
//                 />
//             </svg>
//             <svg
//                 width={24}
//                 height={24}
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 style={{ width: 24, height: 24, position: "absolute", left: 146, top: 715 }}
//                 preserveAspectRatio="none"
//             >
//                 <path
//                 d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z"
//                 fill="black"
//                 />
//             </svg>
//             <svg
//                 width={86}
//                 height={1}
//                 viewBox="0 0 86 1"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 style={{ position: "absolute", left: 174, top: 736 }}
//                 preserveAspectRatio="none"
//             >
//                 <line y1="0.5" x2={86} y2="0.5" stroke="black" />
//             </svg>
//             <svg
//                 width={86}
//                 height={1}
//                 viewBox="0 0 86 1"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 style={{ position: "absolute", left: 174, top: 780 }}
//                 preserveAspectRatio="none"
//             >
//                 <line y1="0.5" x2={86} y2="0.5" stroke="black" />
//             </svg>
            // <svg
            //     width={23}
            //     height={23}
            //     viewBox="0 0 23 23"
            //     fill="none"
            //     xmlns="http://www.w3.org/2000/svg"
            //     style={{ width: 23, height: 23, position: "absolute", left: 147, top: 758 }}
            //     preserveAspectRatio="none"
            // >
            //     <path
            //     d="M16.2915 21.0833C15.4929 21.0833 14.8141 20.8038 14.255 20.2448C13.696 19.6858 13.4165 19.0069 13.4165 18.2083C13.4165 18.1125 13.4405 17.8889 13.4884 17.5375L6.75609 13.6083C6.50053 13.8479 6.20505 14.0356 5.86963 14.1714C5.53421 14.3071 5.17484 14.375 4.7915 14.375C3.99289 14.375 3.31407 14.0955 2.75505 13.5365C2.19602 12.9774 1.9165 12.2986 1.9165 11.5C1.9165 10.7014 2.19602 10.0226 2.75505 9.46354C3.31407 8.90451 3.99289 8.625 4.7915 8.625C5.17484 8.625 5.53421 8.69288 5.86963 8.82864C6.20505 8.96441 6.50053 9.15208 6.75609 9.39166L13.4884 5.4625C13.4564 5.35069 13.4365 5.24288 13.4285 5.13906C13.4205 5.03524 13.4165 4.91944 13.4165 4.79166C13.4165 3.99305 13.696 3.31423 14.255 2.75521C14.8141 2.19618 15.4929 1.91666 16.2915 1.91666C17.0901 1.91666 17.7689 2.19618 18.328 2.75521C18.887 3.31423 19.1665 3.99305 19.1665 4.79166C19.1665 5.59028 18.887 6.26909 18.328 6.82812C17.7689 7.38715 17.0901 7.66666 16.2915 7.66666C15.9082 7.66666 15.5488 7.59878 15.2134 7.46302C14.878 7.32725 14.5825 7.13958 14.3269 6.9L7.59463 10.8292C7.62657 10.941 7.64654 11.0488 7.65452 11.1526C7.66251 11.2564 7.6665 11.3722 7.6665 11.5C7.6665 11.6278 7.66251 11.7436 7.65452 11.8474C7.64654 11.9512 7.62657 12.059 7.59463 12.1708L14.3269 16.1C14.5825 15.8604 14.878 15.6727 15.2134 15.537C15.5488 15.4012 15.9082 15.3333 16.2915 15.3333C17.0901 15.3333 17.7689 15.6128 18.328 16.1719C18.887 16.7309 19.1665 17.4097 19.1665 18.2083C19.1665 19.0069 18.887 19.6858 18.328 20.2448C17.7689 20.8038 17.0901 21.0833 16.2915 21.0833ZM16.2915 19.1667C16.563 19.1667 16.7906 19.0748 16.9743 18.8911C17.158 18.7075 17.2498 18.4799 17.2498 18.2083C17.2498 17.9368 17.158 17.7092 16.9743 17.5255C16.7906 17.3418 16.563 17.25 16.2915 17.25C16.02 17.25 15.7924 17.3418 15.6087 17.5255C15.425 17.7092 15.3332 17.9368 15.3332 18.2083C15.3332 18.4799 15.425 18.7075 15.6087 18.8911C15.7924 19.0748 16.02 19.1667 16.2915 19.1667ZM4.7915 12.4583C5.06303 12.4583 5.29064 12.3665 5.47432 12.1828C5.658 11.9991 5.74984 11.7715 5.74984 11.5C5.74984 11.2285 5.658 11.0009 5.47432 10.8172C5.29064 10.6335 5.06303 10.5417 4.7915 10.5417C4.51998 10.5417 4.29237 10.6335 4.10869 10.8172C3.92501 11.0009 3.83317 11.2285 3.83317 11.5C3.83317 11.7715 3.92501 11.9991 4.10869 12.1828C4.29237 12.3665 4.51998 12.4583 4.7915 12.4583ZM16.2915 5.75C16.563 5.75 16.7906 5.65816 16.9743 5.47448C17.158 5.2908 17.2498 5.06319 17.2498 4.79166C17.2498 4.52014 17.158 4.29253 16.9743 4.10885C16.7906 3.92517 16.563 3.83333 16.2915 3.83333C16.02 3.83333 15.7924 3.92517 15.6087 4.10885C15.425 4.29253 15.3332 4.52014 15.3332 4.79166C15.3332 5.06319 15.425 5.2908 15.6087 5.47448C15.7924 5.65816 16.02 5.75 16.2915 5.75Z"
            //     fill="black"
            //     />
            // </svg>
//             {/* <div style={{ width: 131, height: 36, position: "relative", alignItems: "center", justifyContent:"center", top: 940 }}> */}
//                 <div style={{ width: 131, height: 36, position: "relative", left: 135, top: 940 }}>
//                 <div
//                 style={{
//                     width: 75,
//                     height: 36,
//                     position: "relative",
//                     left: 28,
//                     // top: "-1px",
//                     borderRadius: 100,
//                     background: "#2f2f2f",
//                     color: "#fff",
//                     fontSize: 20,
//                     fontWeight: 500,
//                     alignItems: "center",
//                     justifyContent: "center", 
//                 }}
//                 >
//                 TIP</div>
//             </div>
//             <p
//                 style={{
//                 width: 136,
//                 height: 26,
//                 position: "absolute",
//                 left: 236,
//                 top: 1251,
//                 fontSize: 16,
//                 textAlign: "center",
//                 color: "#000",
//                 }}
//             >
//                 BBB 스타일
//             </p>
//             <p
//                 style={{
//                 width: 136,
//                 height: 26,
//                 position: "absolute",
//                 left: 41,
//                 top: 1253,
//                 fontSize: 16,
//                 textAlign: "center",
//                 color: "#000",
//                 }}
//             >
//                 AAA 스타일
//             </p>

//       </div>

//       {/* ✅ 하단 고정 영역 */}
//        <div
//         style={{
//           width: 408,
//           height: 119,
//           position: "fixed",
//           bottom: 0,
//           background: "#fff",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: "10px 16px",
//           boxSizing: "border-box",
//         }}
//       >
        
//         <p style={{ fontSize: 14, marginBottom: 12, color: "#000" }}>
//           내 인테리어 취향으로 방을 꾸며요
//         </p>
//         <div
//           style={{
//             width: "100%",
//             height: 56,
//             borderRadius: 18,
//             background: "#2f2f2f",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             cursor: "pointer",
//           }}
//         >
//           <p style={{ fontSize: 16, color: "#fff" }}>홈스타일링 상담 알아보기</p>
//         </div>
//       </div>
        
//     </div>
//   );
// }
