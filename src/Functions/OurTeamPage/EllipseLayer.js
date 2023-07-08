import Text from "../../data/Text.json";


const EllipseLayer = () => (
    <div className="ellipseLayer">
        <div className="ellipseTitleText">
            {Text.Meet}
        </div>
        <div className="ellipseContentText">
            {Text.Harness}
        </div>
        <div className="ellipseContentText2">
            {Text.Designed}
        </div>
    </div>
)

export default EllipseLayer;