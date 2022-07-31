import { IconContext } from "react-icons";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from "react-router-dom";

const CheckServicesButton = (props) => {
    return (
        <button>
            <Link to="/ourprojects"><div className="flex items-center justify-center gap-2">
                <div className="font-bold text-base text-text dark:text-white transition duration-500">{props.text}</div>
                <IconContext.Provider value={{className: "text-primary text-xl" }}>
                    <AiOutlineArrowRight />
                </IconContext.Provider>
            </div></Link>
        </button>
    );
}
 
export default CheckServicesButton;