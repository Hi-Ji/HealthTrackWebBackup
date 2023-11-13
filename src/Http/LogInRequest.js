import axios from "axios";
import config from "./ServerConfig.json"

export const LogInRequest = async ({username, password}) => {

    try{
        const response = await axios.post(config.Host + config.Port +'/login',{
            username: username,
            password: password
        });
        window.alert(JSON.stringify(response.data));

    } catch (error) {
        window.alert("Error:", error)
    }

}