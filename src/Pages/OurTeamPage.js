import "../Styles/OurTeamPage.css";
import EllipseLayer from "../Functions/OurTeamPage/EllipseLayer";
import Line from "../Functions/OurTeamPage/Line";
import ContentPage from "../Functions/OurTeamPage/ContentPage";
import Meet from "../Functions/OurTeamPage/Meet";
import EighthImg from "../Components/OurTeamPage/Other/EighthImg";
import NinthImg from "../Components/OurTeamPage/Other/NinthImg";
import TenthImg from "../Components/OurTeamPage/Other/TenthImg";
import BotText from "../Functions/OurTeamPage/BotText";
import BotBar from "../Functions/OurTeamPage/BotBar";


const OurTeamPage = () => (
    <div className="container">
        <EllipseLayer />
        <Line />
        <ContentPage />
        <Meet />
        <EighthImg />
        <NinthImg />
        <TenthImg />
        <BotText />
        <BotBar />
    </div>
)

export default OurTeamPage;