
import logo from './../assets/logo.png'

const Navbar = () => {

    //lg:mx-72 sm:mx-8
    return (

        <nav className="flex justify-between bg-black text-white items-center p-2 overflow-x-hidden fixed z-50 w-full top-0 h-[130px]">

            <div className='flex shrink-0 items-center max-w-screen-xl '>
                <a><img src={logo} alt='looogo' width={110} height={100} className="" /></a>
                <div className='text-2xl mx-4 font-semibold '>
                    <p>Association for </p>
                    <p>Computing Machinery </p>
                </div>
            </div>

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
                    <a href='/team'>TEAMS</a>
                </li>
                <li className=' hover:text-cyan-600'>
                    <a href='/contact'>CONTACT</a>
                </li>

            </ul>

        </nav>

    )
}

export default Navbar