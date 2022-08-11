import CheckProjectButton from "../buttons/CheckProjectButton"

const ProjectsCard = () => {
    const projects = [{
        id : 1,
        title: 'UI/UX ',
        content: 'Delex Relay , a delivery platfrom',
        paragraph:"Delex is a Delivery Platform for bussiness owners And individuals who want to send packages from a point to an other, Delex offer a tracking system too ",
        image : '/images/delex.png',
      },
      {
        id : 2,
        title: 'Web/App Development',
        content: 'Cooke Me, Fresh food At your Home',
        paragraph:"Cooke me is a platform that offers fresh meals with a cheap price and allows individuals to sell their meals  ",
        image : '/images/cookeme.png',
      },
      {
        id : 3,
        title: 'UI/UX Design',
        content: 'ADOC, Your Online Medical Appoinments',
        paragraph:"ADOC Is an online Medical appoinment That allows users to take an appoinment with a doctor, it also works as a medical files Holder ",
        image : '/images/booking.png',
      },
    ];  
        return (
            <div className="flex flex-col gap-12 md:grid md:grid-cols-1 lg:grid-cols-1 lg:gap-20">
                {projects.map(({id,title,content,paragraph,image}) => {
                return(
                    <div key={id} className="flex flex-col gap-3 md:grid lg:grid-cols-2 md:grid-cols-1 transform transition duration-500 hover:scale-110">
                        <div className="lg:flex lg:flex-col lg:justify-between">
                            <div className="text-primary font-bold text-xl dark:text-white transition duration-500">
                                {title}
                            </div>
                            <div className="text-text font-extrabold dark:text-white transition text-base">
                                {content}
                            </div>
                            <div className="font-normal text-gray text-base pb-5">
                                {paragraph}
                            </div>
                            <div className="hidden lg:block">
                                <CheckProjectButton text="Check The project"/>
                            </div>
                        </div>
                        <div className="lg:place-self-end">
                            <img className="" src={image} alt={content} />
                            <div className="lg:hidden">
                                <CheckProjectButton text="Check The project"/>
                            </div>
                        </div>
                    </div>
                );
            })}
            </div>
        );
    }
 
export default ProjectsCard;