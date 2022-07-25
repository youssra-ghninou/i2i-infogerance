import CheckServicesButton from "./buttons/CheckServicesButton";
import TalkButton from "./buttons/TalkButton"

const Header = () => {
    return (
        <div className="flex">
        <div className="flex flex-1 flex-col w-full pt-5 justify-center font-poppins gap-5">
            <div className="text-primary font-bold text-sm">
                Hello,
            </div>
            <div className="text-text font-bold text-4xl">
                We Help People To Bring Their Ideas Alive 
            </div>
            <h2 className="font-normal text-gray text-base">
            A talented team to help you in your journey on creating usefull and easy to use product
            </h2>
            <div className="flex flex-col gap-3 lg:flex-row lg:gap-3">
                <TalkButton text="Lets talk" className="bg-red-500" />
                <CheckServicesButton text="Check our Services" />
            </div>
        </div>
        <div className="lg:flex-1 hidden lg:flex">
            
        </div>
        </div>
    );
}
 
export default Header;