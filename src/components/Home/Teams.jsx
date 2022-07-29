import TeamCard from "../cards/TeamCard";

const Teams = () => {
    return (
        <div className="flex flex-col my-20 gap-3 md:flex-row  
                        md:grid md:grid-cols-2 md:gap-12 md:py-40">
            <div className="flex flex-col gap-3 md:gap-5">
                <div className="text-primary font-bold text-sm md:text-lg dark:text-gray transition duration-500">
                    The Team behind DigitUX
                </div>
                <div className="font-bold text-xl text-dark md:text-2xl md:font-extrabold dark:text-white transition duration-500">
                    A team of creative Who Excited to help you with your Idea
                </div>
                <div className="text-gray font-normal text-base">
                    Our team of digital product creators and Tch Bring Skilled will take your idea to the next level and help you with your product
                </div>
            </div>
            <TeamCard className=""/>
        </div>
    );
}
 
export default Teams;