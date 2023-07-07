import Text from "../../../data/Text.json";
import { useLocation, useNavigate } from "react-router";


const EllipseSignUpButton = ({ isSignIn }) => {

    const navigate = useNavigate();
    const location = useLocation();
    const switchPath = () => {
        if (location.pathname === '/signin') {
            navigate('/signup');
        } else if (location.pathname === '/signup') {
            navigate('/signin');
        }
    }


    return (
        <div className="ellipseSignUpButtonHolder" onClick={switchPath}>
            <div className="ellipseSignUpButtonText">
                {isSignIn ? Text.SIGN : Text.LOGIN}
            </div>
        </div>
    )
}

export default EllipseSignUpButton;