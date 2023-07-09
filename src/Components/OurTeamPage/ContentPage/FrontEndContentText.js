import Team from "../../../data/Team.json";
import Text from "../../../data/Text.json";


const renderTeamMember = ({text}) => (
    <div className="frontEndContentContent">
        {text}
    </div>
)


const FrontEndContentText = () => (
    <div className="frontEndContentHolder">
        <div className="frontEndContentTitle">
            {Text.IntroducingFrontEnd}
        </div>
        {renderTeamMember({text : Team.Jay})}
        {renderTeamMember({text : Team.Anthony})}
        {renderTeamMember({text : Team.James})}
        {renderTeamMember({text : Team.PeterZhang})}
    </div>
)

export default FrontEndContentText;