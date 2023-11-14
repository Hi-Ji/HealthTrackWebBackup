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
import {Alert, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import Button from "@mui/material/Button";
import WarningIcon from '@mui/icons-material/Warning';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SignUpDialog from "../../Components/SignInPage/Dialog/SignUpDialog";
import SignUpText from "../../data/SignUp.json";
import {Snackbar} from "@mui/base";
import VerificationSnackBar from "../../Components/SignInPage/Dialog/VerificationSnackBar";


const SignUp = () => {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [codeInputs, setCodeInputs] = useState(Array(6).fill(''));
    const [open, setOpen] = useState(false)
    const [isRight, setIsRight] = useState(false)
    const inputsRef = useRef([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [usernameDialogOpen, setUsernameDialogOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateEmail = (email) => {
        return emailRegex.test(email);
    };
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
        if (!username || !password || !email) {
            // Open the dialog if any field is empty
            setDialogOpen(true);
        } else if (!validateEmail(email)) {
            // Open the dialog if email is not in correct format
            setDialogOpen(true);
            // You can set another state here to customize the dialog message for email format error
        } else {
            setIsLoading(true);
            // Proceed with sign up if all fields are filled and email is in the correct format
            SignUpRequest({ username, password, email }).then(response => {
                setIsLoading(false)
                if(response.data.statusCode === 305){
                    setUsernameDialogOpen(true)
                } else {
                    setIsSignedUp(true);
                }
            })

        }
    }

    const Verify = () => {
        const verificationCode = codeInputs.join('');
        if(verificationCode.length < 6){
            setOpen(true)
        }
        VerifyRequest({username, password, email, verificationCode}).then(response => {
            setOpen(true)
            if(response.data.statusCode === 200) {
                setIsRight(true)
            }
        });
    };

    const onBack = () => {
        setCodeInputs(Array(6).fill(''));
        setIsSignedUp(false);
        setEmail('');
        setUsername('');
        setEmail('');
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
                    <div style={{paddingTop: '3vh'}}></div>
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
                    <div className='signinButtonEach' onClick={SignUp}><SignupButton isLoading={isLoading}/></div>
                </div>
            )}
            <div className="hLine"></div>
            <div className="iconHolder">
                <img src={Gmail} className="gmail" />
                <img src={Facebook} className="facebook" />
            </div>
            <SignUpDialog title={SignUpText.PleaseCheckTitle} content={SignUpText.PleaseCheckContent} setDialogOpen={setDialogOpen} dialogOpen={dialogOpen} buttonText={SignUpText.TryAgain} isLoading={false}/>
            <SignUpDialog title={SignUpText.PleaseCheckTitle} buttonText={SignUpText.TryAgain} content={SignUpText.UsernameExistsContent} setDialogOpen={setUsernameDialogOpen} dialogOpen={usernameDialogOpen} isLoading={isLoading}/>
            <div style={{paddingBottom: '8vh'}}></div>
            <VerificationSnackBar open={open} setOpen={setOpen} isRight={isRight} />
        </div>
    )
}

export default SignUp;