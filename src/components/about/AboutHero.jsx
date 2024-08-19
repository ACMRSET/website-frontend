import groupimg from "./../../assets/group-photo.jpeg"
export const AboutHero = () => {
    return (
        <div style={{ backgroundImage: `url(${groupimg}) ` }}
            className="bg-contain bg-no-repeat m-auto md:bg-cover h-[40vh] md:h-[60vh] overflow-x-hidden items-center flex flex-col justify-center sticky top-[130px] z-10"
        >
            <h1 className='text-3xl md:text-6xl text-white text-center font-semibold mx-auto text-nowrap mb-24'>ABOUT US</h1>
        </div>
    )
}


