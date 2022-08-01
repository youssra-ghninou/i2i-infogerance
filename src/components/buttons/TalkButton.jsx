import { IconContext } from "react-icons";
import { BiMessageAltDetail } from 'react-icons/bi';

const TalkButton = (props) => {
    return (
                <button type={props.type} className={`flex items-center w-[100%] md:w-fit justify-center gap-2 bg-primary px-7 py-4 rounded text-white font-semibold text-sm`+props.className}>
                {props.text}
                <IconContext.Provider value={{className: "text-white text-2xl" }}>
                    <BiMessageAltDetail />
                </IconContext.Provider>
                
        </button>
    );
}
 
export default TalkButton;