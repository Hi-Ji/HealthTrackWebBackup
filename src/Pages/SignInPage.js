import React from 'react';
import SignInEllipseInfo from "../Functions/SignInPage/SignInEllipseInfo";
import SignIn from "../Functions/SignInPage/SignIn";
import "../Styles/SignInPage.css";

const SignInPage = () => {
  return (
    <div className="pageSpliter">
        <SignInEllipseInfo />
        <SignIn />
    </div>
  )
}

export default SignInPage
