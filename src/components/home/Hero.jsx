import heroimg from "./../../assets/heroimg.png"
import logo from "./../../assets/unnamed.png"
export const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(${heroimg}) ` }}
            className="bg-cover h-[70vh] overflow-x-hidden sticky top-[130px] z-10 overflow-hidden"
        >
            <img src={logo} alt="logoimg" width={220} height={120} className="mx-auto py-8 md:w-[440px] md:h-[240px]" />
            <p className="lg:text-7xl md:text-4xl text-4xl text-white text-center font-bold tracking-wide">
                Advanced Computing as
                <br /> a Science & profession
            </p>
        </div>
    )
}


