import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import downloadIcon from "./assets/download.svg";
import shareIcon from "./assets/share.svg";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function TestResultPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { session_id } = location.state || {};

  const [result, setResult] = useState(null);

  // ⭐ 메인 이미지 flip 상태 추가
  const [flipMain, setFlipMain] = useState(false);

  useEffect(() => {
    if (!session_id) return;

    const fetchResult = async () => {
      const { data, error } = await supabase
        .from("resulttype")
        .select("*")
        .eq("session_id", session_id)
        .single();

      if (error) {
        console.error("결과 불러오기 실패:", error);
      } else {
        setResult(data);
      }
    };

    fetchResult();
  }, [session_id]);

  const downloadImage = async (imageUrl) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = "soozip_result.png";
      document.body.appendChild(a);
      a.click();
      a.remove();

      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("이미지 다운로드 실패:", error);
    }
  };

  // ⭐ Flip 공통 스타일
  const flipContainer = {
    perspective: "1000px",
    width: "361px",
    height: "490px",
  };

  const flipInner = (flip) => ({
    position: "relative",
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    transition: "transform 0.6s",
    transform: flip ? "rotateY(180deg)" : "rotateY(0deg)",
  });

  const flipFace = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "20px",
    overflow: "hidden",
  };

  const flipBack = {
    ...flipFace,
    transform: "rotateY(180deg)",
    background: "#fff",
    border: "1px solid #ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: "600",
  };

  return (
    <div
      style={{
        width: 408,
        height: "100vh",
        minHeight: 1500,
        background: "#fbf2d5",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <div style={{ flex: 1, padding: "115px 0 0 0", position: "relative" }}>
        <svg
          onClick={() => navigate("/")}
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

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            padding: "0 25px",
          }}
        >
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

          <img
            src="src/assets/bear2.png"
            style={{ width: 148, height: 96, objectFit: "cover" }}
          />
        </div>

        {/* ⭐ 메인 이미지 → 클릭 시 뒤집히는 카드 */}
        {result ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 20,
            }}
            onClick={() => setFlipMain(!flipMain)}
          >
            <div style={flipContainer}>
              <div style={flipInner(flipMain)}>
                {/* front */}
                <div style={flipFace}>
                  <img
                    src={result.result_image}
                    alt="result"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 20,
                    }}
                  />
                </div>

                {/* back */}
                <div style={flipBack}>
                  <img
                    src={result.result_info_image}
                    alt="result"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 20,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>결과 불러오는 중...</p>
        )}

        {/* 아래 두 개 카드는 그대로 유지 */}
        {/* 이미지 저장 / 테스트 공유 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            flexDirection: "row",
            gap: 20,
            marginBottom: 20,
            marginRight: 40,
          }}
        >
          {/* <p
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: "#000",
              cursor: "pointer",
              margin: 0,
            }}
            onClick={() => downloadImage(result.result_image)}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#555")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#000")}
          >
            이미지 저장
          </p> */}
          <img
            src={downloadIcon}
            alt="이미지 저장"
            style={{ cursor: "pointer", width: 30, height: 30 }}
            onClick={() => downloadImage(result.result_image)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.filter = "brightness(0.7)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.filter = "brightness(1)")
            }
          />

          {/* <p
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
          </p> */}

          <img
            src={shareIcon}
            alt="테스트 공유"
            style={{ cursor: "pointer", width: 24, height: 24 }}
            onClick={() => alert("테스트 공유 기능 준비 중입니다")}
            onMouseEnter={(e) =>
              (e.currentTarget.style.filter = "brightness(0.7)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.filter = "brightness(1)")
            }
          />
        </div>
        <hr
          style={{
            border: "1px solid #D9D9D9",
            width: 354,
            marginTop: 30,
            marginBottom: 50,
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
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

        <p
          style={{
            fontSize: 20,
            fontWeight: 600,
            textAlign: "center",
            color: "#000",
            marginTop: 20,
            marginBottom: 30,
          }}
        >
          나에게 어울리는 인테리어는?
        </p>

        {/* ⭐ 아래 2개 카드는 아무 변화 없이 그대로 유지됨 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 25px",
            maxWidth: "408px",
            margin: "0 auto",
          }}
        >
          <div style={{ flex: "0 0 45%", maxWidth: "45%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <svg width="100%" height="auto" viewBox="0 0 164 164">
                <path
                  d="M0 20C0 8.95 8.95 0 20 0H144C155.05 0 164 8.95 164 20V144C164 155.05 155.05 164 144 164H20C8.95 164 0 155.05 0 144V20Z"
                  fill="#D9D9D9"
                />
              </svg>
              <p
                style={{
                  fontSize: 16,
                  textAlign: "center",
                  color: "#000",
                  marginTop: 8,
                }}
              >
                AAA 스타일
              </p>
            </div>
          </div>

          <div style={{ flex: "0 0 45%", maxWidth: "45%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <svg width="100%" height="auto" viewBox="0 0 164 164">
                <path
                  d="M0 20C0 8.95 8.95 0 20 0H144C155.05 0 164 8.95 164 20V144C164 155.05 155.05 164 144 164H20C8.95 164 0 155.05 0 144V20Z"
                  fill="#D9D9D9"
                />
              </svg>
              <p
                style={{
                  fontSize: 16,
                  textAlign: "center",
                  color: "#000",
                  marginTop: 8,
                }}
              >
                BBB 스타일
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 고정 영역 */}
      <div
        style={{
          width: "100%",
          maxWidth: 408,
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
        <p
          style={{
            fontSize: 14,
            fontWeight: 500,
            marginBottom: 12,
            color: "#000",
          }}
        >
          내 인테리어 취향으로 방을 꾸며요
        </p>

        <div
          style={{
            width: "100%",
            maxWidth: 360,
            height: 54,
            borderRadius: 12,
            background: "#000",
            border: "1px solid #ddd9d9",
            color: "#fff",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={() => navigate("/room-counsult")}
        >
          <p style={{ fontSize: 16, color: "#fff" }}>
            홈스타일링 상담 알아보기
          </p>
        </div>
      </div>
    </div>
  );
}
