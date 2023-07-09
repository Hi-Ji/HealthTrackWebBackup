import Text from "../../../data/Text.json";


const FrontEndTitleText = () => (
    <div className="frontEndTitleHolder">
        <div className="frontEndTitleTitle">
            {Text.IntroducingFullStack}
        </div>
        <div className="frontEndTitleContent">
            {Text.TheyCan}
        </div>
    </div>
)

export default FrontEndTitleText;