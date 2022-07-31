import ContactButton from "../components/buttons/ContactButton";
import TalkButton from "../components/buttons/TalkButton";

const   ContactForm = () => {
    return ( 
        <div className="flex md:pt-10 ">
            <div className="flex flex-1 flex-col w-full gap-5 pt-5 justify-center md:relative lg:justify-center lg:items-center lg:px-40 lg:text-center lg:pb-14">
                <div className="text-primary font-bold text-sm dark:text-white transition duration-500">
                Let’s Have a chat
                </div>
                <div className="text-text font-bold text-4xl dark:text-white transition duration-500">
                An expert at your services
                </div>
                <form action="submit" className="flex flex-col gap-4 lg:w-8/12">
                    <div className="flex flex-col gap-2"> 
                        <div className="text-black transition duration-500 dark:text-white font-bold text-base "> 
                            Your name 
                        </div> 
                        <input className="placeholder:dark:text-white placeholder:text-gray placeholder:text-sm placeholder:font-bold rounded-sm text-black dark:bg-white dark:bg-opacity-20 bg-white dark:text-white placeholder:transition placeholder:duration-500 form-input" type="text" name="FullName" id="fullname" placeholder="Your Full Name" /> 
                    </div>
                    <div className="flex flex-col gap-2"> 
                        <div className="text-black transition duration-500 dark:text-white font-bold text-base "> 
                            Your email 
                        </div> 
                        <input className="placeholder:dark:text-white placeholder:text-gray placeholder:text-sm placeholder:font-bold rounded-sm text-black dark:bg-white dark:bg-opacity-20 bg-white dark:text-white placeholder:transition placeholder:duration-500 form-input" 
                        type="email" name="email" id="email" placeholder="Your email" /> 
                    </div>
                    <div className="flex flex-col gap-2"> 
                        <div className="text-black transition duration-500 dark:text-white font-bold text-base "> 
                            Your Phone Number 
                        </div> 
                        <input className="placeholder:dark:text-white placeholder:text-gray placeholder:text-sm placeholder:font-bold rounded-sm text-black dark:bg-white dark:bg-opacity-20 bg-white dark:text-white placeholder:transition placeholder:duration-500 form-input" 
                        type="number" name="PhoneNumber" id="PhoneNumber" placeholder="Your email" /> 
                    </div>
                    <div className="flex flex-col gap-2"> 
                        <div className="text-black transition duration-500 dark:text-white font-bold text-base "> 
                            Messages 
                        </div> 
                        <textarea placeholder="About What do you want to Talk?" name="Messages" id="Messages" cols="" rows="4" className="placeholder:dark:text-white placeholder:text-gray placeholder:text-sm placeholder:font-bold rounded-sm text-black dark:bg-white dark:bg-opacity-20 bg-white dark:text-white placeholder:transition placeholder:duration-500 form-input"></textarea>
                    </div>

                </form>
                <div className="flex flex-col gap-3 lg:gap-7 md:flex-row md:gap-5 lg:flex-row lg:my-10">
                    <TalkButton text="Send the Message" className="" />
                </div>
            </div>
        </div>

     );
}
  
export default ContactForm;