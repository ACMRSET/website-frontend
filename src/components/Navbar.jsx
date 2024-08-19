
import { useState } from 'react'
import logo from './../assets/logo.png'
import { Menu, X } from "lucide-react"
const Navbar = () => {

    const [open, setOpen] = useState(false);

    const toggleNavbar = () => {

        setOpen(!open);

    }

    //lg:mx-72 sm:mx-8
    return (
        <>
            <nav className="flex justify-between bg-black text-white items-center p-2 overflow-x-hidden fixed z-50 w-full top-0 h-[130px]">

                <div className='flex shrink-0 items-center max-w-screen-xl '>
                    <a href="https://www.acm.org/" target="_blank"><img src={logo} alt='looogo' width={55} height={50} className="md:h-[100] md:w-[110]" /></a>
                    <div className='text-xl md:text-2xl mx-4 font-semibold '>
                        <p>Association for </p>
                        <p>Computing Machinery </p>
                    </div>
                </div>

                <div className='hidden md:flex'>

                    <ul className="list-none p-0 m-0 flex gap-4 text-xl mr-5 space-x-2 font-semibold flex-wrap ">
                        <li className=' hover:text-cyan-600'>
                            <a href='/home'>HOME</a>
                        </li>
                        <li className=' hover:text-cyan-600'>
                            <a href='/about'>ABOUT US</a>
                        </li>

                        <li className=' hover:text-cyan-600'>
                            <a href='/events'>EVENTS</a>
                        </li >

                        <li className=' hover:text-cyan-600'>
                            <a href='/team'>TEAM</a>
                        </li>
                        <li className=' hover:text-cyan-600'>
                            <a href='/contact'>CONTACT</a>
                        </li>

                    </ul>


                </div>
                <div className='flex md:hidden'>
                    <button onClick={toggleNavbar}>{open ? <X /> : <Menu />}</button>
                </div>





            </nav>
            {
                open && (<div className='md:hidden z-40 items-center mb-3 fixed bg-black w-full'>

                    <ul className="list-none p-0 m-0 grid-cols-1 justify-center gap-4 text-xl mr-5 space-x-2 font-semibold flex-wrap text-white">
                        <li className=' hover:text-cyan-600 text-center'>
                            <a href='/home'>HOME</a>
                        </li>
                        <li className=' hover:text-cyan-600 text-center'>
                            <a href='/about'>ABOUT US</a>
                        </li>

                        <li className=' hover:text-cyan-600 text-center' >
                            <a href='/events'>EVENTS</a>
                        </li >

                        <li className=' hover:text-cyan-600 text-center'>
                            <a href='/team'>TEAM</a>
                        </li>
                        <li className=' hover:text-cyan-600 text-center'>
                            <a href='/contact'>CONTACT</a>
                        </li>

                    </ul>


                </div>)
            }
        </>

    )
}

export default Navbar