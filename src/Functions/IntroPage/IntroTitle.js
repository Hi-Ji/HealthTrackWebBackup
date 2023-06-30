import Text from '../../data/Text.json';

const IntroTitle = () => (
    <div>
        <div className="titleHolder">
            <div className="titleDateText">
                {Text['26June']}
            </div>
            <div className='titleText'>
                {Text.HowAreYou}
            </div>
        </div>
    </div>
)

export default IntroTitle;