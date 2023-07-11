import Team from "../../../data/Team.json";

const renderMember = ({Name, Degree, Degree2}) => (
    <div className="memberNameText">
        {Name}
        <br/>
        {Degree}
        <br/>
        {Degree2}
    </div>
)

const MeetName = () => (
    <div className="teamNameHolder">
        {renderMember({Name : Team.JamesD, Degree : Team.SE})}
        {renderMember({Name : Team.PeterZD, Degree: Team.SCI, Degree2: Team.MEE})}
        {renderMember({Name : Team.AnthonyD, Degree: Team.SE})}
        {renderMember({Name : Team.PeterWD, Degree: Team.ES})}
        {renderMember({Name : Team.RichardXiaD, Degree: Team.Pha})}
        {renderMember({Name : Team.MageeD, Degree: Team.CS})}
        {renderMember({Name : Team.ChauencyD, Degree: Team.SE})}
        {renderMember({Name : Team.EthanD, Degree: Team.BS, Degree2: Team.MB})}
        {renderMember({Name : Team.RayD, Degree: Team.RAYYY})}
        {renderMember({Name : Team.RichardCD, Degree: Team.ES})}
        {renderMember({Name : Team.JayD, Degree: Team.CS})}
        {renderMember({Name : Team.JoannaD, Degree: Team.BD})}
        {renderMember({Name : Team.KikoD, Degree: Team.BD})}

    </div>
)

export default MeetName;