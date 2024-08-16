
import group from './../../assets/team/group.jpg'


const TeamHero = () => {
    return (
        <div style={{ backgroundImage: `url(${group}) ` }}
            className="bg-cover h-[60vh] overflow-x-hidden items-center flex flex-col justify-center sticky top-[130px] z-10"
        >
            <h1 className='text-6xl text-white text-center font-semibold mx-auto text-nowrap'>TEAM</h1>
        </div>
    )
}

export default TeamHero