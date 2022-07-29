const ProjectsCard = () => {
    const projects = [{
        id : 1,
        title: 'Happy Client',
        content: '+150',
      },
      {
        id : 2,
        title: 'Projects Done',
        content: '+450',
      },
      {
        id : 3,
        title: 'Solutions Created',
        content: '+10',
      },
      {
        id : 4,
        title: 'Business Growed',
        content: '+25',
      },
    ];  
        return (
            <div className="grid grid-cols-2 lg:gap-20 lg:mr-10 md:grid-cols-4 gap-10">
                {projects.map(({id,title,content}) => {
                return(
                    <div key={id} className="flex flex-col gap-5 items-start lg:items-center transform transition duration-500 hover:scale-110">
                        <div className="text-primary font-bold text-lg dark:text-white transition duration-500 lg:w-[200px] ">
                            {title}
                        </div>
                        <div className="text-text font-extrabold text-4xl dark:text-white transition duration-500">
                            {content}
                        </div>
                    </div>
                );
            })}
            </div>
        );
    }
 
export default ProjectsCard;