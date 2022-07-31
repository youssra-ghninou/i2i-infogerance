import ContactButton from "../components/buttons/ContactButton";
import TalkButton from "../components/buttons/TalkButton";

const   Header = () => {
    return ( 
        <div className="flex md:py-10 ">
            <div className="flex flex-1 flex-col w-full gap-5 pt-5 justify-center md:relative lg:justify-center lg:items-center lg:px-40 lg:text-center lg:pb-14">
                <div className="text-primary font-bold text-sm dark:text-white transition duration-500">
                Let’s Have a chat
                </div>
                <div className="text-text font-bold text-4xl dark:text-white transition duration-500">
                An expert at your services
                </div>
                <div>
                    <div className="text-text font-bold text-xs dark:text-white transition duration-500 lg:text-left "> Name</div>
                    <ContactButton text="Your full Name"/>
                </div>
                <div>
                    <div className="text-text font-bold text-xs dark:text-white transition duration-500 lg:text-left">Email</div>
                    <ContactButton text="Your Email"/>
                </div>
                <div>
                    <div className="text-text font-bold text-xs dark:text-white transition duration-500 lg:text-left">Phone number</div>
                    <ContactButton text="Your phone number"/>
                </div>
                <div>
                    <div className="text-text font-bold text-xs dark:text-white transition duration-500 lg:text-left">Messages</div>
                    <ContactButton text="What do you want to talk about?" />
                </div>



                <div className="flex flex-col gap-3 lg:gap-7 md:flex-row md:gap-5 lg:flex-row lg:my-10">
                    <TalkButton text="Send the Message" className="" />
                </div>
            </div>
        </div>

     );
}
  
export default Header;