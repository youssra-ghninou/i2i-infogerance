import { IconContext } from "react-icons";
import { TiPlus } from 'react-icons/ti';

const PopularQuestions = (props) => {
    return ( 
        <div className="button rounded-[5px] border-primary dark:border-white border-2 border-solid h-10 flex items-center pl-2 mt-2 ">
        <button className="flex justify-around items-center gap-20" >
            <div className="font-normal text-[15px] text-text dark:text-gray transition duration-500">{props.text} </div>
            <IconContext.Provider value={{className: "text-primary text-xl dark:text-white" }}>
                    <TiPlus />
            </IconContext.Provider>

        </button>
    </div>

     );
}
 
export default PopularQuestions;