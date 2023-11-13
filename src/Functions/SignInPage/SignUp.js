import Text from "../../data/Text.json";
import UsernameField from "../../Components/SignInPage/TextField/UsernameField";
import PasswordField from "../../Components/SignInPage/TextField/PasswordField";
import EmailField from "../../Components/SignInPage/TextField/EmailField";
import SignupButton from "../../Components/SignInPage/Button/SignupButton";
import LoginBackButton from "../../Components/SignInPage/Button/LoginBackButton";
import Gmail from "../../Components/SignInPage/Image/gmail.svg";
import Facebook from "../../Components/SignInPage/Image/facebook.svg";
import React, {useRef, useState} from "react";
import {SignUpRequest} from "../../Http/SignUpRequest";
import {VerifyRequest} from "../../Http/VerifyRequest";

const SignUp = () => {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [codeInputs, setCodeInputs] = useState(Array(6).fill(''));

    const inputsRef = useRef([]);


    const handleInputChange = (index, value) => {
        setCodeInputs(currentCodes => {
            const newCodes = [...currentCodes];
            newCodes[index] = value;
            return newCodes;
        });
    };


    const moveFocus = (index, event) => {
        if (event.type === "input") {
            if (event.target.value.length === 1 && index < inputsRef.current.length - 1) {
                inputsRef.current[index + 1].focus();
            }
        } else if (event.key === "Backspace" || event.key === "Delete") {
            if (index > 0 && event.target.value.length === 0) {
                inputsRef.current[index - 1].focus();
            }
        }
    };
    const SignUp = () => {
        const response = SignUpRequest({username: username, password: password, email: email});
        setIsSignedUp(true)
    }

    const Verify = () => {
        const verificationCode = codeInputs.join('');
        const response = VerifyRequest({username, password, email, verificationCode});
    };

    const onBack = () => {
        setCodeInputs(Array(6).fill(''));
        setIsSignedUp(false);
    }

    return (
        <div className="signInPage">
            <div className="signUpText1">
                {Text.Signup}
            </div>
            {isSignedUp ? (
                <>
                    <div style={{opacity: 0.55, fontFamily: "'Lexend', sans-serif", marginLeft: "auto", marginRight: "auto", marginTop: "10vh"}}>
                        We have sent a 6-digit verification code to your email
                    </div>
                    <div style={{ fontFamily: "'Lexend', sans-serif", marginLeft: "auto", marginRight: "auto", marginTop: "2vh"}}>
                        {email}
                    </div>
                    <div className="verificationCodeInput">
                        {codeInputs.map((code, index) => (
                            <input
                                key={`input-${index}`}
                                ref={el => inputsRef.current[index] = el}
                                type="text"
                                maxLength="1"
                                value={code}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                onInput={(e) => moveFocus(index, e)}
                                onKeyDown={(e) => moveFocus(index, e)}
                            />
                        ))}
                    </div>
                    <div className="signinButton">
                        <div className='signinButtonEach'>
                            <div className="loginButtonHolder">
                                <div className="loginText" onClick={onBack}>
                                    {Text.LoginBack}
                                </div>
                            </div>
                        </div>
                        <div className='signinButtonEach' onClick={Verify}>
                            <div className="loginButtonHolder">
                                <div className="loginText">
                                    {Text.Verify}
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            ) : (
                <>
                    <UsernameField setUsername={setUsername}/>
                    <PasswordField setPassword={setPassword}/>
                    <EmailField setEmail={setEmail}/>
                </>
            )}
            {!isSignedUp && (
                <div className="signinButton">
                    <div className='signinButtonEach' onClick={onBack}><LoginBackButton /></div>
                    <div className='signinButtonEach' onClick={SignUp}><SignupButton /></div>
                </div>
            )}
            <div className="hLine"></div>
            <div className="iconHolder">
                <img src={Gmail} className="gmail" />
                <img src={Facebook} className="facebook" />
            </div>
        </div>
    )
}

export default SignUp;