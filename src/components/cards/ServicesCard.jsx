import ServicesButton from "../buttons/ServicesButton"

const ServicesCard = () => {
    const services = [{
      id: 1,
        title: 'UI/UX Design, Web Design',
        content: 'Making your product clean and easy to use, this is the most important thing for us',
      },
      {
        id: 2,
        title: 'Web/Mobile Development',
        content: 'Our team will use the best technologies to develop your product',
      },
      {
        id: 3,
        title: 'Marketing Digital,Social Media ',
        content: 'Grow your community with our inbound and social media merketing',
      },
      {
        id: 4,
        title: 'Brand Strategy & Art Direction',
        content: 'Help you to create an unique brand that will stick in your mind',
      },
      {
        id: 5,
        title: 'Visual Identity Logo Brand',
        content: ' Our team will elp you create the best logo ever',
      },
      {
        id: 6,
        title: 'Video / Ads Production',
        content: 'With a better way to reach the user then with a good video to win their trust',
      },
    ];
    return (
      <div className="flex flex-col gap-11 md:grid md:grid-cols-2">
          {services.map(({id,title,content}) => {
          return(
              <div key={id} className="flex flex-col p-2 gap-2 shadow-sm rounded-lg hover:shadow-red-500/40 shadow-blue-500/50 transform transition duration-500 hover:scale-110">
                  <div className="text-primary font-bold text-xl dark:text-white duration-500 transition">
                      {title}
                  </div>
                  <div className="text-gray font-normal text-base">
                      {content}
                  </div>
                  <ServicesButton text="Learn More" />
              </div>
          );
      })}
      </div>
  );
}
 
export default ServicesCard;