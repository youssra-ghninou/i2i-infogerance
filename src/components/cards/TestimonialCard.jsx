import SliderButton from "../buttons/SliderButtons";
import Smail from "/images/smail.png"
import Djamila from "/images/djamila.png"

const TestimonialCard = () => {
    return (
        <div className="text-2xl flex flex-col gap-10">
            <div className="md:flex md:gap-10 lg:gap-40">
                <div className="flex flex-col gap-3 md:items-start">
                    <div className="text-sm text-gray">
                    Our team of digital product creators and Tch Bring Skilled will take your idea to the next level and help you with your product
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={Smail} alt="smail" className="w-auto h-auto" />
                        <div className="flex flex-col gap-2">
                            <div className="text-sm font-semibold text-black dark:text-white transition duration-500">
                                Smail yefssah
                            </div>
                            <div className="text-xs text-gray">
                                CEO innova
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:flex flex-col gap-3 md:items-start hidden">
                    <div className="text-sm text-gray ">
                    Our team of digital product creators and Tch Bring Skilled will take your idea to the next level and help you with your product
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={Djamila} alt="djamila" className="w-auto h-auto" />
                        <div className="flex flex-col gap-2">
                            <div className="text-sm font-semibold text-black dark:text-white transition duration-500">
                                Djamila Malak
                            </div>
                            <div className="text-xs text-gray">
                                Co-Founder RobaKabyle
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SliderButton />
        </div>
    );
}
 
export default TestimonialCard;