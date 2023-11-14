import Text from "../../../data/Text.json";
import {CircularProgress} from "@mui/material";
import {Box, margin} from "@mui/system";


const LoginButton = ({isLoading}) => (
    <div className="loginButtonHolder">
        <div className="loginText" >
            {Text.Signup}
        </div>
    </div>
)

export default LoginButton;