import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import RoombtiTest from "./RoombtiTest";
import RoomCounsult from './RoomConsult';
import StylingTypePage from './StylingTypePage';
import StylingInfoPage from './StylingInfoPage';
import TestResultPage from './TestResultPage';


export default function App() {
  return (
    // <BrowserRouter>
      <Routes>
        {/* 홈 */}
        <Route path="/" element={<Home/>} />

        {/* 방BTI 테스트 */}
        <Route path="/RoombtiTest" element={<RoombtiTest/>} />

        {/* 결과 페이지 */}
        <Route path="/TestResult" element={<TestResultPage />} />

        {/* 상담 페이지 */}
        <Route path="/room-counsult" element={<RoomCounsult />} />

        {/* 스타일링 관련 페이지 */}
        <Route path="/styling-type" element={<StylingTypePage />} />
        <Route path="/styling-info" element={<StylingInfoPage />} />
      </Routes>
    // </BrowserRouter>
    // <div><StylingInfoPage/></div>
  );
}
