import AboutUs from "../components/AboutUs"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
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
    </main>
  )
}

export default Home