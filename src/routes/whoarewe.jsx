import Footer from "../components/Home/Footer";
import Header from "../components/whoarewe/Header";
import Navbar from "../components/Home/Navbar";
import Theteam from "../components/whoarewe/Theteam";

const WhoAreWe = () => {
    return (
         <div className="w-full flex bg-white dark:bg-dark transition duration-500 justify-center">
         <div className="flex flex-col w-full bg-white dark:bg-dark font-poppins transition duration-500 max-w-5xl">
           <div className="p-5 lg:p-0 flex flex-col gap-5 bg-white dark:bg-dark transition duration-500">
             <Navbar />
             <Header />
             <Theteam />
           </div>
             <div className="z-10 flex flex-col gap-20 pt-5 bg-white dark:bg-dark transition duration-500 lg:pt-40">
               <Footer />
             </div>
         </div>
       </div>

    );
}
 
export default WhoAreWe;
