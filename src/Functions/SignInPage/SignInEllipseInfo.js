import Ellipse from "../../Components/SignInPage/Shape/Ellipse";
import Text from "../../data/Text.json";
import EllipseSignUpButton from "../../Components/SignInPage/Button/EllipseSignUpButton";
import EllipseSigninCenterText from "../../Components/SignInPage/Text/EllipseSigninCenterText";
import EllipseLeft from "../../Components/SignInPage/Image/ellipseLeft.svg";
import EllipseRight from '../../Components/SignInPage/Image/ellipseRight.svg';
import React, { useState } from 'react';




const SignInEllipseInfo = () => {


    return (
        <div className="ellipsePage">
            <Ellipse />
            <div className="ellipsePageContent">`
                <div className="newHereText">
                    {Text.SigninNew}
                </div>
                <div className="signUpText">
                    {Text.SignIn}
                </div>
                <EllipseSignUpButton />
                <EllipseSigninCenterText />
                <img src={EllipseLeft} className="ellipseLeftImg" />
                <img src={EllipseRight} className="ellipseRightImg" />
            </div>
        </div>
    )
}

export default SignInEllipseInfo;