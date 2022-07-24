const ProjectsCard = () => {
    const projects = [{
        id : 1,
        title: 'UI/UX ',
        content: 'Delex Relay',
        image : require('../../images/delex.png'),
      },
      {
        id : 2,
        title: 'Web/App Development',
        content: 'Cooke Me',
        image : require('../../images/cookeme.png'),
      },
      {
        id : 3,
        title: 'UI/UX Design',
        content: 'Booking.com',
        image : require('../../images/booking.png'),
      },
      {
        id : 4,
        title: 'UI/UX Design',
        content: 'Homely',
        image : require('../../images/homley.png'),
      },
      {
        id : 5,
        title: 'UI/UX Design',
        content: 'ADOC',
        image : require('../../images/adoc.png'),
      },
    ];  
        return (
            <div className="flex flex-col gap-11">
                {projects.map(({id,title,content,image}) => {
                return(
                    <div key={id} className="flex flex-col gap-2">
                        <div className="image">
                            <img src={image} alt={content} />
                        </div>
                        <div className="text-primary font-bold text-xl">
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