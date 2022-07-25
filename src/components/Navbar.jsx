import Logo from '/images/logo.jpg'
import { AiOutlineClose, AiOutlineContacts, AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineMenuFold, AiOutlineTeam } from 'react-icons/ai';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { IconContext } from "react-icons";
import NavIttem from './navitems/NavIttem';
import { useState } from 'react';

const Navbar = () => {
    const [showNav,setShowNav] = useState(false)

    return (
        <nav className="flex sticky top-0 h-14 items-center bg-white justify-between lg:items-center">
            <div className="w-1/12">
                <img src={Logo} alt="logo" />
            </div>
            <div className={(showNav ? "left-0 z-10" : "-left-full") + " transition-left fixed flex flex-col items-center  gap-8 text-xl justify-center top-0 left-0 bg-dark text-white h-screen w-10/12 lg:flex lg:gap-5 first-letter:lg:text-gray lg:text-[16px] md:text-bold lg:font-semibold"}>
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
            </div>
                <button className='hidden lg:flex lg:bg-primary lg:p-4 lg:text-white lg:rounded-md lg:font-semibold text-[12px]'>
                    Get a quote
                </button>
            <button className="menu lg:hidden">
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