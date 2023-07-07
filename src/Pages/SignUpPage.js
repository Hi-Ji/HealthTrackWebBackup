import React from 'react';
import SignUpEllipseInfo from "../Functions/SignInPage/SignUpEllipseInfo";
import SignUp from "../Functions/SignInPage/SignUp";
import "../Styles/SignInPage.css";

const SignUpPage = () => {
  return (
    <div className="pageSpliter">
        <SignUpEllipseInfo />
        <SignUp />
    </div>
  )
}

export default SignUpPage