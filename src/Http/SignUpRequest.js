import axios from "axios";
import config from "./ServerConfig.json"


export const SignUpRequest = async ({username, password, email, setIsSignedUp}) => {

    try{
        return await axios.post(config.Host + config.Port + '/signup', {
            username: username,
            password: password,
            email: email
        });

    } catch (error) {
        window.alert("Error:", error)
    }

}