import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Autocomplete } from "@mui/material";


const PasswordField = ({setPassword}) => (

    <div className="passwordField">
    <i className="fa fa-lock passwordIcon"></i>
        <input type="password"
            id="password"
            name="Password"
            className="passwordTextInput"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)} 
            autocomplete="new-password"></input>
    </div>
)

export default PasswordField;