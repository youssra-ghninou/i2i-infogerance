import Logo from '/images/logo.jpg'
import { AiOutlineClose, AiOutlineContacts, AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineMenuFold, AiOutlineTeam } from 'react-icons/ai';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { IconContext } from "react-icons";
import NavIttem from './navitems/NavIttem';
import { useState } from 'react';
import DarkModeToggle from './buttons/DarkModeToggle';

const Navbar = () => {
    const [showNav,setShowNav] = useState(false)

    return (
        <nav className="flex dark:bg-dark transition duration-500 lg:mb-20 lg:py-10 dark:text-white sticky z-50 top-0 h-14 items-center bg-white justify-between lg:items-center">
            <div className="w-1/12">
                <img src={Logo} alt="logo" />
            </div>
            <div className={(showNav ? "left-0 z-10" : "-left-full transition-left") + "  fixed flex flex-col items-center lg:hidden gap-8 text-xl justify-center top-0 left-0 bg-white text-dark  dark:text-white dark:bg-dark h-screen w-10/12 lg:flex lg:gap-5 first-letter:lg:text-gray lg:text-[16px] md:text-bold lg:font-semibold duration-500"}>
                <div className="flex items-center gap-3 w-40">
                    <AiOutlineHome />
                    <NavIttem content="Home" href="/" className=""/>
                </div>
                <div className="flex items-center gap-3 w-40">
                    <AiOutlineTeam />
                    <NavIttem content="Who are We" href="/" className=""/>
                </div>
                <div className="flex items-center gap-3 w-40">
                    <MdOutlineCleaningServices />
                    <NavIttem content="Our Services" href="/" className=""/>
                </div>
                <div className="flex items-center gap-3 w-40">
                    <AiOutlineFundProjectionScreen />
                    <NavIttem content="Our Projects" href="/" className=""/>
                </div>
                <div className="flex items-center gap-3 w-40">
                    <AiOutlineContacts />
                    <NavIttem content="Contact Us" href="/" className=""/>
                </div>
                <div className="toggle">
                    <DarkModeToggle />
                </div>
            </div>
            <div className="hidden lg:flex flex-row items-center gap-6 text-sm justify-cente bg-white text-dark  dark:text-white dark:bg-dark lg:text-[16px] lg:font-semibold transition duration-500">
                    <NavIttem content="Home" href="/" className="text-lg "/>
                    <NavIttem content="Who are We" href="/" className="text-lg text-gray"/>
                    <NavIttem content="Our Services" href="/" className="text-lg text-gray"/>
                    <NavIttem content="Our Projects" href="/" className="text-lg text-gray"/>
                    <NavIttem content="Contact Us" href="/" className="text-lg text-gray"/>
                    
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