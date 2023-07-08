import "../Styles/OurTeamPage.css";
import EllipseLayer from "../Functions/OurTeamPage/EllipseLayer";
import Line from "../Functions/OurTeamPage/Line";
import ContentPage from "../Functions/OurTeamPage/ContentPage";


const OurTeamPage = () => (
    <div className="container">
        <EllipseLayer />
        <Line />
        <ContentPage />
    </div>
)

export default OurTeamPage;