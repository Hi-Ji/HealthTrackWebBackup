import axios from "axios";
import config from "./ServerConfig.json"

export const VerifyRequest = async ({username, password, email, verificationCode}) => {

    try{
        const response = await axios.post(config.Host + config.Port +'/verify',{
            username: username,
            password: password,
            email: email,
            verificationCode: verificationCode
        });

        window.alert(JSON.stringify(response.data)); // Handle the case where sign-up wasn't successful
        return response;

    } catch (error) {
        window.alert("Error:", error)
    }

}