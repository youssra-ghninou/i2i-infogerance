import { IoIosArrowForward } from 'react-icons/io'
import { Link } from "react-router-dom"


const ProjectsButton = (props) => {
    return (
        <Link to="/projects"><button className="flex items-center gap-3 p-2 rounded-sm text-base font-semibold text-primary bg-transparent border-2 border-primary border-solid w-fit dark:text-white dark:border-white transition duration-500 mt-10">
                {props.text}
                Explore More Projects
                <IoIosArrowForward />
            </button></Link>
    );
}
 
export default ProjectsButton;