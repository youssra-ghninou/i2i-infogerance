import { IoIosArrowRoundBack,IoIosArrowRoundForward } from 'react-icons/io';
import { IconContext } from "react-icons";

const SliderButton = () => {
    return (
        <div className="text-primary w-full flex justify-center items-center gap-5">
            <button className="rounded-full bg-transparent border-2 p-2 border-primary border-solid">
            <IconContext.Provider value={{className: "text-2xl" }}>
                <IoIosArrowRoundBack />
            </IconContext.Provider>
            </button>
            <button className="rounded-full bg-transparent border-2 p-2 border-primary border-solid">
            <IconContext.Provider value={{className: "text-2xl" }}>
                <IoIosArrowRoundForward />
            </IconContext.Provider>
            </button>

        </div>
        
    );
}
 
export default SliderButton;