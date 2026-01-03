
import { BrowserRouter, Route, Routes } from "react-router-dom";
import APOD from "./components/APOD";
import APODPage from "./components/APODPage";

export default function App(){
  return <div>
    <BrowserRouter >

    <Routes>
      <Route path="/" element={<APOD />} />
      <Route path="/:date" element={<APODPage />} />
    </Routes>
    
    </BrowserRouter>
  </div>
}