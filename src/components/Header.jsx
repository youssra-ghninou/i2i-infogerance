import { IconContext } from "react-icons";
import { AiOutlineArrowRight } from 'react-icons/ai';
import TalkButton from "./buttons/TalkButton"

const Header = () => {
    return (
        <div className="flex  flex-col w-full pt-5 justify-center font-poppins gap-5">
            <div className="text-primary font-bold text-sm">
                Hello,
            </div>
            <div className="text-text font-bold text-4xl">
                We Help People To Bring Their Ideas Alive 
            </div>
            <h2 className="font-normal text-gray text-base">
            A talented team to help you in your journey on creating usefull and easy to use product
            </h2>
            <TalkButton />
            <div className="flex items-center justify-center gap-2">
                <div className="font-bold text-base text-text">Check our Services</div>
                <IconContext.Provider value={{className: "text-primary text-xl" }}>
                    <AiOutlineArrowRight /> 
                </IconContext.Provider>
            </div>
        </div>
    );
}
 
export default Header;