import React from 'react'
import Text from "../../../data/Text.json";
import { useNavigate } from "react-router-dom";

const LoginBackButton = () => {
  const navigate = useNavigate();
  const navigate_home_page = () => {
    navigate('/home');
  } 
  return (
    <div className="loginButtonHolder">
        <div className="loginText" onClick={navigate_home_page}>
            {Text.LoginBack}
        </div>
    </div>
  )
}

export default LoginBackButton
