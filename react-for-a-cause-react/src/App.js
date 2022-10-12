import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';

import Header from'./components/Header';
import Slider from'./components/slider/Slider';
import OurServices from'./components/our-services/Our-Services';
import Contact from'./components/contact-form/Contact';
import About from'./components/about/About';
import Adoption from'./components/adoption/Adoption';
import Videos from'./components/videos/Videos';

function App() {
  return (
    <div className="App">
      <Header />
      <div >
        <Routes>
          <Route exact path="/" element={<Navigate to="/home" replace />} />
          <Route path="/logo" element={<Slider />} />
          <Route path="/home" element={<Slider />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
