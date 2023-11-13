import axios from "axios";
import config from "./ServerConfig.json"

export const SignUpRequest = async ({username, password, email, setIsSignedUp}) => {

    try{
        const response = await axios.post(config.Host + config.Port +'/signup',{
            username: username,
            password: password,
            email: email
        });

        window.alert(JSON.stringify(response.data)); // Handle the case where sign-up wasn't successful
        return response;

    } catch (error) {
        window.alert("Error:", error)
    }

}