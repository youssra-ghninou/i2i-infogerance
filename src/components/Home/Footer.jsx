import { IoIosSend } from 'react-icons/io';
import { FiDribbble, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-gray bg-opacity-10 px-2 -z-10 py-8 flex items-top gap-5 justify-center lg:gap-8 lg:py-10">
            <div className="flex-1 flex flex-col gap-5">
                <div className="text-primary font-bold text-4xl dark:text-white transition duration-500">
                    I2I-Info
                </div>
                <div className="text-dark font-normal text-sm dark:text-gray transition duration-500 ">
                    DigitUx is a Digital agencay that create User centred Product that help her client to evolve
                </div>
            </div>
            <div className="flex-1 lg:flex flex-col gap-5 hidden">
                <div className="text-dark font-semibold text-lg dark:text-white transition duration-500">
                    About
                </div>
                <NavLink className={(navData) => (navData.isActive ? 'text-dark font-normal text-sm dark:text-white transition duration-500' : 'text-gray')} 
                to="/">
                    Home
                </NavLink>{" "}               
                <NavLink className={(navData) => (navData.isActive ? 'text-dark font-normal text-sm dark:text-white transition duration-500' : 'text-gray')} 
                to="/whoarewe">
                    Who are We
                </NavLink>          
                <NavLink className={(navData) => (navData.isActive ? 'text-dark font-normal text-sm dark:text-white transition duration-500' : 'text-gray')} 
                to="/ourservices">
                    Our Services
                </NavLink>
                <NavLink className={(navData) => (navData.isActive ? 'text-dark font-normal text-sm dark:text-white transition duration-500' : 'text-gray')} 
                to="/ourprojects">
                    Our Projects
                </NavLink>
                <NavLink className={(navData) => (navData.isActive ? 'text-dark font-normal text-sm dark:text-white transition duration-500' : 'text-gray')} 
                to="/contactus">
                    Contact Us
                </NavLink>
            </div>
            <div className="flex-1 lg:flex flex-col gap-5 hidden">
                <div className="text-dark font-semibold text-lg dark:text-white transition duration-500">
                    Follow Us
                </div>
                <div className="text-dark font-normal flex flex-col gap-5 text-sm dark:text-gray transition duration-500">
                    <div className="flex items-center gap-3 w-40">
                        <FiFacebook />
                        <NavLink className="text-dark font-normal text-sm dark:text-gray transition duration-500" 
                        to="/">
                            fb.com/DigitalUX
                        </NavLink>{" "}               
                    </div>
                    <div className="flex items-center gap-3 w-40">
                        <FiInstagram />
                        <NavLink className="text-dark font-normal text-sm dark:text-gray transition duration-500" 
                        to="/">
                            @DigitalUX
                        </NavLink>             
                    </div>
                    <div className="flex items-center gap-3 w-40">
                        <FiTwitter />
                        <NavLink className="text-dark font-normal text-sm dark:text-gray transition duration-500" 
                        to="/">
                            @DigitalUX
                        </NavLink>             
                    </div>
                    <div className="flex items-center gap-3 w-40">
                        <FiDribbble />
                        <NavLink className="text-dark font-normal text-sm dark:text-gray transition duration-500" 
                        to="/">
                            @DigitalUX
                        </NavLink>             
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-5">
                <div className="text-dark font-semibold text-lg dark:text-white transition duration-500">
                    Get in youch with Us
                </div>
                <div className="text-dark font-normal text-sm text-justify dark:text-gray transition duration-500">
                Need Answers? Need help ? Just email us 
                </div>
                <form action="" className='flex items-center lg:relative'>
                    <input className="placeholder:dark:text-gray placeholder:text-gray placeholder:text-xs placeholder:font-bold rounded-sm text-black dark:bg-white dark:bg-opacity-20 bg-white dark:text-white placeholder:transition placeholder:duration-500 form-input" 
                        type="email" name="email" id="email" placeholder="Your email" /> 
                    <button type='sunmit' className="absolute right-6 text-primary">
                        <IoIosSend />   
                    </button>            
                </form>
            </div>
        </div>
    );
}
 
export default Footer;