import { IconContext } from "react-icons";
import { TiPlus } from 'react-icons/ti';

const PopularQuestions = (props) => {
    return ( 
            <button className="flex justify-between items-center rounded-[5px] border-primary dark:border-white border-2 border-solid px-2 py-3" >
                <div className="font-normal text-[15px] text-text dark:text-gray transition duration-500">{props.text}</div>
                <IconContext.Provider value={{className: "text-primary text-xl dark:text-white" }}>
                        <TiPlus />
                </IconContext.Provider>
            </button>
     );
}
 
export default PopularQuestions;