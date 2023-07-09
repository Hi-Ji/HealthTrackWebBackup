import Text from "../../../data/Text.json";
import Team from "../../../data/Team.json";


const renderTeamMember = ({text}) => (
    <div className="algorithmContentText">
        {text}
    </div>
)

const AlgorithmText = () => (
    <div className="algorithmTextHolder">
        <div className="algorithmTitleText">
            {Text.IntroducingAl}
        </div>

        {renderTeamMember({text : Team.PeterW})}
        {renderTeamMember({text : Team.RichardC})}
        {renderTeamMember({text : Team.MageeM})}
    </div>
)

export default AlgorithmText;