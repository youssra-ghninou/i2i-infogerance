import CheckServicesButton from "../buttons/CheckServicesButton";
import TalkButton from "../buttons/TalkButton"
import HeaderImage from '/images/header.png'
import Titik from '/images/Titik-titik.png'
import Arrow from '/images/arrow.png'
import { Link } from "react-router-dom";



const Header = () => {
    return (
        <div className="flex md:grid md:grid-cols-2 lg:pt-20">
            <div className="flex flex-1 flex-col w-full pt-5 justify-center gap-5 md:relative">
                <img src={Arrow} alt="" className="hidden lg:block lg:absolute lg:bottom-5 lg:-left-16 lg:z-10 lg:w-[55px] "/>
                <div className="text-primary font-bold text-sm dark:text-gray transition duration-500">
                    Hello,
                </div>
                <div className="text-text font-bold text-4xl dark:text-white transition duration-500">
                    We help people to bring their ideas alive 
                </div>
                <h2 className="font-normal text-gray text-base">
                A talented team to assist you on your journey
                </h2>
                <div className="flex flex-col gap-3 md:flex-row md:gap-5 lg:flex-row lg:gap-3">
                    <Link to='/contactus'><TalkButton text="Let's talk" className="" /></Link>
                    <CheckServicesButton text="Check Our Services" />
                </div>
            </div>
            <div className=" hidden md:block md:relative lg:overflow-x-clip">
                <img src={Titik} alt="tiktik" className="md:absolute md:h-auto md:-bottom-6 md:w-8/12 md:-right-8 "/>
                <img src={HeaderImage} alt="header" className="md:absolute md:h-auto md:w-auto"/>
            </div>
        </div>
    );
}
 
export default Header;