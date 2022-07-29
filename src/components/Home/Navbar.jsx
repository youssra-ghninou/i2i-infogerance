import Logo from '/images/logo.svg'
import { AiOutlineClose, AiOutlineContacts, AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineMenuFold, AiOutlineTeam } from 'react-icons/ai';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { IconContext } from "react-icons";
import NavIttem from '../navitems/NavIttem';
import { useState } from 'react';
import DarkModeToggle from '../buttons/DarkModeToggle';
import { Link } from "react-router-dom";


const Navbar = () => {
    const [showNav,setShowNav] = useState(false)

    return (
        <nav className="flex dark:bg-dark transition duration-500 lg:mb-20 lg:py-10 dark:text-white sticky z-50 top-0 h-14 items-center bg-white lg:bg-white/80 justify-between lg:items-center lg:h-32 lg:dark:bg-dark/80 lg:transition lg:duration-500">
            <div className="w-1/12">
            <Link to="/"><img src={Logo} alt="logo" /></Link>
            </div>
            <div className={(showNav ? "left-0 z-10" : "-left-full transition-left lg:left-0 lg:top-0 lg:-z-10 ") + "  fixed flex flex-col items-center gap-8 text-xl justify-center  top-0 left-0 bg-white lg:bg-white/80  lg:dark:bg-dark/80 text-dark  dark:text-white dark:bg-dark h-screen w-10/12 duration-500 lg:w-full lg:flex-row lg:items-center lg:gap-6 lg:text-sm lg:justify-cente lg:bg-white lg:text-dark  lg:dark:text-white lg:dark:bg-dark lg:text-[16px] lg:font-semibold lg:transition lg:duration-500 lg:h-32"}>
                <div className="flex items-center gap-3 w-40 lg:gap-0 lg:w-fit">
                    <IconContext.Provider value={{className: "lg:hidden" }}>
                        <AiOutlineHome />
                    </IconContext.Provider>
                    <Link to="/">Home</Link>{" "}               
                </div>
                <div className="flex items-center gap-3 w-40 lg:gap-0 lg:w-fit">
                    <IconContext.Provider value={{className: "lg:hidden" }}>
                        <AiOutlineTeam />
                    </IconContext.Provider>
                    <Link to="/whoarewe">Who Are We?</Link>
                </div>
                <div className="flex items-center gap-3 w-40 lg:gap-0 lg:w-fit">
                    <IconContext.Provider value={{className: "lg:hidden" }}>
                        <MdOutlineCleaningServices />
                    </IconContext.Provider>
                    <Link to="/ourservices">Our Services</Link>       
                </div>
                <div className="flex items-center gap-3 w-40 lg:gap-0 lg:w-fit">
                    <IconContext.Provider value={{className: "lg:hidden" }}>
                        <AiOutlineFundProjectionScreen />
                    </IconContext.Provider>
                    <Link to="/ourprojects">Our Projects</Link>       
                </div>
                <div className="flex items-center gap-3 w-40 lg:gap-0 lg:w-fit">
                    <IconContext.Provider value={{className: "lg:hidden" }}>
                        <AiOutlineContacts />
                    </IconContext.Provider>
                    <NavIttem content="Contact Us" href="/" className=""/>
                </div>
                <div className="lg:hidden">
                    <DarkModeToggle />
                </div>
            </div>
            <div className="lg:flex gap-5 hidden">
                    <DarkModeToggle />
                    <button className='lg:flex lg:bg-primary lg:py-4 lg:px-8 lg:text-white lg:rounded-md lg:font-semibold text-[12px]'>
                        Get a quote
                    </button>
            </div>
            <button className="lg:hidden">
            {showNav ? (<IconContext.Provider value={{className: "text-2xl" }}>
                 <AiOutlineClose onClick={() => setShowNav(!showNav)} />
            </IconContext.Provider>) : 
            (<IconContext.Provider value={{className: "text-2xl" }}>
                 <AiOutlineMenuFold 
                    onClick={() => setShowNav(!showNav)} />
            </IconContext.Provider>)
            }
            </button>
        </nav>
    );
}
 
export default Navbar;