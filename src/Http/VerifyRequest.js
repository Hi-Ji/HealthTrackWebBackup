import axios from "axios";
import config from "./ServerConfig.json"

export const VerifyRequest = async ({username, password, email, verificationCode}) => {

    try{
        return await axios.post(config.Host + config.Port + '/verify', {
            username: username,
            password: password,
            email: email,
            verificationCode: verificationCode
        });

    } catch (error) {
        window.alert("Error:", error)
    }

}