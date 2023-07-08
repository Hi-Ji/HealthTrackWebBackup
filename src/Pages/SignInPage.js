import React, { Fragment } from 'react';
import SignInEllipseInfo from "../Functions/SignInPage/SignInEllipseInfo";
import SignIn from "../Functions/SignInPage/SignIn";
import "../Styles/SignInPage.css";
import EllipseSignUpButton from '../Components/SignInPage/Button/EllipseSignUpButton';
import Text from '../data/Text.json';
import EllipseLeft from '../Components/SignInPage/Image/ellipseLeft.svg'
import EllipseRight from '../Components/SignInPage/Image/ellipseRight.svg'

const SignInPage = () => {
  return (
    <Fragment>
      <div className="pageSpliter">
        <SignInEllipseInfo />
        <SignIn />
      </div>

      <div className="pageSpliter1">
        <div className='pageSpliter2'>
          <div className="newHereText">
              {Text.SigninNew}
          </div>
          <div className="signUpText">
              {Text.SignIn}
          </div>

          <EllipseSignUpButton />
          <div className='EllipseSignUpButtonBGC'></div>
        </div>
        
        <SignIn />
      </div>

      <div className='ellipseLeftRightImg'>
        <img src={EllipseLeft} className="ellipseLeftImg1" />
        <img src={EllipseRight} className="ellipseRightImg1" />
      </div>
    </Fragment>
  )
}

export default SignInPage
