const ProjectsCard = () => {
    const projects = [{
        id : 1,
        title: 'UI/UX ',
        content: 'Delex Relay , a delivery platfrome',
        paragraph:"Delex is a Delivery Platforme for bussiness owner And indivudial who want to send packages from a point to an other ,Delex offer a tracking system too ",
        image : '/images/delex.png',
      },
      {
        id : 2,
        title: 'Web/App Development',
        content: 'Cooke Me ,Fresh food At your Home',
        paragraph:"Cooke me is an platform that offer fresh meal with a cheap price and allow indivudial to sell their meals  ",
        image : '/images/cookeme.png',
      },
      {
        id : 3,
        title: 'UI/UX Design',
        content: 'ADOC,Your Online Medical Appoinments',
        paragraph:"ADOC Is an online Medical appoinment That allow user To take an appoinment with a doctor , it alos work as a medical files Holder ",
        image : '/images/booking.png',
      },
    ];  
        return (
            <div className="flex flex-col gap-12 md:grid md:grid-cols-2 lg:grid-cols-3">
                {projects.map(({id,title,content,paragraph,image}) => {
                return(
                    <div key={id} className="flex flex-col gap-3">
                        <div className="text-primary font-bold text-xl dark:text-white transition duration-500">
                            {title}
                        </div>
                        <div className="text-text font-extrabold dark:text-white transition text-base">
                            {content}
                        </div>
                        <div className="font-normal text-gray text-base pb-5">
                            {paragraph}
                        </div>
                        <div className=" ">
                            <img className="" src={image} alt={content} />
                        </div>

                    </div>
                );
            })}
            </div>
        );
    }
 
export default ProjectsCard;