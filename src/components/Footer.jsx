import { IoIosSend } from 'react-icons/io';

const Footer = () => {
    return (
        <div className="bg-gray px-2 -z-10 py-8 flex items-center gap-5 justify-center">
            <div className="flex-1 flex flex-col gap-5">
                <div className="text-primary font-bold text-4xl">
                    I2I-Info
                </div>
                <div className="text-dark font-normal text-sm">
                    DigitUx is a Digital agencay that create User centred Product that help her client to evolve
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-5">
                <div className="text-dark font-semibold text-lg">
                    Get in youch with Us
                </div>
                <div className="text-dark font-normal text-sm text-justify">
                Need Answers? Need help ? Just email us 
                </div>
                <form action="" className='flex items-center'>
                    <input className='bg-white rounded-sm relative w-full text-sm text-left p-3 text-gray' type="submit" value="Your email" />
                    <div className="absolute right-6 text-primary">
                        <IoIosSend />   
                    </div>            
                </form>
            </div>
        </div>
    );
}
 
export default Footer;