
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ 추가


export default function RoomCounsult() {
 const [selected, setSelected] = useState(null); // 선택 상태 저장
 const navigate = useNavigate(); 
 return (
    <div
      style={{
        width: 408,
        minHeight: 852,
        background: "#fbf2d5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 1rem",
        boxSizing: "border-box",
      }}
    >
      {/* 상단 버튼 */}
      <div
        style={{
          background: "#000",
          color: "#fff",
          borderRadius: 30,
          padding: "0.5rem 1rem",
          marginBottom: "1rem",
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        상담 알아보기
      </div>

      {/* 이미지 */}
       <img
        src="src/assets/image 3.png"
        alt="상담"
        style={{
          width: 322,
          height: 211,
          borderRadius: 20,
          objectFit: "cover",
          marginBottom: "1rem",
        }}
      />

      {/* 페이지 네비게이션 점 */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem" }}>
        <div
          style={{
            width: 20,
            height: 10,
            borderRadius: 50,
            background: "#fe6a0f",
          }}
        />
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#d9d9d9",
          }}
        />
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#d9d9d9",
          }}
        />
      </div> 

      {/* 카드 리스트 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
          maxWidth: 360,
        }}
      >
        {/* 카드 1 */}
        <div
          onClick={() => {
    setSelected(1);
    window.location.href = "https://open.kakao.com/o/sHCcxOnh"; // 원하는 사이트 주소
  }}
          style={{
            background: "#fff",
            border: `2px solid ${selected === 1 ? "#fe6a0f" : "#ddd9d9"}`,
            cursor: "pointer",
            borderRadius: 12,
            padding: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(0,0,0,0.68)" }}>
              카카오톡 1:1 상담으로 맞춤 솔루션 제공해드려요
            </p>
            <p style={{ fontSize: 20, fontWeight: 600 }}>스타일링 상담 바로가기</p>
          </div>
          <div style={{ width: 50, height: 50, background: "#d9d9d9" }} />
        </div>

        {/* 카드 2 */}
        <div onClick={() => {
    setSelected(2);
    window.location.href = "https://www.instagram.com/soozip.01/"; // 원하는 사이트 주소
  }}
          style={{
            background: "#fff",
            border: `2px solid ${selected === 2 ? "#fe6a0f" : "#ddd9d9"}`,
            cursor: "pointer",
            borderRadius: 12,

            padding: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(0,0,0,0.68)" }}>
              설문을 미리 작성하여 상담 시간을 줄일 수 있어요
            </p>
            <p style={{ fontSize: 20, fontWeight: 600 }}>설문 작성하기</p>
          </div>
          <div style={{ width: 50, height: 50, background: "#d9d9d9" }} />
        </div>

        {/* 카드 3 */}
        <div onClick={() => {
    setSelected(3);
    navigate("/styling-type")
  }} 
       
          style={{
            background: "#fff",
           border: `2px solid ${selected === 3 ? "#fe6a0f" : "#ddd9d9"}`,
            cursor: "pointer",
            borderRadius: 12,
            padding: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(0,0,0,0.68)" }}>
              수집과 함께 스타일링을 더 알아보아요
            </p>
            <p style={{ fontSize: 20, fontWeight: 600 }}>스타일링 과정 알아보기</p>
          </div>
          <div style={{ width: 50, height: 50, background: "#d9d9d9" }} />
        </div>
      </div>
    </div>
  );
}
