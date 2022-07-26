import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Clients from "./components/Clients"
import Services from "./components/Services"
import Teams from "./components/Teams"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Testimonial from "./components/Testimonial"

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
