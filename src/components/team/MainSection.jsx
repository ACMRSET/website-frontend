import TeamCard from "./TeamCard"

import nikhil from "./../../assets/team/nikhil.jpg"
import rachel from "./../../assets/team/rachel.jpg"
import gautham from "./../../assets/team/gautham.jpg"
import niveditha from "./../../assets/team/niveditha.jpg"
import kevin from "./../../assets/team/kevin.jpg"
import hrithika from "./../../assets/team/hrithika.jpg"
import nodal from "./../../assets/team/nodal.jpg"
export const MainSection = () => {

    const teamlist = [

        { name: "Nikhil Stephen", position: "Chair", src: nikhil },
        { name: "Rachel Jacob", position: " Vice-Chair", src: rachel },
        { name: "Gautham C Sudheer", position: "Secretary", src: gautham },
        { name: "Niveditha B", position: "Joint Secretary", src: niveditha },
        { name: "Kevin Jacob", position: "Joint Secretary", src: kevin },
        { name: "Hrithika Harish", position: "Treasurer", src: hrithika },
        { name: "Faculty", position: "Nodal Officer", src: nodal }
    ]

    return (
        <div className="bg-black items-center text-white text-center font-semibold text-4xl space-y-12 relative z-20 w-full ">
            <br />

            <h1 >Faculty Coordinators</h1>
            <div className="grid grid-cols-1 md:flex md:space-x-32 max-md:space-y-20 items-center justify-items-center justify-center">
                <TeamCard imurl={teamlist[6].src} name={teamlist[6].name} position={teamlist[6].position} />
                <TeamCard imurl={teamlist[6].src} name={teamlist[6].name} position={teamlist[6].position} />
            </div>

            <br />
            <br />
            <h1 >Execom Members</h1>
            <div className="grid grid-cols-1 md:flex md:space-x-32 max-md:space-y-20 items-center justify-items-center justify-center">
                <TeamCard imurl={teamlist[0].src} name={teamlist[0].name} position={teamlist[0].position} />
                <TeamCard imurl={teamlist[1].src} name={teamlist[1].name} position={teamlist[1].position} />
            </div>
            <br />
            <div className="grid grid-cols-1 md:flex md:space-x-32 max-md:space-y-20 items-center justify-items-center justify-center">
                <TeamCard imurl={teamlist[2].src} name={teamlist[2].name} position={teamlist[2].position} />
            </div>
            <br />
            <div className="grid grid-cols-1 md:flex md:space-x-32 max-md:space-y-20 items-center justify-items-center justify-center">
                <TeamCard imurl={teamlist[3].src} name={teamlist[3].name} position={teamlist[3].position} />
                <TeamCard imurl={teamlist[4].src} name={teamlist[4].name} position={teamlist[4].position} />
            </div>
            <br />

            <div className="grid grid-cols-1 md:flex md:space-x-32 justify-center max-md:space-y-20 justify-items-center">
                <TeamCard imurl={teamlist[5].src} name={teamlist[5].name} position={teamlist[5].position} />
            </div>

            <br />
            <br />
            <br />



        </div>




    );
}
