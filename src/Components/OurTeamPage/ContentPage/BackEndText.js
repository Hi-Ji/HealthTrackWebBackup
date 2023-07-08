import Text from "../../../data/Text.json";
import Team from "../../../data/Team.json";


const renderTeamMember = ({text}) => (
    <div className="backEndTextContent">
        {text}
    </div>
)

const BackEndText = () => (
    <div className="backEndTextHolder">
        <div className="backEndTextTitle">
            {Text.Introducing}
        </div>
        {renderTeamMember({text : Team.Chauency})}
        {renderTeamMember({text : Team.Ray})}
        {renderTeamMember({text : Team.James})}
        {renderTeamMember({text : Team.Anthony})}
    </div>
)

export default BackEndText;