
// ShareResultPage.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export default function ShareResultPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const ctaPulse = {
    animation: "ctaPulse 1.8s ease-in-out infinite",
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("share_result")
        .select("*")
        .eq("id", id)
        .single();

      if (!error) setData(data);
    };

    fetchData();
  }, [id]);

  if (!data) return <p>결과 불러오는 중...</p>;

  


  return (
    <>
      <style>
      {`
      @keyframes ctaPulse {
        0% {
          transform: translateY(0);
          box-shadow: 0 4px 10px rgba(0,0,0,0.18);
        }
        50% {
          transform: translateY(-4px);
          box-shadow: 0 10px 22px rgba(0,0,0,0.28);
        }
        100% {
          transform: translateY(0);
          box-shadow: 0 4px 10px rgba(0,0,0,0.18);
        }
      }
      `}
      </style>
      {/* 메인 컨테이너 */}
      <div
        style={{
          color: "#000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100vw",
          minHeight: "100vh",
          paddingBottom: 140, // 하단 fixed 영역 가림 방지
          boxSizing: "border-box",
        }}
      >
        {/* 로고 영역 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "24px 0",
            marginTop: "30px"
          }}
        >
          <img
            src="https://mmfurloptocazvhfmcvk.supabase.co/storage/v1/object/public/roombti/soozip_logo.png"
            alt="로고"
            style={{ width: 22, height: 22 }}
          />
          <p
            style={{
              fontSize: 34,
              fontWeight: 700,
              margin: 0,
              lineHeight: 1,
            }}
          >
            SOOZIP
          </p>
        </div>

        {/* 제목 */}
        <h2 style={{ marginBottom: 20, fontSize:"25px" }}>
          <span class="magnifying-glass">&#x1F50D;</span>
          공유한 친구의
          <span style={{ marginLeft: 2 }} /> {/* 한 칸 띄우기 */}
          <span
            style={{
              backgroundImage:
                "linear-gradient(#f88d2f4D 0.5em, transparent 0)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 0.3em",
              backgroundPosition: "0 0.5em",
              fontSize:"25px"
            }}
          >
             인테리어 MBTI 결과
          </span>
        </h2>

        {/* 결과 이미지 */}
        <img
          src={data.result_image}
          alt="result"
          style={{
            width: "90%",
            maxWidth: 360,
            borderRadius: 12,
            marginBottom: 20,
          }}
        />

        {/* 텍스트 */}
        <p style={{ marginBottom: 12 , fontSize: "25px"}}>
          친구가 좋아하는 스타일: <b>{data.interior_text}</b>
        </p>

        {/* 인테리어 이미지 */}
        <img
          src={data.interior_image}
          alt="interior"
          style={{
            width: "80%",
            maxWidth: 360,
            borderRadius: 12,
          }}
        />
      </div>

      {/* 하단 고정 영역 */}
      <div
        style={{
          width: "100%",
          height: 120,
          position: "fixed",
          bottom: 0,
          left: 0,
          background:
            "linear-gradient(to top, #fff 85%, rgba(255,255,255,0) 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 16px",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            fontSize: 18,
            fontWeight: 500,
            marginBottom: 6,
            color:" #000",
          }}
        >
          나도 인테리어 MBTI 결과가 궁금하다면?
        </p>

        <button
          style={{
            width: "80%",
            maxWidth: 320,
            fontSize: 24,
            padding: "12px 0",
            borderRadius: 12,
            cursor: "pointer",
            ...ctaPulse, // ⭐ 이 줄만 추가
          }}
          onClick={() => {
            window.location.href =
              "https://soozip-bangbti.pages.dev";
          }}
        >
          방BTI 테스트 시작
        </button>
      </div>
    </>
  );
}

// // ShareResultPage.jsx
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   import.meta.env.VITE_SUPABASE_URL,
//   import.meta.env.VITE_SUPABASE_KEY
// );

// export default function ShareResultPage() {
//   const { id } = useParams();
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const { data, error } = await supabase
//         .from("share_result")
//         .select("*")
//         .eq("id", id)
//         .single();

//       if (!error) setData(data);
//     };

//     fetchData();
//   }, [id]);

//   if (!data) return <p>결과 불러오는 중...</p>;

//   return (
//     <div style={{ color: "#000", justifyContent: "center",alignContent:"center"}}>
//       {/* 하단 고정 영역 */}
//       <div
//         style={{
//           width: "100%",
//           // maxWidth: 408,
//           height: 120,
//           position: "fixed",
//           bottom: 0,
//           // background: "#fff",
//           background: "linear-gradient(to top, #fff 85%, rgba(255,255,255,0) 100%)",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: "10px 16px",
//           boxSizing: "border-box",
//         }}
//       >
//         <p
//           style={{
//             fontSize: 18,
//             fontWeight: 500,
//             marginBottom: 5,
//             color: "#000",
//           }}
//         >
//           나도 인테리어 MBTI 결과가 궁금하다면?
//         </p>

//         <button style={{width:"80%", fontSize:"20px"}}onClick={() => {
//           window.location.href = "https://soozip-bangbti.pages.dev";
//         }}>
//           방BTI 테스트 시작
//         </button>
//         {/* </div> */}
        
//       </div>
//       <div style={{ display: "flex", alignItems: "center", gap: 5, padding:"30px"}}>
//             <img
//               //src="src/assets/soozip_logo.png"
//               src="https://mmfurloptocazvhfmcvk.supabase.co/storage/v1/object/public/roombti/soozip_logo.png"
//               alt="로고"
//               style={{
//                 width: 20,
//                 height: 20,
//                 marginBottom: 10,
//                 marginLeft: 10,
//                 // marginTop:0
//               }}
//             />
//             <p
//               style={{
//                 fontSize: 35,
//                 fontWeight: 700,
//                 color: "#000",
//                 margin: 0, // margin 제거
//                 lineHeight: 1, // 글씨 바닥 맞춤
//               }}
//             >
//               SOOZIP
//             </p>
//           </div>

//       <h2>친구의 인테리어 MBTI 결과</h2>

//       <img
//         src={data.result_image}
//         alt="result"
//         style={{ width: "80%",borderRadius: 12 }}
//       />


//       <p>
//         선택한 스타일: <b>{data.interior_text}</b>
//       </p>

//       <img
//         src={data.interior_image}
//         alt="interior"
//         style={{ width: "80%", marginTop: 12, borderRadius: 12 }}
//       />
//     </div>
//   );
// }
