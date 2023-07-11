import Text from "../../data/Text.json";


const BotText = () => (
    <div className="botTextHolder">
        <div className="firstText">
            {Text[1]}
        </div>

        <div className="secondText">
            {Text[2]}
        </div>

        <div className="thirdText">
            {Text.HealthTracker}
        </div>

        <div className="fourthText">
            {Text.OurBest}
        </div>

        <div className="fifthText">
            {Text[2023]}
        </div>
    </div>
)

export default BotText;