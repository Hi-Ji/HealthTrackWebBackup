import Team from "../../../data/Team.json";
import Text from "../../../data/Text.json";

const renderTeamMember = ({text}) => (
    <div className="designContentText">
        {text}
    </div>
)


const DesignText = () => (
    <div className="designTextHolder">
        <div className="designTitleText">
            {Text.IntroducingD}
        </div>
        
        {renderTeamMember({text : Team.Joanna})}
        {renderTeamMember({text : Team.Kiko})}
        {renderTeamMember({text : Team.PeterZhang})}
    </div>
)

export default DesignText;