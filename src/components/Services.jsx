import ServicesCard from "./cards/ServicesCard";

const Services = () => {
    return (
        <div class="flex flex-col gap-6 md:grid md:overflow-hidden md:grid-cols-4 md:grid-rows-2 md:gap-2">
            <div class="md:col-span-2 flex flex-col gap-3">
            <div className="text-primary font-bold text-sm">
                     The Services We Offers
            </div>
            <div className="font-bold text-xl text-dark">
                We offer a variaty of services to Help you to grow and build your
                Brand and help you with Developing your Products
            </div>
            </div>
            <div class="md:col-start-3"><ServicesCard/></div>
        </div>
    );
}
 
export default Services;