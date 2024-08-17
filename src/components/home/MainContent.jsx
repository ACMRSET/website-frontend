import image1 from "./../../assets/home-about-img.png"
export const MainContent = () => {
    return (
        <div className="bg-black p-10 relative z-20">
            <div className="flex w-1/2 align-middle">
            <div className="bg-slate-300 ml-10 w-60 h-10 rounded-full">
                <h1 className=" text-cyan-700 font-semibold text-xl text-center pt-1">ABOUT ACM RSET</h1>
            </div>
                <a className="text-cyan-400 ml-16 font-semibold" href="https://services.acm.org/public/qj/quickjoin/qj_control.cfm?promo=PWEBTOP&form_type=Student" target="_blank"><span className="align-middle">JOIN ACM</span></a>
            </div>
            <div className="lg:flex space-x-16 mt-6">
                <div className="w-[50%] order-2 m-10"><img src={image1} alt="Lab-image" className="w-full"></img></div>
                <p className="text-white mt-3 text-justify text-3xl font-light w-1/2 min-w-48 order-1 ">Welcome to the Rajagiri School of Engineering and Technology (RSET) Chapter of the Association for Computing Machinery (ACM)!
                    <br></br>
                    <br></br>
                    We're a dynamic community of students and faculty passionate about computing and innovation. At RSET ACM, we host workshops, hackathons, and events to enhance technical skills, foster creativity, and prepare members for successful careers in technology.
                    <br></br>
                    <br></br>
                    Whether you're new to computing or a pro, join us to learn, connect, and grow in the tech world!</p>
            </div>
            <div className="mt-6">
                <a href="https://www.acm.org/about-acm/about-the-acm-organization" target="_blank" className="font-semibold text-xl text-cyan-400 ml-16">LEARN MORE ABOUT ACM</a>
            </div>
        </div>
    )
}
