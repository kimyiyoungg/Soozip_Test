/**
 * LoadingPage.jsx
 *
 * 방BTI 테스트 시작 전 노출되는 로딩 화면(Loading)
 *
 * 역할:
 * - 사용자에게 흐름 전환을 인지시킴
 * - 테스트 질문 DB를 불러오는 동안 대기
 */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoadingPage() {

  // 페이지 이동을 위한 navigate 함수
  const navigate = useNavigate();

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
      {/* ================= 로딩 이미지 ================= */}
      <img
        src="https://mmfurloptocazvhfmcvk.supabase.co/storage/v1/object/public/roombti/loading_bear.png"
        alt="loading"
        style={{
          width: 130,
          height: 90,
          marginBottom: "1.5rem",
          animation: "bounce 1s infinite ease-in-out",
        }}
      />

      {/* ================= 로딩 텍스트 ================= */}
      <p style={{ fontSize: 30, fontWeight: 600, color: "#000" }}>
        잠시만 기다려주세요...
      </p>

    </div>
  );
}
