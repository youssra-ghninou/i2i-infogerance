import { IconContext } from "react-icons";
import { AiOutlineArrowRight } from 'react-icons/ai';

const CheckServicesButton = (props) => {
    return (
        <button>
            <div className="flex items-center justify-center gap-2">
                <div className="font-bold text-base text-text dark:text-white transition duration-500">{props.text}</div>
                <IconContext.Provider value={{className: "text-primary text-xl" }}>
                    <AiOutlineArrowRight />
                </IconContext.Provider>
            </div>
        </button>
    );
}
 
export default CheckServicesButton;