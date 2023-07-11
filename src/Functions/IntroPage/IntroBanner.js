import Text from "../../data/Text.json";
import LifestyleAdvice from "../../Components/IntroPage/Image/LifestyleAdvice.svg";
import DrugInteraction from "../../Components/IntroPage/Image/DrugInteraction.svg";
import SymptonFinder from "../../Components/IntroPage/Image/SymptomFinder.svg";
import HealthAssessment from "../../Components/IntroPage/Image/HealthAssessment.svg";
import Notification from "../../Components/IntroPage/Image/Notification.svg";

import OurTeam from "../../Components/IntroPage/Image/OurTeam.svg";

import { useNavigate } from "react-router-dom";


const IntroBanner = () => {

    
    const navigate = useNavigate();

    const goOurTeam = () => {
        navigate('/ourteam');
    }

    const goRiskRvaluator = () => {
        navigate('/riskevaluator');
    }

    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    return (
        <div className="bannerHolder">
            <div className="firstHalfSplitHolder">
                <div className="firstLeftVSplitHolder">
                    <div className="firstLeftHSplitHolder">
                        <div className="lifeStyleText">
                            {Text.LifeStyle}
                        </div>
                        <img src={LifestyleAdvice} className="lifestyleAdviceImg" />
                        <div style={{ height: "1rem" }}></div>
                    </div>
                    <div className="secondLeftHSplitHolder">
                        <div className="drugInteractionText">
                            {Text.DrugInter}
                        </div>
                        <img src={DrugInteraction} className="drugInteractionImg" />
                        <div style={{ height: "1rem" }}></div>
                    </div>


                </div>
                <div className="secondLeftVSplitHolder" onClick={()=>{goRiskRvaluator();scrollToTop()}}>
                    <div className="symptomFinderText">
                        {Text.SymptonFinder}<br />
                        {Text.SymptonFinder2}
                    </div>
                    <img src={SymptonFinder} className="symptomFinderImg" />
                    <div style={{ height: "1.5rem" }}></div>
                </div>
            </div>
            <div className="secondHalfSplitHolder">
                <div className="firstRightHSplitHolder">
                    <div className="healthAssessmentText">
                        {Text.HealthAssessment}
                    </div>
                    <img src={HealthAssessment} className="healthAssessmentImg" />
                </div>

                <div className="secondRightHSplitHolder">
                    <div className="firstRightVSplitHolder">
                        <div className="notificationText">
                            {Text.Notification}
                        </div>
                        <img src={Notification} className="notificationImg" />
                    </div>
                    <div className="secondRightVSplitHolder" onClick={goOurTeam}>
                        <div className="ourTeamText">
                            {Text.OurTeam}
                        </div>
                        <img src={OurTeam} className="ourTeamImg" />

                    </div>
                </div>
            </div>
        </div>

    )

}

export default IntroBanner
