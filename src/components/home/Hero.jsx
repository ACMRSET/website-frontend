import heroimg from "./../../assets/heroimg.png"
import logo from "./../../assets/unnamed.png"
export const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(${heroimg}) ` }}
            className="bg-cover h-[calc(100vh-200px)] overflow-x-hidden sticky top-[182px] z-10"
        >
            <img src={logo} alt="logoimg" className="mx-auto p-20" />
        </div>
    )
}


