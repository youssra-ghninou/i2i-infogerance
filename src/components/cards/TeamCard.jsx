import SliderButton from '../buttons/SliderButtons'
import Jamila from '/images/team.png'
import Titik from '/images/Titik-titik.png'
const TeamCard = (props) => {
    return (
        <div className={`flex flex-col gap-2`+ props.className}>
            <div className="md:relative">
                <img src={Jamila} alt="" className='md:w-2/3 ' />
                <img src={Titik} alt="" 
                className='hidden md:block md:absolute md:-z-10 
                            md:right-6 md:-top-5 md:w-2/3'/>
            </div>
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