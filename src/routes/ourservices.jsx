import Footer from "../components/Home/Footer";
import Header from "../ourservices/Header";
import Uidesign from "../ourservices/Uidesign";
import Navbar from "../components/Home/Navbar";
import ProcessCrad from "../components/cards/ProcessCrad";
import OurProcess from "../ourservices/Ourprocess";

const OurServices = () => {
    return ( 
        <div className="w-full flex bg-white dark:bg-dark transition duration-500 justify-center">
        <div className="flex flex-col w-full bg-white dark:bg-dark font-poppins transition duration-500 max-w-5xl">
          <div className="p-5 lg:p-0 flex flex-col gap-5 bg-white dark:bg-dark transition duration-500">
            <Navbar />
            <Header />
            <OurProcess />
            <ProcessCrad />
            <Uidesign />
          </div>
            <div className="z-10 flex flex-col gap-20 pt-5 bg-white dark:bg-dark transition duration-500 lg:pt-40">
              <Footer />
            </div>
        </div>
      </div>

     );
}
 
export default OurServices;