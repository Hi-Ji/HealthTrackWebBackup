import Text from "../../../data/Text.json";
import Team from "../../../data/Team.json";

const renderTeamMember = ({ text }) => (
    <div className="researchContentText">
        {text}
    </div>
)

const ResearchText = () => (
    <div className="researchTextHolder">
        <div className="researchTitleText">
            {Text.IntroducingRes}
        </div>

        <div className="researchContentText">
            {renderTeamMember({ text: Team.Richard })}
            {renderTeamMember({ text: Team.Ethan })}
        </div>
    </div>
)

export default ResearchText;