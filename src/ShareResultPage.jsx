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
    <div style={{ padding: 20 , color: "#000"}}>
      <button onClick={() => {
        window.location.href = "https://soozip-bangbti.pages.dev";
      }}>
        나도 인테리어 테스트 해보기
      </button>
      <h2>나의 인테리어 MBTI 결과</h2>

      <img
        src={data.result_image}
        alt="result"
        style={{ width: "100%", borderRadius: 12 }}
      />


      <p>
        선택한 스타일: <b>{data.interior_text}</b>
      </p>

      <img
        src={data.interior_image}
        alt="interior"
        style={{ width: "100%", marginTop: 12, borderRadius: 12 }}
      />
    </div>
  );
}
