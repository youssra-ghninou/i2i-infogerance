import Service from '/images/service.png'
import Titik from '/images/Titik-titik.png'
import SliderButton from '../buttons/SliderButtons'

const OurServiceCard = (props) => {
    return (  
        <div className={`flex flex-col gap-2`+ props.className}>
            <div className="md:relative">
                <img src={Service} alt="" className='md:w-2/3 md:z-10' />
                <img src={Titik} alt="" 
                className='hidden md:block md:absolute md:-z-10 
                            md:right-6 md:-top-5 md:w-2/3 '/>
            </div>
            <SliderButton />
    </div>

    );
}
 
export default OurServiceCard;