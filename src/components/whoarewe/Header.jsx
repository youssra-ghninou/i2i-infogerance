import CheckServicesButton from "../buttons/CheckServicesButton";
import TalkButton from "../buttons/TalkButton"
import HeaderImage from '/images/header.png'
import Titik from '/images/Titik-titik.png'
import Arrow from '/images/arrow.png'

const Header = () => {
    return (  
        <div className="flex  ">
            <div className="flex flex-1 flex-col w-full pt-5 justify-center gap-5 md:relative lg:justify-center lg:items-center lg:px-40 lg:text-center">
                <div className="text-primary font-bold text-sm dark:text-gray transition duration-500">
                    About Us
                </div>
                <div className="text-text font-bold text-4xl dark:text-white transition duration-500">
                What we do is what make us Who we are
                </div>
                <h2 className="font-normal text-gray text-base">
                DigitUx is a Digital agencay founded 2022, that create User Centred Product that help her client to evolve ,our core idealogy is Perfection , our goal is to make usefull and easy to use products And help people to grow their business,            </h2>
                <div className="flex flex-col gap-3 lg:gap-7 md:flex-row md:gap-5 lg:flex-row ">
                    <TalkButton text="Lets talk" className="bg-red-500" />
                    <CheckServicesButton text="Check our Services" />
                </div>
            </div>
        </div>

    );
}
 
export default Header;