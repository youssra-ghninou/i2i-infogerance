const ProjectsCard = () => {
    const projects = [{
        id : 1,
        title: 'Satisfied Clients',
        content: '+150',
      },
      {
        id : 2,
        title: 'Projects Done',
        content: '+450',
      },
      {
        id : 3,
        title: 'Solutions developed',
        content: '+10',
      },
      {
        id : 4,
        title: 'Business improved',
        content: '+25',
      },
    ];  
        return (
            <div className="grid grid-cols-2 md:flex md:justify-between lg:justify-center lg:gap-16 lg:text- gap-10">
                {projects.map(({id,title,content}) => {
                return(
                    <div key={id} className="flex flex-col gap-5 items-start lg:items-center transform transition duration-500 hover:scale-110">
                        <div className="text-primary font-bold text-lg dark:text-white transition duration-500">
                            {title}
                        </div>
                        <div className="text-text font-extrabold lg:self-start text-3xl dark:text-white transition duration-500">
                            {content}
                        </div>
                    </div>
                );
            })}
            </div>
        );
    }
 
export default ProjectsCard;