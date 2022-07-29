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
            <div className="flex flex-col gap-10 md:grid grid-cols-2 lg:grid-cols-4">
                {projects.map(({id,title,content}) => {
                return(
                    <div key={id} className="flex flex-col gap-2">
                        <div className="text-primary font-bold text-xl dark:text-white transition duration-500">
                            {title}
                        </div>
                        <div className="text-text font-extrabold text-4xl dark:text-white">
                            {content}
                        </div>
                    </div>
                );
            })}
            </div>
        );
    }
 
export default ProjectsCard;