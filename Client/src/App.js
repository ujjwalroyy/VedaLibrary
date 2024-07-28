import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ChapterPage from "./components/pages/ChapterPage";
import Navbar from "./components/Navbar";
import VersePage from './components/pages/VersePage'
import './App.css'
export default function App() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chapter" element={< ChapterPage/>} />
        <Route path="/verse" element={< VersePage/>} />
      </Routes>
    </div>
  );
}
