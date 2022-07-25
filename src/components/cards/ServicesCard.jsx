import ServicesButton from "../buttons/ServicesButton"

const ServicesCard = () => {
    const services = [{
        title: 'UI/UX Design ,Web Design',
        content: 'Makeing your product clean and easy to use it the important thing for us',
      },
      {
        title: 'Web/App Development',
        content: 'Our Team will use the top  technologies to develope your product',
      },
      {
        title: 'Marketing Digital,Social Media ',
        content: 'Grow your communty with our inbound marketing and social media merketing',
      },
      {
        title: 'Brand Stratgey &Art Diraction',
        content: 'Help you to create an unique brand that stay in Clients Head',
      },
      {
        title: 'Visual Identity Logo Brand',
        content: 'A logo Can make a big diffrance our team will Help you with that',
      },
      {
        title: 'Video / Ads Production',
        content: 'What better way to reach user then with a good video to win their trust',
      },
    ];
    return (
        <div className="flex flex-col gap-11">
            {services.map(({title,content}) => {
            return(
                <div key={title} className="flex flex-col gap-2">
                    <div className="text-primary font-bold text-xl">
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