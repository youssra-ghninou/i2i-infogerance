import Navbar from "./components/Home/Navbar"
import Header from "./components/Home/Header"
import Clients from "./components/Home/Clients"
import Services from "./components/Home/Services"
import Teams from "./components/Home/Teams"
import Projects from "./components/Home/Projects"
import Footer from "./components/Home/Footer"
import Testimonial from "./components/Home/Testimonial"

function App() {
  return (
    <div className="w-full flex bg-white dark:bg-dark transition duration-500 justify-center">
      <div className="flex flex-col w-full bg-white dark:bg-dark font-poppins transition duration-500 max-w-5xl">
        <div className="p-5 flex flex-col gap-5 bg-white dark:bg-dark transition duration-500">
          <Navbar />
          <Header />
          <Clients />
          <Services />
          <Teams />
          <Projects />
        </div>
          <div className="z-10 flex flex-col gap-20 pt-5 bg-white dark:bg-dark transition duration-500 lg:pt-40">
            <Testimonial />
            <Footer />
          </div>
      </div>
    </div>
  )
}
export default App
