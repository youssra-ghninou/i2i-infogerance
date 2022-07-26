import ServicesCard from "./cards/ServicesCard";

const Services = () => {
    return (
        <div className="flex flex-col gap-6 bg-white dark:bg-dark transition duration-500">
            <div className="flex flex-col gap-3">
            <div className="text-primary font-bold text-sm md:text-lg dark:text-gray">
                     The Services We Offers
            </div>
            <div className="font-bold text-xl dark:text-white text-dark md:text-2xl md:font-extrabold md:w-9/12 md:text-justify transition duration-500 lg:w-1/2">
                We offer a variaty of services to Help you to grow and build your
                Brand and help you with Developing your Products
            </div>
            </div>
            <div className="md:col-start-3"><ServicesCard/></div>
        </div>
    );
}
 
export default Services;