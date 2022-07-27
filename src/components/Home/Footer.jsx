import { IoIosSend } from 'react-icons/io';
import { FiDribbble, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import NavIttem from '../navitems/NavIttem';

const Footer = () => {
    return (
        <div className="bg-gray bg-opacity-10 px-2 -z-10 py-8 flex items-top gap-5 justify-center lg:gap-8">
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
                <NavIttem content="Home" href="/" className="text-dark font-normal text-sm dark:text-gray transition duration-500 "/>
                <NavIttem content="Who are We" href="/" className="text-dark font-normal text-sm dark:text-gray transition duration-500 "/>
                <NavIttem content="Our Services" href="/" className="text-dark font-normal text-sm dark:text-gray transition duration-500 "/>
                <NavIttem content="Our Projects" href="/" className="text-dark font-normal text-sm dark:text-gray transition duration-500 "/>
                <NavIttem content="Contact Us" href="/" className="text-dark font-normal text-sm dark:text-gray transition duration-500 "/>
            </div>
            <div className="flex-1 lg:flex flex-col gap-5 hidden">
                <div className="text-dark font-semibold text-lg dark:text-white transition duration-500">
                    Follow Us
                </div>
                <div className="text-dark font-normal flex flex-col gap-5 text-sm dark:text-gray transition duration-500">
                    <div className="flex items-center gap-3 w-40">
                        <FiFacebook />
                        <NavIttem content="fb.com/DigitalUX" href="/" className=""/>
                    </div>
                    <div className="flex items-center gap-3 w-40">
                        <FiInstagram />
                        <NavIttem content="@DigitalUX" href="/" className=""/>
                    </div>
                    <div className="flex items-center gap-3 w-40">
                        <FiTwitter />
                        <NavIttem content="@DigitalUX" href="/" className=""/>
                    </div>
                    <div className="flex items-center gap-3 w-40">
                        <FiDribbble />
                        <NavIttem content="@DigitalUx" href="/" className=" flex-1"/>
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
                    <input className='bg-white rounded-sm relative w-full text-sm text-left p-3 text-gray' type="submit" value="Your email" />
                    <div className="absolute right-6 text-primary">
                        <IoIosSend />   
                    </div>            
                </form>
            </div>
        </div>
    );
}
 
export default Footer;