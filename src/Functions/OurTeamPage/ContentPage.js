import SecondImg from "../../Components/OurTeamPage/ContentPage/SecondImg";
import FirstImg from "../../Components/OurTeamPage/ContentPage/FirstImg";
import BackEndText from "../../Components/OurTeamPage/ContentPage/BackEndText";
import BackEndDescription from "../../Components/OurTeamPage/ContentPage/BackEndDescription";

const ContentPage = () => (
    <div className="contentHolder">
        <FirstImg />
        <div className="backEndHolder">
            <BackEndText />
            <SecondImg />
            <BackEndDescription />
        </div>
    </div>
)

export default ContentPage;
