import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import App from '../App'
import OurServices from '../routes/ourservices'
import OurProjects from '../routes/ourprojects'
import WhoAreWe from '../routes/whoarewe'
import ContactUs from '../routes/contactus'
import { AnimatePresence } from "framer-motion"

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
      <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<App />}/>
            <Route path="whoarewe" element={<WhoAreWe />}/>
            <Route path="ourservices" element={<OurServices />}/>
            <Route path="ourprojects" element={<OurProjects />}/>
            <Route path="contactus" element={<ContactUs />}/>
          </Routes>
      </AnimatePresence>
    );
}
 
export default AnimatedRoutes;