import Footer from "../components/Home/Footer";
import Header from "../ourservices/Header";
import Uidesign from "../ourservices/Uidesign";
import Navbar from "../components/Home/Navbar";
import ProcessCrad from "../components/cards/ProcessCrad";
import OurProcess from "../ourservices/Ourprocess";
import { motion } from "framer-motion"


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
                <Header />
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