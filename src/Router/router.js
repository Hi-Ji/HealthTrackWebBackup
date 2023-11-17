import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import HomePage from "../Pages/HomePage";
import NavBar from "../Functions/NavBar/Navbar";
import IntroPage from "../Pages/IntroPage";
import SignInPage from '../Pages/SignInPage';
import SignUpPage from '../Pages/SignUpPage';
import OurTeamPage from '../Pages/OurTeamPage';
import RiskEvaluatorPage from '../Pages/RiskEvaluatorPage';
import React, {useContext, useRef} from 'react';
import {AuthContext} from "../AuthContext";
import SymptomResultPage from "../Pages/SymptomResultPage";

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

  const PrivateRoute = ({ children }) => {
    const { auth } = useContext(AuthContext);
    return auth ? children : <Navigate to="/signin" replace />;
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
          <Route path="/intro" element={<PrivateRoute><NavBarCombination><IntroPage /></NavBarCombination></PrivateRoute>} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path='/ourteam' element={<PrivateRoute><NavBarCombination><OurTeamPage /></NavBarCombination></PrivateRoute>} />
          <Route path='/riskevaluator' element={<PrivateRoute><NavBarCombination><RiskEvaluatorPage /></NavBarCombination></PrivateRoute>} />
          <Route path='/symptomresult' element={<NavBarCombination><SymptomResultPage /></NavBarCombination>} />
          {/* Redirect to home if no match */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RouterComponent;
