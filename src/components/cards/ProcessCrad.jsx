const ProcessCard = () => {
    const services = [{
        id: 1,
          title: 'User Research',
          content: 'User research helps us find out exactly how our target customers feel when interacting with a product ',
        },
        {
          id: 2,
          title: 'Design',
          content: ' A process where designers create sustainable solutions and optimal experiences for both customers in unique contexts and any service providers involved',
        },
        {
          id: 3,
          title: 'Testing services',
          content: 'A whole range of software testing services of all types to ensure applications work as they are intended no matter be the conditions or environments delivering superior user experience.',
        },
        {
          id: 4,
          title: 'Implementation',
          content: 'Our team guides organizations through each stage of a project lifecycle and offers industry-skilled, product-certified implementation consulting services experts',
        },
      ];
  
      return (
        <div className="flex flex-col gap-11 md:grid md:grid-cols-2 lg:grid-cols-4 lg:py-10">
            {services.map(({id,title,content}) => {
            return(
                <div key={id} className="flex flex-col p-2 gap-2 transform transition duration-500 hover:scale-110">
                    <div className="line1 flex gap-4 text-center items-center">
                        <div className="text-primary font-bold text-3xl dark:text-white duration-500 transition">
                        0{id}
                        </div>
                        <div className="text-lg font-bold dark:text-white duration-500 transition">
                        {title}
                        </div>
                    </div>
                    <div className="text-gray font-bold text-base">
                        {content}
                    </div>
                </div>
            );
        })}
        </div>
    );
}
 
export default ProcessCard;