// import { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default function LoadingPage() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // ⭐ TestResultPage와 동일
//   const { session_id } = location.state || {};

//   const [isFetched, setIsFetched] = useState(false);

//   useEffect(() => {
//     if (!session_id) return;

//     const fetchResult = async () => {
//       try {
//         const { data, error } = await supabase
//           .from("resulttype")
//           .select("*")
//           .eq("session_id", session_id)
//           .maybeSingle();

//         if (error) {
//           console.error("DB 조회 실패:", error);
//         }

//         // ⭐ 결과 유무와 상관없이 저장 (TestResultPage와 동일)
//         localStorage.setItem("lastResult", JSON.stringify(data));
//       } catch (e) {
//         console.error(e);
//       } finally {
//         // ⭐ DB 조회가 끝났다는 사실만 중요
//         setIsFetched(true);
//       }
//     };

//     fetchResult();
//   }, [session_id]);

//   // ⭐ 조회 완료되면 결과 페이지로 이동
//   useEffect(() => {
//     if (isFetched) {
//       navigate("/RoombtiTest", {
//         replace: true,
//         state: { session_id }, // 👉 다시 넘겨줌 (중요)
//       });
//     }
//   }, [isFetched, navigate, session_id]);

//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "100dvh",
//         background: "#fbf2d5",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <img
//         src="https://mmfurloptocazvhfmcvk.supabase.co/storage/v1/object/public/roombti/loading_bear.png"
//         alt="loading"
//         style={{ width: 130, height: 90, marginBottom: "1.5rem" }}
//       />
//       <p style={{ fontSize: 30, fontWeight: 600 }}>잠시만 기다려주세요...</p>
//     </div>
//   );
// }
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
        width: "100vw",
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
        src="https://mmfurloptocazvhfmcvk.supabase.co/storage/v1/object/public/roombti/loading_bear.png"
        //src="src/assets/loading_bear.png"
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
