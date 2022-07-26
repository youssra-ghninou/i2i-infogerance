import TestimonialCard from "./cards/TestimonialCard";

const Testimonial = () => {
    return (
        <div className="bg-gray bg-opacity-10 flex flex-col gap-3 py-10">
            <div className="px-5 tex-sm text-primary font-semibold dark:text-gray transition duration-500">
                Testimonial
            </div>
            <div className="px-5 font-bold text-xl text-black dark:text-white transition duration-500">
                You still hesitate about working with Us ? <br /> Check what They say about Us
            </div>
            <div className="px-5 mt-10">
                <TestimonialCard />
            </div>
        </div>
    );
}
 
export default Testimonial;