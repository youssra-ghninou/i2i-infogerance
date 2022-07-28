import OurServiceCard from "../components/cards/OurServiceCard";
 
const UiDesign = () => {
    return ( 
    <div className="flex flex-col my-20 gap-3 md:flex-row md:grid md:grid-cols-2 md:gap-12 ">
      <div className="flex flex-col gap-3 md:gap-5">
      <div className="text-primary font-bold text-sm md:text-lg dark:text-white transition duration-500">
         Our Services
      </div>
      <div className="font-bold text-xl text-dark md:text-2xl md:font-extrabold dark:text-white transition duration-500">
         Ui /Ux , Web Design 
      </div>
      <div className="text-gray font-normal text-base">
      With a team of the best Digital Product Designer In the world at your hand , their goal is to create usefull andeasy to use products for you potentials users
      </div>
      </div>
      <OurServiceCard className=""/>
    </div>
     );
}
 
export default UiDesign;