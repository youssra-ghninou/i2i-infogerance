import { IconContext } from "react-icons";
import { BiMessageAltDetail } from 'react-icons/bi';
import { Link } from "react-router-dom";

const TalkButton = (props) => {
    return (
        <Link to='/contactus'>
                <button className={`flex items-center justify-center gap-2 bg-primary px-7 py-4 rounded text-white font-semibold text-sm`+props.className}>
                {props.text}
                <IconContext.Provider value={{className: "text-white text-2xl" }}>
                    <BiMessageAltDetail />
                </IconContext.Provider>
                
        </button>

        </Link>
    );
}
 
export default TalkButton;