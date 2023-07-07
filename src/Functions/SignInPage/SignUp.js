import Text from "../../data/Text.json";
import UsernameField from "../../Components/SignInPage/TextField/UsernameField";
import PasswordField from "../../Components/SignInPage/TextField/PasswordField";
import EmailField from "../../Components/SignInPage/TextField/EmailField";
import SignupButton from "../../Components/SignInPage/Button/SignupButton";
import LoginBackButton from "../../Components/SignInPage/Button/LoginBackButton";
import Gmail from "../../Components/SignInPage/Image/gmail.svg";
import Facebook from "../../Components/SignInPage/Image/facebook.svg";

const SignUp = () => (
    <div className="signInPage">
        <div className="signUpText1">
            {Text.Signup}
        </div>
        <UsernameField />
        <PasswordField />
        <EmailField />
        <div className="signinButton">
            <div className='signinButtonEach'><SignupButton /></div>
            <div className='signinButtonEach' ><LoginBackButton /></div>
        </div>
        <div className="hLine"></div>
        <div className="iconHolder">
            <img src={Gmail} className="gmail" />
            <img src={Facebook} className="facebook" />
        </div>
    </div>
)

export default SignUp;