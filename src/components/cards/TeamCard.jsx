import SliderButton from '../buttons/SliderButtons'
import Jamila from '/images/team.png'
const TeamCard = () => {
    return (
        <div className="flex flex-col gap-2">
            <img src={Jamila} alt="" />
            <div className="text-dark font-bold text-base">
                Jamila Smail
            </div>
            <div className="text-gray text-sm">
                CO-Founder
            </div>
            <SliderButton />
        </div>
    );
}
 
export default TeamCard;