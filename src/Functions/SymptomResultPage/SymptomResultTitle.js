import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../Components/SymptomResultPage/Animation/TitleAnimation.json';
import Text from "../../data/Text.json"

const SymptomResultTitle = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="symptomResultTitleHolder">
            <div className="titleTextHolder">
                <div className="titleText">Result Display</div>
                <div className="minorText">{Text.WeCare}</div>
            </div>

            <div className="titleAnimationHolder">
                <Lottie options={defaultOptions} height={300} width={300} />
            </div>

        </div>
    )
}

export default SymptomResultTitle