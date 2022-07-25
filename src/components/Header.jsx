import CheckServicesButton from "./buttons/CheckServicesButton";
import TalkButton from "./buttons/TalkButton"
import HeaderImage from '/images/header.png'
import Titik from '/images/Titik-titik.png'
import Arrow from '/images/arrow.png'



const Header = () => {
    return (
        <div className="flex md:grid md:grid-cols-2 ">
            <div className="flex flex-1 flex-col w-full pt-5 justify-center gap-5 md:relative">
                <img src={Arrow} alt="" className="hidden lg:block md:absolute md:bottom-12 md:-left-12 md:-z-10 md:w-[55px] "/>
                <div className="text-primary font-bold  text-sm">
                    Hello,
                </div>
                <div className="text-text font-bold text-4xl">
                    We Help People To Bring Their Ideas Alive 
                </div>
                <h2 className="font-normal text-gray text-base">
                A talented team to help you in your journey on creating usefull and easy to use product
                </h2>
                <div className="flex flex-col gap-3 md:flex-row md:gap-5 lg:flex-row lg:gap-3">
                    <TalkButton text="Lets talk" className="bg-red-500" />
                    <CheckServicesButton text="Check our Services" />
                </div>
            </div>
            <div className=" hidden md:block md:relative">
                <img src={HeaderImage} alt="" />
                <img src={Titik} alt="" className="md:absolute md:bottom-0 md:right-0 md:-z-10"/>
            </div>
        </div>
    );
}
 
export default Header;