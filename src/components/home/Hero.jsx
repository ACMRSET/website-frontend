import heroimg from "./../../assets/heroimg.png"
import logo from "./../../assets/unnamed.png"
export const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(${heroimg}) ` }}
            className="bg-cover h-[90%] overflow-x-hidden sticky top-[130px] z-10 overflow-hidden"
        >
            <img src={logo} alt="logoimg" width={550} height={300} className="mx-auto py-8" />
            <p className="lg:text-7xl md:text-4xl sm:text-3xl text-white text-center font-semibold tracking-wide">
                Advanced Computing as
                <br /> a Science & profession
            </p>
        </div>
    )
}


