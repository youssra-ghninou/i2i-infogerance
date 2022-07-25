import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Clients from "./components/Clients"
import Services from "./components/Services"
import Teams from "./components/Teams"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="flex flex-col gap-5 w-full h-screen font-poppins">
      <div className="p-5 flex flex-col gap-5">
        <Navbar />
        <Header />
        <Clients />
        <Services />
        <Teams />
        <Projects />
      </div>
        <div className="h">
          <Footer />
        </div>
    </div>
  )
}
export default App
