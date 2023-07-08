import React, { Fragment } from 'react';
import SignUpEllipseInfo from "../Functions/SignInPage/SignUpEllipseInfo";
import EllipseSignInButton from '../Components/SignInPage/Button/EllipseSignInButton';
import SignUp from "../Functions/SignInPage/SignUp";
import "../Styles/SignInPage.css";
import Text from '../data/Text.json'
import EllipseCenter from '../Components/SignInPage/Image/ellipseCenter.svg'

const SignUpPage = () => {
  return (
    // <div className="pageSpliter">
    //     <SignUpEllipseInfo />
    //     <SignUp />
    // </div>
    <Fragment>
      <div className="pageSpliter">
        <SignUpEllipseInfo />
        <SignUp />
      </div>

      <div className="pageSpliter1">
        <div className='pageSpliter2'>
          <div className="newHereText">
              {Text.SigninNew}
          </div>
          <div className="signUpText">
              {Text.SignIn}
          </div>

          <EllipseSignInButton />
          <div className='EllipseSignUpButtonBGC'></div>
        </div>
        
        <SignUp />
      </div>

      <div className='ellipseLeftRightImg'>
        <img src={EllipseCenter} className="EllipseCenterImg1" />
      </div>
    </Fragment>
  )
}

export default SignUpPage