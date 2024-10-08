import map from "./../../assets/maps.png"
import { useState } from "react"
export const MainPart = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function sendMessage() {
        console.log(name, email, message);
        fetch('/', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: {
                "name": name,
                "email": email,
                "message": message
            }
        });
        setName("");
        setEmail("");
        setMessage("")

    }

    return (
        <div className="bg-black p-10 lg:pl-28 relative z-20">
            <h1 className="mt-20 ml-8 text-5xl font-bold text-sky-500">Please contact us</h1>
            <div className="md:flex grid-cols-1">
                <div className="md:w-1/2 flex-wrap w-10/12">
                    <input value={name} onChange={e => setName(e.target.value)} type="text" className="pl-2 ml-8 lg:w-5/12 mt-20 h-10 rounded-lg md:w-full" placeholder=" Name"></input>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" className="pl-2 ml-8 lg:w-5/12 md:mt-20 mt-10 h-10 rounded-lg md:w-full" placeholder=" Email"></input>
                    <textarea value={message} onChange={e => setMessage(e.target.value)} className="pl-2 ml-8 w-11/12 mt-10 h-96 rounded-lg" placeholder=" Message"></textarea>
                    <button onClick={sendMessage} className="bg-blue-400 font-semibold w-11/12 md:w-52 md:h-8 rounded-lg ml-8 text-white">{"Send Message >>"}</button>
                </div>
                <div className="md:w-1/2 ml-10 mr-10 mt-14 flex items-center w-10/12">
                    <a href="https://maps.app.goo.gl/7reVbtGku2tMgXi38" target="_blank" className="w-10/12"><img src={map} className="w-full h-auto" /></a>
                </div>
            </div>
        </div>
    )
}