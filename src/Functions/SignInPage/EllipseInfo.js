import Ellipse from "../../Components/SignInPage/Shape/Ellipse";
import Text from "../../data/Text.json";
import EllipseSignUpButton from "../../Components/SignInPage/Button/EllipseSignUpButton";
import EllipseCenterText from "../../Components/SignInPage/Text/EllipseCenterText";
import EllipseLeft from "../../Components/SignInPage/Image/ellipseLeft.svg";
import EllipseRight from '../../Components/SignInPage/Image/ellipseRight.svg';
import React, { useState } from 'react';
import SignUp from "../../Components/SignInPage/Image/signUp.svg";




const EllipseInfo = ({ isSignIn }) => {


    return (
        <div className="ellipsePage">
            <Ellipse />
            <div className="ellipsePageContent">`
                <div className="newHereText">
                    {isSignIn ? Text.New : Text.One}
                </div>
                <div className="signUpText">
                    {isSignIn ? Text.SignUp : Text.GoBack}
                </div>
                <EllipseSignUpButton />
                <EllipseCenterText />
                {isSignIn ? (
                    <>
                        <img src={EllipseLeft} className="ellipseLeftImg" />
                        <img src={EllipseRight} className="ellipseRightImg" />
                    </>
                ) : (
                    <>
                        <img src={SignUp} className="signUpImg"/>
                    </>)
                }

            </div>
        </div>
    )
}

export default EllipseInfo;