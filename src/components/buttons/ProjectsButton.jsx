import { IoIosArrowForward } from 'react-icons/io';

const ProjectsButton = (props) => {
    return (
        <button className="flex items-center gap-3 p-2 rounded-sm text-base font-semibold text-primary bg-transparent border-2 border-primary border-solid w-fit dark:text-white dark:border-white transition duration-500">
                {props.text}
                <IoIosArrowForward />
            </button>
    );
}
 
export default ProjectsButton;