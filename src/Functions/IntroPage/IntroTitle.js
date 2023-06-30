import Text from '../../data/Text.json';


const currentDate = new Date();
const date = currentDate.getDate();  // get the day as a number (1-31)
const month = currentDate.getMonth() + 1;  // get the month as a number (0-11, hence the '+ 1')
const year = currentDate.getFullYear();

function getMonthName(monthNumber) {
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];

    return monthNames[monthNumber - 1];
}

const IntroTitle = () => (
    <div>
        <div className="titleHolder">
            <div className="titleDateText">
                {date}  {getMonthName(month)}  {year}
            </div>
            <div className='titleText'>
                {Text.HowAreYou}
            </div>
        </div>
    </div>
)

export default IntroTitle;