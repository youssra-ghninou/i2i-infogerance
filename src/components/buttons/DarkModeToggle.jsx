import { MdDarkMode } from 'react-icons/md';
import { BsSun } from 'react-icons/bs';
import { IconContext } from "react-icons";
import useDarkeMode from '../../hook/useDarkMode';


const DarkModeToggle = () => {
    const [colorTheme,setTheme] = useDarkeMode();
    return (
        <button onClick={() => setTheme(colorTheme)} className="transition duration-500">
            {colorTheme === "light" ? (
            <IconContext.Provider value={{className: "text-4xl" }}>
                <BsSun />
            </IconContext.Provider>):
            (<IconContext.Provider value={{className: "text-4xl" }}>
                <MdDarkMode />
            </IconContext.Provider>)
            }
            
        </button>
    );
}
 
export default DarkModeToggle;