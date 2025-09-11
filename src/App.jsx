import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './Home';

import RoomConsult from './RoomConsult';
import StylingTypePage from './StylingTypePage';
import StylingInfoPage from './StylingInfoPage';
import TestResultPage from './TestResultPage';

export default function App() {
  const navigate = useNavigate();
  
  return (

    <div>
      <RoomConsult/></div>
  );
}