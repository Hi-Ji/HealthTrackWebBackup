import axios from "axios";
import config from "./ServerConfig.json";
import {useContext} from "react";
import {AuthContext} from "../AuthContext";

export const SymptomFinderRequest = async ({userSymptomsList, token}) => {


    return await axios.post(config.Host + config.Port + '/symptomfinder', {
        symptoms: userSymptomsList
    }, {
        headers: {
            'JWT_AUTHORIZATION': token // Include the token in the Authorization header
        }
    });

}