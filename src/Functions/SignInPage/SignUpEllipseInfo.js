import Ellipse from "../../Components/SignInPage/Shape/Ellipse";
import Text from "../../data/Text.json";
import EllipseSignInButton from "../../Components/SignInPage/Button/EllipseSignInButton";
import EllipseSignupCenterText from "../../Components/SignInPage/Text/EllipseSignupCenterText";
import EllipseCenter from "../../Components/SignInPage/Image/ellipseCenter.svg";

import React, { useState } from 'react';




const SignUpEllipseInfo = () => {


    return (
        <div className="ellipsePage">
            <Ellipse />
            <div className="ellipsePageContent">`
                <div className="newHereText">
                    {Text.SignupNew}
                </div>
                <div className="signUpText">
                    {Text.SignUp}
                </div>
                <EllipseSignInButton />
                <EllipseSignupCenterText />
                <img src={EllipseCenter} className="ellipseCenterImg" />
                
            </div>
        </div>
    )
}

export default SignUpEllipseInfo;