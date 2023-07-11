import Text from "../../data/Text.json";


const BotBar = () => (
    <div className="botBarHolder">
        <div className="incText">
            {Text.c}
        </div>
        <div>
            {Text.Terms}
        </div>
        <div>
            {Text.Privacy}
        </div>
    </div>
)

export default BotBar;