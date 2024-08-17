import map from "./../../assets/maps.png"
export const MainPart = () => {
    return (
        <div className="bg-black p-10 relative z-20">
            <h1 className="mt-20 ml-8 text-5xl font-bold text-sky-500">Please contact us</h1>
            <div className="flex">
                <div className="w-1/2">
                <input type="text" className="ml-8 w-52 mt-20 h-10 bg-zinc-300" placeholder="Name"></input>
                </div>
                <a href="https://maps.app.goo.gl/7reVbtGku2tMgXi38" target="_blank" className="w-1/2 mr-10 mt-14"><img src={map} className="w-full"/></a>
            </div>
        </div>
    )
}