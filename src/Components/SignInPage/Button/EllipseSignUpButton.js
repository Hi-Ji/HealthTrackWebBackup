import Text from "../../../data/Text.json";
import { useNavigate } from "react-router-dom";

const EllipseSignUpButton = () => {
    const navigate = useNavigate();
    const navigate_signup_page = () => {
        navigate('/signup');
    }

    return (
        <div>
        <div className="ellipseSignUpButtonHolder" onClick={navigate_signup_page}>
            <div className="ellipseSignUpButtonText">
                {Text.SIGNUP}
            </div>
        </div>
        </div>
    )
}

export default EllipseSignUpButton; 