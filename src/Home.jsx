/**
 * Home.jsx
 *
 * 방BTI 서비스의 첫 진입 화면(Home)
 *
 * 역할:
 * - 수집 로고와 서비스명 노출
 * - 메인 일러스트(곰 이미지) 표시
 * - 테스트 시작 버튼 제공
 *
 **/

import { useNavigate } from "react-router-dom";

export default function Home() {

  // 페이지 이동을 위한 navigate 함수
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100vw",
        height: "calc(var(--vh, 1vh) * 100)", // iPhone Safari 대응
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#fbf2d5",
        padding: "2rem 1rem",
        paddingTop: "calc(env(safe-area-inset-top) + 1.2rem)", // iOS 노치 영역 대응 (상단 상태바)
        paddingBottom: "calc(env(safe-area-inset-bottom) + 1.5rem)",  // iOS 하단 홈바 영역 대응
        boxSizing: "border-box",
        overflow: "hidden", // 스크롤 완전 제거
      }}
    >
      {/* ================= 수집 로고 및 서비스명 영역 ================= */}
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            margin: "20px 0 4px 0",
          }}
        >
          {/* 수집 로고 이미지 */}
          <img
            src="https://mmfurloptocazvhfmcvk.supabase.co/storage/v1/object/public/roombti/soozip_logo.png"
            alt="로고"
            style={{
              width: "20px",
              height: "20px",
              objectFit: "contain",
              position: "relative",
              top: "28px",
            }}
          />
          {/* 서비스명 텍스트 */}
          <p
            style={{
              fontSize: 34,
              fontWeight: 600,
              color: "#000",
              margin: 0,
              position: "relative",
              top: "28px",
            }}
          >
            수집 방BTI
          </p>
        </div>

        {/* 메인 질문 문구 */}

        <p
          style={{
            fontSize: 48,
            fontWeight: 800,
            color: "#000",
            marginTop: 50,
            marginBottom: 0,
          }}
        >
          나의{" "}

          {/* 형광펜 느낌의 강조 텍스트 */}
          <span
            style={{
              backgroundImage:
                "linear-gradient(#f88d2f4D 0.5em, transparent 0)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 0.3em",
              backgroundPosition: "0 0.5em",
            }}
          >
            집꾸 스타일
          </span>

          은?
        </p>
      </div>

      {/* ================= 중앙 메인 이미지 ================= */}
      <img
        src="https://mmfurloptocazvhfmcvk.supabase.co/storage/v1/object/public/roombti/main_bear.png"
        alt="main"
        style={{
          width: "85%",
          maxHeight: "32vh", // ← 핵심: 화면 넘지 않는 적정값
          objectFit: "contain",
          marginBottom: "1.2rem",
        }}
      />

      {/* ================= 하단 시작 버튼 ================= */}
      <button
        style={{
          width: "100%",
          maxWidth: 360,
          height: 58,
          borderRadius: 12,
          background: "#000",
          border: "1px solid #ddd9d9",
          color: "#fff",
          fontSize: 30,
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          flexShrink: 0, // 버튼 절대 줄어들지 않게
        }}

        // 테스트 시작 → 로딩 페이지로 이동
        // onClick={() => navigate("/loading")}
        
        onClick={() => navigate("/RoombtiTest")}
      >
        방BTI 알아보기
      </button>
    </div>
  );
}
