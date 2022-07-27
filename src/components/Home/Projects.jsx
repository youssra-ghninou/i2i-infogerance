import ProjectsButton from "../buttons/ProjectsButton"
import ProjectsCard from "../cards/ProjectsCard"

const Projects = () => {
    return (
        <div className="flex flex-col gap-14">
            <div className="card-title flex flex-col gap-3">
                <div className="text-primary font-bold text-sm md:text-lg dark:text-gray transition duration-500">
                    The work we realised
                </div>
                <div className="text-dark font-bold text-xl md:text-2xl md:font-extrabold md:w-9/12 dark:text-white transition duration-500 lg:w-1/2">
                    The work we did that made our Client happy and satisfied
                </div>
            </div>
            <ProjectsCard />
            <div className="self-center ">
                <ProjectsButton text="Explore More Projects"/>
            </div>
        </div>
    );
}
 
export default Projects;