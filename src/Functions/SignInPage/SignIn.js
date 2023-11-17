import Text from "../../data/Text.json";
import UsernameField from "../../Components/SignInPage/TextField/UsernameField";
import PasswordField from "../../Components/SignInPage/TextField/PasswordField";
import LoginButton from "../../Components/SignInPage/Button/LoginButton";
import LoginBackButton from "../../Components/SignInPage/Button/LoginBackButton";
import Gmail from "../../Components/SignInPage/Image/gmail.svg";
import Facebook from "../../Components/SignInPage/Image/facebook.svg";
import { LogInRequest } from "../../Http/LogInRequest"
import {useContext, useState} from "react";
import {AuthContext} from "../../AuthContext";
import {useNavigate} from "react-router-dom";



const SignIn = () => {

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const { auth, setAuth, token, setToken } = useContext(AuthContext);
    const navigate = useNavigate();


    const LogIn = () => {
        LogInRequest({username: username, password: password}).then(response => {
            if(response.data.flag){
                setAuth(true);
                setToken(response.data.token)
                console.log(auth)
                navigate('/intro');
            }
        })
    }
    return (
        <div className="signInPage">
            <div className="signInText">
                {Text.Signin}
            </div>
            <UsernameField setUsername={setUsername}/>
            <PasswordField setPassword={setPassword}/>
            <div className="signinButton">
                <div className='signinButtonEach' onClick={LogIn}><LoginButton /></div>
                <div className='signinButtonEach' ><LoginBackButton /></div>
            </div>
            <div className="hLine"></div>
            <div className="iconHolder">
                <img src={Gmail} className="gmail" />
                <img src={Facebook} className="facebook" />
            </div>
        </div>
    )
}

export default SignIn;
