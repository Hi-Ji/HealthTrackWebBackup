import InfoIcon from '@mui/icons-material/Info';
import React from 'react';

const InfoHeader = () => {

    return (
        <div className="infoHeaderHolder">
            <div className="infoTitleText">
                <InfoIcon sx={{ marginRight: '0.5em', verticalAlign: 'middle', width: '4vh', height: '4vh', marginBottom: '0.5vh'}}/>
                More Info
            </div>
        </div>
    )
}

export default InfoHeader