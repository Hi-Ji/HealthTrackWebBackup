import SecondImg from "../../Components/OurTeamPage/ContentPage/SecondImg";
import FirstImg from "../../Components/OurTeamPage/ContentPage/FirstImg";
import BackEndText from "../../Components/OurTeamPage/ContentPage/BackEndText";
import BackEndDescription from "../../Components/OurTeamPage/ContentPage/BackEndDescription";
import ThirdImg from "../../Components/OurTeamPage/ContentPage/ThirdImg";
import FrontEndTitleText from "../../Components/OurTeamPage/ContentPage/FrontEndTitleText";
import FrontEndContentText from "../../Components/OurTeamPage/ContentPage/FrontEndContentText";
import FourthImg from "../../Components/OurTeamPage/ContentPage/FourthImg";
import FrontEndDescription from "../../Components/OurTeamPage/ContentPage/FrontEndDescription";
import ResearchText from "../../Components/OurTeamPage/ContentPage/ResearchText";
import FifthImg from "../../Components/OurTeamPage/ContentPage/FifthImg";
import ResearchDescription from "../../Components/OurTeamPage/ContentPage/ResearchDescription";
import AlgorithmText from "../../Components/OurTeamPage/ContentPage/AlgorithmText";
import SixthImg from "../../Components/OurTeamPage/ContentPage/SixthImg";
import AlgorithmDescription from "../../Components/OurTeamPage/ContentPage/AlgorithmDescription";


const ContentPage = () => (
    <div className="contentHolder">
        <FirstImg />
        <div className="backEndHolder">
            <BackEndText />
            <SecondImg />
            <BackEndDescription />
        </div>
        <div className="frontEndHolder">
            <ThirdImg />
            <div className="firstSeparationLine"></div>
            <FrontEndTitleText />
        </div>
        <div className="frontEndHolder2">
            <FrontEndContentText />
            <FourthImg />
            <FrontEndDescription />
        </div>
        <div className="researchHolder">
            <ResearchText />
            <FifthImg />
            <ResearchDescription />
        </div>
        <div className="algorithmHolder">
            <AlgorithmText />
            <SixthImg />
            <AlgorithmDescription />
        </div>
    </div>
)

export default ContentPage;
