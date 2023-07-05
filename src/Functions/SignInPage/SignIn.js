import Text from "../../data/Text.json";
import UsernameField from "../../Components/SignInPage/TextField/UsernameField";
import PasswordField from "../../Components/SignInPage/TextField/PasswordField";
import LoginButton from "../../Components/SignInPage/Button/LoginButton";
import Gmail from "../../Components/SignInPage/Image/gmail.svg";
import Facebook from "../../Components/SignInPage/Image/facebook.svg";



const SignIn = () => (
    <div className="signInPage">
        <div className="signInText">
            {Text.Signin}
        </div>
        <UsernameField />
        <PasswordField />
        <LoginButton />
        <div className="hLine"></div>
        <div className="iconHolder">
            <img src={Gmail} className="gmail" />
            <img src={Facebook} className="facebook" />
        </div>
    </div>
)

export default SignIn;