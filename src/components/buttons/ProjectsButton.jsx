import { IoIosArrowForward } from 'react-icons/io';

const ProjectsButton = () => {
    return (
        <button className="flex items-center gap-3 p-2 rounded-sm text-base font-semibold text-primary bg-transparent border-2 border-primary border-solid w-fit">
                Explore More Projects
                <IoIosArrowForward />
            </button>
    );
}
 
export default ProjectsButton;