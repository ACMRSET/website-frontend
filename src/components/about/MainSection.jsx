import img2 from "./../../assets/lab-2.png"
import img3 from "./../../assets/techexc.png"
import img4 from "./../../assets/edu.png"
import img5 from "./../../assets/ethical.png"
import img6 from "./../../assets/diversity.png"

export const MainSection = () => {
    return (
        <div className="bg-black p-10 relative z-20">
            <div className="space-x-16 mt-6 p-2">
                {/* <div className="w-[50%] order-2 m-10"><img src={image1} alt="Lab-image" className="w-full"></img></div> */}
                <p className="text-white mt-3 text-justify text-2xl font-light w-full min-w-48 order-1">
                    Welcome to the Rajagiri School of Engineering and Technology (RSET) Chapter of the Association for Computing Machinery (ACM)! We're a dynamic community of students and faculty passionate about computing and innovation. At RSET ACM, we host workshops, hackathons, and events to enhance technical skills, foster creativity, and prepare members for successful careers in technology. Whether you're a beginner or an expert, join us to learn, connect, and explore the endless possibilities in the world of computing!
                </p>
            </div>
            <div className="w-full">
                <img src={img2} alt="Lab image" className="rounded-3xl m-auto w-1/2 h-auto" />
            </div>
            <h1 className="mt-20 ml-8 text-5xl font-bold text-sky-500">Mission</h1>
            <p className="text-white mt-2 text-xl ml-9 text-justify mr-10">
                ACM is a global scientific and educational organization dedicated to advancing the art, science, engineering, and application of computing, serving both professional and public interests by fostering the open exchange of information and by promoting the highest professional and ethical standards.
            </p>
            <h1 className="mt-20 ml-8 text-5xl font-bold text-sky-500">Vision</h1>
            <p className="text-white mt-2 text-xl ml-9 text-justify mr-10">
                ACM will continue to be the premiere global computing society.
            </p>
            <h1 className="mt-20 ml-8 text-5xl font-bold text-sky-500">Core Values</h1>
            <div className="space-x-40 mt-20 m-auto flex justify-center">
                <div className="min-w-32 min-h-32 h-60 w-60">
                    <div className="w-full h-full bg-[rgb(99,137,190)] pt-10">
                        <img src={img3} alt="Technical Excellence" className="h-3/4 w-5/6 m-auto" />
                    </div>
                    <p className="text-white text-xl">Technical Excellence</p>
                </div>
                <div className="min-w-32 min-h-32 h-60 w-60">
                    <div className="w-full  h-full bg-[rgb(79,30,30)] pt-10">
                        <img src={img4} alt="Educational and Technical Advancement" className="h-3/4 w-5/6 m-auto" />
                    </div>
                    <p className="text-white text-xl">Educational and Technical Advancement</p>
                </div>
                <div className="min-w-32 min-h-32 h-60 w-60">
                    <div className="w-full h-full bg-neutral-400 pt-10">
                        <img src={img5} alt="Ethical Computing" className="h-3/4 w-5/6 m-auto" />
                    </div>
                    <p className="text-white text-xl">Ethical Computing and Technology for positive impact</p>
                </div>
            </div>
                <div className="min-w-32 min-h-32 h-60 w-60 mt-32 m-auto">
                    <div className="w-full h-full bg-neutral-700 pt-10">
                        <img src={img6} alt="Diversity Equity Inclusion" className="h-3/4 w-5/6 m-auto" />
                    </div>
                    <p className="text-white text-xl">Diversity, Equity and Inclusion</p>
                </div>
            <div className="mt-32">
                <a className="font-semibold text-2xl text-indigo-500 ml-10 underline" href="https://services.acm.org/public/qj/quickjoin/qj_control.cfm?promo=PWEBTOP&form_type=Student" target="_blank">JOIN ACM NOW</a>
            </div>
        </div>
    )
}
