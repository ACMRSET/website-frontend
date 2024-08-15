
import logo from './../assets/logo.png'

const Navbar = () => {

    //

    return (

        <nav className="flex justify-between bg-black text-white items-center p-2 ">

            <div className='flex shrink-0 items-center max-w-screen-xl '>
                <a><img src={logo} alt='looogo' width={142} height={134} className="" /></a>
                <div className='text-2xl mx-4 font-semibold '>
                    <p>Association for </p>
                    <p>Computing Machinery </p>
                </div>
            </div>

            <ul className="list-none p-0 m-0 flex gap-4 text-3xl lg:mx-72 sm:mx-8 space-x-2 font-semibold">
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