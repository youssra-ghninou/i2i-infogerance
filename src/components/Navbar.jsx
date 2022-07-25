import Logo from '/images/logo.jpg'
import { AiOutlineMenuFold } from 'react-icons/ai';
import { IconContext } from "react-icons";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center">
            <div className="w-1/12">
                <img src={Logo} alt="logo" />
            </div>
            <div className="navigation hidden md:flex md:gap-5 md:text-lg font-bold md:text-gray">
                <a href="" className="text-black">
                    <div className="home">
                        Home
                    </div>
                </a>
                <a href="" className="home">
                    <div className="home">
                        Ho are We ?
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
            <div className="hidden md:block md:bg-primary md:p-4 text-white font-bold md:rounded-lg">
                Get a Quote
            </div>
            <button className="menu md:hidden">
            <IconContext.Provider value={{className: "text-2xl" }}>
                 <AiOutlineMenuFold />
            </IconContext.Provider>
            </button>
        </nav>
    );
}
 
export default Navbar;