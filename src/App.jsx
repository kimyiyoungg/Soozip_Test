import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import RoombtiTest from "./RoombtiTest";
import RoomCounsult from "./RoomConsult";
import StylingTypePage from "./StylingTypePage";
import StylingInfoPage1 from "./StylingInfoPage1";
import StylingInfoPage2 from "./StylingInfoPage2";
import StylingInfoPage3 from "./StylingInfoPage3";
import LoadingPage from "./LoadingPage";
import TestResultPage from "./TestResultPage";
import SetUpStylingInfo from "./SetUpStylingInfo";

export default function App() {
  return (
    <Routes>
      {/* 홈 */}
      <Route path="/" element={<Home />} />

      {/* 로딩 */}
      <Route path="/loading" element={<LoadingPage />} />

      {/* 방BTI 테스트 */}
      <Route path="/RoombtiTest" element={<RoombtiTest />} />

      {/* 결과 페이지 */}
      <Route path="/TestResult" element={<TestResultPage />} />

      {/* 상담 페이지 */}
      <Route path="/room-counsult" element={<RoomCounsult />} />

      {/* 스타일링 관련 페이지 */}
      <Route path="/styling-type" element={<StylingTypePage />} />
      <Route path="/styling-info1" element={<StylingInfoPage1 />} />
      <Route path="/styling-info2" element={<StylingInfoPage2 />} />
      <Route path="/styling-info3" element={<StylingInfoPage3 />} />
      <Route path="/setup-styling" element={<SetUpStylingInfo />} />
    </Routes>
  );
}
