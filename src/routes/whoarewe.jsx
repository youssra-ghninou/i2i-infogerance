import Footer from "../components/Home/Footer";
import CommonHeader from "../components/CommonHeader";
import Navbar from "../components/Home/Navbar";
import Theteam from "../components/whoarewe/Theteam";
import { motion } from "framer-motion"
import TalkButton from "../components/buttons/TalkButton";
import CheckServicesButton from "../components/buttons/CheckServicesButton";
import { Link } from "react-router-dom";


const WhoAreWe = () => {
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
              <CommonHeader title="About Us" bigtitle="What we do is what make us Who we are" content="DigitUx is a Digital agencay founded 2022, that create User Centred Product that help her client to evolve ,our core idealogy is Perfection , our goal is to make usefull and easy to use products And help people to grow their business."/>
              <div className="flex flex-col gap-5 md:flex-row justify-center mb-10 mt-5">
                <Link to='/contactus'><TalkButton text="Lets talk" className='w-[100%]' /></Link>
                <CheckServicesButton text="Check our Services" />
              </div>
              <Theteam />
          </motion.div>
            <div className="z-10 flex flex-col gap-20 bg-white dark:bg-dark transition duration-500 lg:mt-40">
              <Footer />
            </div>
        </div>
      </div>
    )
  
}
 
export default WhoAreWe;
