import ContactButton from "../components/buttons/ContactButton";
import TalkButton from "../components/buttons/TalkButton";

const   ContactForm = () => {
    return ( 
        <div className="flex md:pt-10 ">
            <div className="flex flex-1 flex-col w-full gap-5 pt-5 lg:pt-0 justify-center lg:justify-center lg:items-center lg:px-40 lg:text-center lg:pb-14">
                <div className="text-primary font-bold text-sm dark:text-gray transition duration-500">
                Let’s Have a chat
                </div>
                <div className="text-text font-bold text-4xl dark:text-white transition duration-500">
                An expert in your services
                </div>
                <form action="submit" className="flex flex-col gap-4 lg:w-8/12 lg:text-left">
                    <div className="flex flex-col gap-2 lg:gap-1"> 
                        <div className="text-black transition duration-500 dark:text-white font-bold text-xs "> 
                            Your name 
                        </div> 
                        <input className="placeholder:dark:text-gray placeholder:text-gray placeholder:text-xs placeholder:font-bold rounded-sm text-black dark:bg-white dark:bg-opacity-20 bg-white dark:text-white placeholder:transition placeholder:duration-500 form-input" type="text" name="FullName" id="fullname" placeholder="Enter your full name" /> 
                    </div>
                    <div className="flex flex-col gap-5 lg:gap-1"> 
                        <div className="text-black transition duration-500 dark:text-white font-bold text-xs "> 
                            Your email 
                        </div> 
                        <input className="placeholder:dark:text-gray placeholder:text-gray placeholder:text-xs placeholder:font-bold rounded-sm text-black dark:bg-white dark:bg-opacity-20 bg-white dark:text-white placeholder:transition placeholder:duration-500 form-input" 
                        type="email" name="email" id="email" placeholder="Enter your email" /> 
                    </div>
                    <div className="flex flex-col gap-5 lg:gap-1"> 
                        <div className="text-black transition duration-500 dark:text-white font-bold text-xs "> 
                            Your Phone Number 
                        </div> 
                        <input className="placeholder:dark:text-gray placeholder:text-gray placeholder:text-xs placeholder:font-bold rounded-sm text-black dark:bg-white dark:bg-opacity-20 bg-white dark:text-white placeholder:transition placeholder:duration-500 form-input" 
                        type="number" name="PhoneNumber" id="PhoneNumber" placeholder="Enter your phone number" /> 
                    </div>
                    <div className="flex flex-col gap-5 lg:gap-1"> 
                        <div className="text-black transition duration-500 dark:text-white font-bold text-xs "> 
                            Messages 
                        </div> 
                        <textarea placeholder="What do you want to talk about?" name="Messages" id="Messages" cols="" rows="3" className="placeholder:dark:text-gray placeholder:text-gray placeholder:text-xs placeholder:font-bold rounded-sm text-black dark:bg-white dark:bg-opacity-20 bg-white dark:text-white placeholder:transition placeholder:duration-500 form-input"></textarea>
                    </div>
                    <div className="flex flex-col lg:gap-7 md:flex-row md:gap-5 lg:flex-row lg:self-center">
                        <TalkButton type="submit" text="Send the Message" className="" />
                    </div>
                </form>
                
            </div>
        </div>

     );
}
  
export default ContactForm;