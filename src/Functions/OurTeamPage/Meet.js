import MeetName from "../../Components/OurTeamPage/Meet/MeetName";
import Text from "../../data/Text.json";

const Meet = () => (
    <div className="meetHolder">
        <div className="meetTitleText">
            {Text.Meet}
        </div>
        <div className="meetContent">
            {Text.AllOver}
        </div>
        <MeetName />

    </div>
)

export default Meet;