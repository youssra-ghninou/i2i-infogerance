import ServicesButton from "../buttons/ServicesButton"

const ServicesCard = () => {
    const services = [{
      id: 1,
        title: 'UI/UX Design ,Web Design',
        content: 'Makeing your product clean and easy to use it the important thing for us',
      },
      {
        id: 2,
        title: 'Web/App Development',
        content: 'Our Team will use the top  technologies to develope your product',
      },
      {
        id: 3,
        title: 'Marketing Digital,Social Media ',
        content: 'Grow your communty with our inbound marketing and social media merketing',
      },
      {
        id: 4,
        title: 'Brand Stratgey &Art Diraction',
        content: 'Help you to create an unique brand that stay in Clients Head',
      },
      {
        id: 5,
        title: 'Visual Identity Logo Brand',
        content: 'A logo Can make a big diffrance our team will Help you with that',
      },
      {
        id: 6,
        title: 'Video / Ads Production',
        content: 'What better way to reach user then with a good video to win their trust',
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