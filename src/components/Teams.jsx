import TeamCard from "./cards/TeamCard";

const Teams = () => {
    return (
        <div className="flex flex-col my-20 gap-3">
            <div className="text-primary font-bold text-sm">
                The Team behind DigitUX
            </div>
            <div className="font-bold text-xl text-dark">
                A team of creative Who Excited to help you with your Idea
            </div>
            <div className="text-gray font-normal text-base">
                Our team of digital product creators and Tch Bring Skilled will take your idea to the next level and help you with your product
            </div>
            <TeamCard />
        </div>
    );
}
 
export default Teams;