import "../Styles/SymptomResultPage.css"
import WaterDropForm from "../Functions/SymptomResultPage/WaterDropForm";
import SymptomResultTitle from "../Functions/SymptomResultPage/SymptomResultTitle";
import InfoHeader from "../Functions/SymptomResultPage/InfoHeader";
import DetailTable from "../Functions/SymptomResultPage/DetailTable";
import {useContext} from "react";
import {AuthContext} from "../AuthContext";

const SymptomResultPage = () => {
    const { diseaseData } = useContext(AuthContext);

    // Function to get top 3 diseases
    const getTopThreeDiseases = (data) => {
        // Convert the object to an array of [key, value] pairs
        const diseaseArray = Object.entries(data);

        // Sort based on the probability (value)
        diseaseArray.sort((a, b) => b[1] - a[1]);

        // Get the top 3 items and map them to extract the disease name
        return diseaseArray.slice(0, 3).map(item => item[0]);
    };

    // Extract the top 3 diseases
    const topThreeDiseases = getTopThreeDiseases(diseaseData);

    return (
        <div>
            <SymptomResultTitle />
            <WaterDropForm firstDisease={topThreeDiseases[0] || 'N/A'} secondDisease={topThreeDiseases[1] || 'N/A'} thirdDisease={topThreeDiseases[2] || 'N/A'}/>
            <InfoHeader />
            <DetailTable />
            <div style={{paddingBottom: '5vh'}}></div>
        </div>
    )
}

export default SymptomResultPage