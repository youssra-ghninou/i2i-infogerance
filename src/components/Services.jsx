import ServicesCard from "./cards/ServicesCard";

const Services = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <div className="text-primary font-bold text-sm">
                    The Services We Offers
                </div>
                <div className="font-bold text-xl text-dark">
                We offer a variaty of services to Help you to grow and build your
                Brand and help you with Developing your Products
                </div>
            </div>
            <ServicesCard/>
        </div>
    );
}
 
export default Services;