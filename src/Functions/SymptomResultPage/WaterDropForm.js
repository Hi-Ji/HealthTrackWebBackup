

const WaterDropForm = ({firstDisease, secondDisease, thirdDisease}) => {

    return (
        <div className="waterDropForm">
            <div className="waterDrop" >
                <div className="content">
                    <h2 style={{color: "red"}}>01</h2>
                    <p>
                        You may have an increased likelihood of experiencing {firstDisease}
                    </p>
                    <a href="#" style={{background: "red"}}>Read More</a>
                </div>
            </div>
            <div className="waterDrop" >
                <div className="content">
                    <h2 style={{color: "blue"}}>02</h2>
                    <p>
                        Your chances of encountering {secondDisease} might be slightly higher
                    </p>
                    <a href="#" style={{background: "blue"}}>Read More</a>
                </div>
            </div>
            <div className="waterDrop" >
                <div className="content">
                    <h2 style={{color: "purple"}}>03</h2>
                    <p>
                        There is a possibility that you are more susceptible to {thirdDisease}
                    </p>
                    <a href="#" style={{background: "purple"}}>Read More</a>
                </div>
            </div>
        </div>
    )
}


export default WaterDropForm