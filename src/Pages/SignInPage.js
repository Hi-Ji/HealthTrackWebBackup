import EllipseInfo from "../Functions/SignInPage/EllipseInfo";
import SignIn from "../Functions/SignInPage/SignIn";
import "../Styles/SignInPage.css";

const SignInPage = ({isSignIn}) => (
    <div className="pageSpliter">
        <EllipseInfo isSignIn={isSignIn}/>
        <SignIn isSignIn={isSignIn}/>
    </div>
)

export default SignInPage;