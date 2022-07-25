import ProjectsButton from "./buttons/ProjectsButton"
import ProjectsCard from "./cards/ProjectsCard"

const Projects = () => {
    return (
        <div className="flex flex-col gap-14">
            <div className="card-title flex flex-col gap-3">
                <div className="text-primary font-bold text-sm">
                    The work we realised
                </div>
                <div className="text-dark font-bold text-xl">
                    The work we did that made our Client happy and satisfied
                </div>
            </div>
            <ProjectsCard />
            <div className="self-center ">
                <ProjectsButton/>
            </div>
        </div>
    );
}
 
export default Projects;