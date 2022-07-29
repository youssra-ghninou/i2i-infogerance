import CheckServicesButton from "../components/buttons/CheckServicesButton";
import TalkButton from "../components/buttons/TalkButton";

const Header = () => {
    return ( 
        <div className="flex  ">
        <div className="flex flex-1 flex-col w-full pt-5 justify-center gap-5 md:relative lg:justify-center lg:items-center lg:px-40 lg:text-center lg:pb-14">
            <div className="text-primary font-bold text-sm dark:text-white transition duration-500">
            Our Services
            </div>
            <div className="text-text font-bold text-4xl dark:text-white transition duration-500">
            Services We Offer
            </div>
            <h2 className="font-normal text-gray text-base">
            With  Our Awesome team we offres a variaty of services from UI/UX design to Video Productions,Our Goal is to help you on your Road to Create your product</h2>
            <div className="flex flex-col gap-3 lg:gap-7 md:flex-row md:gap-5 lg:flex-row ">
                <TalkButton text="Lets talk" className="bg-red-500" />
            </div>
        </div>
    </div>

     );
}
 
export default Header;