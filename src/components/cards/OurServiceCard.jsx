const OurServiceCard = () => {
    return (  
        <div className={`flex flex-col gap-2`+ props.className}>
        <div className="md:relative">
            <img src={service} alt="" className='md:w-2/3 ' />
            <img src={Titik} alt="" 
            className='hidden md:block md:absolute md:-z-10 
                        md:right-6 md:-top-5 md:w-2/3'/>
        </div>
        <SliderButton />
    </div>

    );
}
 
export default OurServiceCard;