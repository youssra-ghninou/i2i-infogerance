import ProjectsExploreCard from "../components/cards/ProjectsExploreCard"
import ProjectsButton from "../components/buttons/ProjectsButton"
const Projects = () => {
    return (
        <div className="flex flex-col gap-14">
            <ProjectsExploreCard />
            <div className="self-center ">
            <ProjectsButton text="Explore More Projects"/>
            </div>
        </div>
    );
}
 
export default Projects;