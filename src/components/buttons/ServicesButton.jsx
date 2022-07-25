import { IoIosArrowForward } from 'react-icons/io';

const ServicesButton = () => {
    return (
        <button className="flex items-center gap-3 p-2 rounded-sm text-base font-semibold text-primary bg-transparent border-2 border-primary border-solid w-fit">
                Learn More
                <IoIosArrowForward />
            </button>
    );
}
 
export default ServicesButton;