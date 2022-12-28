import React from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./Post.js";
import Home from "./Home.js";
import HeroSection from "./HeroSection.js";
import MainHome from "./components/MainHome.js";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/hero" element={<HeroSection />} />
          <Route exact path="/post" element={<Post />}></Route>
          <Route exact path="/home" element={<MainHome />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
