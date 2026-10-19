import AboutUs from "../components/AboutUs"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Process from "../components/Process"
import Projects from "../components/Projects"
import Services from "../components/Services"

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <AboutUs />
      <Process />
    </main>
  )
}

export default Home