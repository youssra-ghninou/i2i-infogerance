import TeamCard from "../cards/TeamCard";

const Theteam = () => {
    return (  
        <div className="flex flex-col my-20 gap-3 md:flex-row  
        md:grid md:grid-cols-2 md:gap-12 ">
            <div className="flex flex-col gap-3 md:gap-5">
            <div className="text-primary font-bold text-sm md:text-lg dark:text-gray transition duration-500">
                The Team 
            </div>
            <div className="font-bold text-xl text-dark md:text-2xl md:font-extrabold dark:text-white transition duration-500 lg:text-[42px] lg:leading-relaxed ">
            Meet The Awesome and Creative members of Our Team             </div>
            </div>
            <TeamCard className=""/>
        </div>

    );
}
 
export default Theteam;