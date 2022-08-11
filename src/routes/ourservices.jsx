import Footer from "../components/Home/Footer";
import CommonHeader from "../components/CommonHeader";
import Uidesign from "../ourservices/Uidesign";
import Navbar from "../components/Home/Navbar";
import ProcessCrad from "../components/cards/ProcessCrad";
import OurProcess from "../ourservices/Ourprocess";
import { motion } from "framer-motion"
import TalkButton from "../components/buttons/TalkButton";
import CheckProjectButton from "../components/buttons/CheckProjectButton";


const OurServices = () => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }
     return (
      <div 
      className="w-full flex bg-white dark:bg-dark transition duration-500 justify-center">
        <div className="flex flex-col w-full bg-white dark:bg-dark font-poppins transition duration-500 max-w-5xl">
          <Navbar />
          <motion.div
            variants={variants}
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: 'linear' }} // Set the transition to linear 
            className="p-5 lg:p-0 flex flex-col gap-5 bg-white dark:bg-dark transition duration-500">
                <CommonHeader title="Our Services" bigtitle="Services We offer" content="With  Our Awesome team we offre a variety of services from UI/UX design to Security Consulting. Our Goal is to help you on your journey to create your special product"/>
                <div className="flex flex-col gap-5 md:flex-row justify-center">
                  <TalkButton text="Let's talk" className='w-[100%]' />
                  <CheckProjectButton text="Check our Projects" />
              </div>
                <OurProcess />
                <ProcessCrad />
                <Uidesign />
          </motion.div>
            <div className="z-10 flex flex-col gap-20 pt-5 bg-white dark:bg-dark transition duration-500 ">
              <Footer />
            </div>
        </div>
      </div>
    )

}
 
export default OurServices;