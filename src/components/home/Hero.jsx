import heroimg from "./../../assets/heroimg.png"
import logo from "./../../assets/unnamed.png"
export const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(${heroimg}) ` }}
            className="bg-cover h-[calc(100vh-200px)] overflow-x-hidden sticky top-[130px] z-10"
        >
            <img src={logo} alt="logoimg" width={550} height={300} className="mx-auto p-16" />
            <p className="lg:text-8xl md:text-5xl sm:text-4xl text-white text-center font-semibold tracking-wide">
                Advanced Computing as
                <br /> a Science & profession
            </p>
        </div>
    )
}


