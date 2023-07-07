import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "../Pages/HomePage";
import NavBar from "../Functions/NavBar/Navbar";
import IntroPage from "../Pages/IntroPage";
import SignInPage from '../Pages/SignInPage';
import SignUpPage from '../Pages/SignUpPage';
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

  const NavBarCombination = ({children}) => (
    <div>
      <NavBar scrollDownToSer={scrollDownToSer} scrollDownToAim={scrollDownToAim} scrollDownToTut={scrollDownToTut} />
      {children}
    </div>
  )


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<NavBarCombination><HomePage serRef={serRef} aimRef={aimRef} tutRef={tutRef} /></NavBarCombination>} />
          <Route path="/intro" element={<NavBarCombination><IntroPage /></NavBarCombination>} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RouterComponent;
