import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "../Pages/HomePage";
import NavBar from "../Functions/NavBar/Navbar";
import IntroPage from "../Pages/IntroPage";
import React, { useRef } from 'react';

const RouterComponent = () => {
  const serRef = useRef(null);
  const aimRef = useRef(null);
  const tutRef = useRef(null);

  const scrollDownToSer = () => {
    serRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const scrollDownToAim = () => {
    aimRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const scrollDownToTut = () => {
    tutRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div>
      <Router>
        <NavBar scrollDownToSer={scrollDownToSer} scrollDownToAim={scrollDownToAim} scrollDownToTut={scrollDownToTut} />
        <Routes>
          <Route path="/home" element={<HomePage serRef={serRef} aimRef={aimRef} tutRef={tutRef} />} />
          <Route path="/intro" element={<IntroPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RouterComponent;
