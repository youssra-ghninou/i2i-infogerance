import TeamCard from "../cards/TeamCard";

const Teams = () => {
    return (
        <div className="flex flex-col my-20 gap-3 md:flex-row  
                        md:grid md:grid-cols-2 md:gap-12 md:py-40">
            <div className="flex flex-col gap-3 md:gap-5">
                <div className="text-primary font-bold text-sm md:text-lg dark:text-gray transition duration-500">
                    The Team behind I2I
                </div>
                <div className="font-bold text-xl text-dark md:text-2xl md:font-extrabold dark:text-white transition duration-500">
                    A team of creative people who are excited to help you
                </div>
                <div className="text-gray font-normal text-base">
                    Our team, with good communication skills and high level of professionalism, create unique and special products.
                </div>
            </div>
            <TeamCard className="transform transition duration-500 hover:scale-110"/>
        </div>
    );
}
 
export default Teams;