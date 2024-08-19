import nik from "./../../assets/team/nikhil.jpg"

const TeamCard = (props) => {



    return (
        <div className="items-center w-[200px] ">
            <img src={props.imurl} className="w-[200px] h-[220px] rounded-[15px]" ></img>
            <h1 className="text-2xl md:text-4xl font-semibold mx-auto text-center text-white">{props.name}</h1>
            <h1 className="text-lg md:text-2xl font-semibold text-center text-cyan-300">{props.position}</h1>
        </div>
    )
}

export default TeamCard