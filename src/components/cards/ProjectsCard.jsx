const ProjectsCard = () => {
    const projects = [{
        id : 1,
        title: 'UI/UX ',
        content: 'Delex Relay',
        image : '/images/delex.png',
      },
      {
        id : 2,
        title: 'Web/App Development',
        content: 'Cooke Me',
        image : '/images/cookeme.png',
      },
      {
        id : 3,
        title: 'UI/UX Design',
        content: 'Booking.com',
        image : '/images/booking.png',
      },
      {
        id : 4,
        title: 'UI/UX Design',
        content: 'Homely',
        image : '/images/homley.png',
      },
      {
        id : 5,
        title: 'UI/UX Design',
        content: 'ADOC',
        image : '/images/adoc.png',
      },
    ];  
        return (
            <div className="flex flex-col gap-10 md:grid md:grid-cols-2 lg:grid-cols-3">
                {projects.map(({id,title,content,image}) => {
                return(
                    <div key={id} className="flex flex-col gap-2">
                        <div className=" ">
                            <img className="" src={image} alt={content} />
                        </div>
                        <div className="text-primary font-bold text-xl dark:text-white transition duration-500">
                            {title}
                        </div>
                        <div className="text-gray font-normal text-base">
                            {content}
                        </div>
                    </div>
                );
            })}
            </div>
        );
    }
 
export default ProjectsCard;