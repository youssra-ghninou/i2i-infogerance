const ProcessCard = () => {
    const services = [{
        id: 1,
          title: 'User Research',
          content: 'User research helps us find out exactly how our target customers feel when interacting with a product ',
        },
        {
          id: 2,
          title: 'Design',
          content: 'User research helps us find out exactly how our target customers feel when interacting with a product ',
        },
        {
          id: 3,
          title: 'Test',
          content: 'User research helps us find out exactly how our target customers feel when interacting with a product ',
        },
        {
          id: 4,
          title: 'Implementation',
          content: 'User research helps us find out exactly how our target customers feel when interacting with a product ',
        },
      ];
  
      return (
        <div className="flex flex-col gap-11 md:grid md:grid-cols-2 lg:grid-cols-4 ">
            {services.map(({id,title,content}) => {
            return(
                <div key={id} className="flex flex-col p-2 gap-2 ">
                    <div className="line1 flex gap-4 text-center items-center">
                        <div className="text-primary font-bold text-3xl dark:text-white duration-500 transition">
                        0{id}
                        </div>
                        <div className="text-lg font-bold dark:text-white duration-500 transition">
                        {title}
                        </div>
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
 
export default ProcessCard;