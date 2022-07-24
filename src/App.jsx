import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Clients from "./components/Clients"
import Services from "./components/Services"
import Teams from "./components/Teams"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="p-5 flex flex-col gap-5 w-full h-screen font-poppins">
      <Navbar />
      <Header />
      <Clients />
      <Services />
      <Teams />
      <Projects />
    </div>
  )
}
export default App
