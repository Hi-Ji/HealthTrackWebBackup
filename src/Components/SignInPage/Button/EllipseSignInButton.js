import Text from "../../../data/Text.json";
import { useNavigate } from "react-router-dom";

const EllipseSignInButton = () => {
    const navigate = useNavigate();
    const navigate_signin_page = () => {
        navigate('/signin');
    }
    return (
        <div className="ellipseSignUpButtonHolder" onClick={navigate_signin_page}>
            <div className="ellipseSignUpButtonText">
                {Text.SIGNIN}
            </div>
        </div>
    )
}

export default EllipseSignInButton; 