import Ellipse from "../../Components/SignInPage/Shape/Ellipse";
import Text from "../../data/Text.json";
import EllipseSignUpButton from "../../Components/SignInPage/Button/EllipseSignUpButton";
import EllipseCenterText from "../../Components/SignInPage/Text/EllipseCenterText";
import EllipseLeft from "../../Components/SignInPage/Image/ellipseLeft.svg";
import EllipseRight from '../../Components/SignInPage/Image/ellipseRight.svg';

const EllipseInfo = () => (
    <div className="ellipsePage">
        <Ellipse />
        <div className="ellipsePageContent">`
            <div className="newHereText">
                {Text.New}
            </div>
            <div className="signUpText">
                {Text.SignUp}
            </div>
            <EllipseSignUpButton />
            <EllipseCenterText />
            <img src={EllipseLeft} className="ellipseLeftImg"/>
            <img src={EllipseRight} className="ellipseRightImg"/>
        </div>
    </div>
)

export default EllipseInfo;