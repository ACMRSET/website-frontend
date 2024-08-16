import TeamCard from "./TeamCard"

import nikhil from "./../../assets/team/nikhil.jpg"
import rachel from "./../../assets/team/rachel.jpg"
import gautham from "./../../assets/team/gautham.jpg"
import niveditha from "./../../assets/team/niveditha.jpg"
import kevin from "./../../assets/team/kevin.jpg"
import hrithika from "./../../assets/team/hrithika.jpg"

export const MainSection = () => {

    const teamlist = [
        { name: "Nikhil Stephen", position: "Chair", src: nikhil },
        { name: "Rachel Jacob", position: " Vice-Chair", src: rachel },
        { name: "Gautham C Sudheer", position: "Secretary", src: gautham },
        { name: "Niveditha B", position: "Joint Secretary", src: niveditha },
        { name: "Kevin Jacob", position: "Joint Secretary", src: kevin },
        { name: "Hrithika Harish", position: "Treasurer", src: hrithika }
    ]

    return (
        <div className="bg-black items-center text-white text-center font-semibold text-4xl space-y-12 relative z-20">
            <br />

            <h1 >Faculty Coordinators</h1>
            <div className="flex space-x-32 justify-center">
                <TeamCard imurl={teamlist[0].src} name={teamlist[0].name} position={teamlist[0].position} />
                <TeamCard imurl={teamlist[0].src} name={teamlist[0].name} position={teamlist[0].position} />
            </div>

            <br />
            <br />
            <h1 >Execom Members</h1>
            <div className="flex space-x-32 justify-center">
                <TeamCard imurl={teamlist[0].src} name={teamlist[0].name} position={teamlist[0].position} />
                <TeamCard imurl={teamlist[1].src} name={teamlist[1].name} position={teamlist[1].position} />
            </div>
            <br />
            <div className="flex space-x-32 justify-center">
                <TeamCard imurl={teamlist[2].src} name={teamlist[2].name} position={teamlist[2].position} />
            </div>
            <br />
            <div className="flex space-x-32 justify-center">
                <TeamCard imurl={teamlist[3].src} name={teamlist[3].name} position={teamlist[3].position} />
                <TeamCard imurl={teamlist[4].src} name={teamlist[4].name} position={teamlist[4].position} />
            </div>
            <br />

            <div className="flex space-x-32 justify-center">
                <TeamCard imurl={teamlist[5].src} name={teamlist[5].name} position={teamlist[5].position} />
            </div>

            <br />
            <br />
            <br />



        </div>




    );
}
