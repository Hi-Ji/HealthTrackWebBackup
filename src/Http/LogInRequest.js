import axios from "axios";

export const LogInRequest = async ({username, password}) => {

    try{
        const response = await axios.post('http://localhost:8083/login',{
            username: username,
            password: password
        });
        window.alert(JSON.stringify(response.data));

    } catch (error) {
        window.alert("Error:", error)
    }

}