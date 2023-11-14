import axios from "axios";
import config from "./ServerConfig.json"

export const LogInRequest = async ({username, password}) => {

    try{
        return await axios.post(config.Host + config.Port + '/login', {
            username: username,
            password: password
        })
    } catch (error) {
        window.alert("Error:", error)
    }

}