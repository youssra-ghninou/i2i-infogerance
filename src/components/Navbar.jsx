import Logo from '/images/logo.jpg'
import { AiOutlineMenuFold } from 'react-icons/ai';
import { IconContext } from "react-icons";

const Navbar = () => {
    return (
        <nav className="flex justify-between lg:items-center">
            <div className="w-1/12">
                <img src={Logo} alt="logo" />
            </div>
            <div className="navigation hidden lg:flex lg:gap-5 lg:text-gray lg:text-[16px] nd:text-bold lg:font-semibold">
                <a href="" className="home">
                    <div className="home lg:text-black ">
                        Home
                    </div>
                </a>
                <a href="" className="home">
                    <div className="home">
                        Who are We ?
                    </div>
                </a>
                <a href="" className="home">
                    <div className="home">
                        Our Services
                    </div>
                </a>
                <a href="" className="home">
                    <div className="home">
                        Our Projects
                    </div>
                </a>
                <a href="" className="home">
                    <div className="home">
                        Contact Us
                    </div>
                </a>

            </div>
                <button className='hidden lg:flex lg:bg-primary lg:p-4 lg:text-white lg:rounded-md lg:font-semibold text-[12px]'>
                    Get a quote
                </button>
            <button className="menu lg:hidden">
            <IconContext.Provider value={{className: "text-2xl" }}>
                 <AiOutlineMenuFold />
            </IconContext.Provider>
            </button>
        </nav>
    );
}
 
export default Navbar;