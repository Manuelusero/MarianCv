import { useState } from "react";
import { Routes, Route } from "react-router-dom"; // No importes BrowserRouter aquí
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import "./App.css";
import VideoGallery from "./pages/VideoGallery";
import ReachSection from "./pages/ReachSection";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reachSection" element={<ReachSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/videoGallery" element={<VideoGallery />} />
      </Routes>
    </>
  );
}


export default App;
