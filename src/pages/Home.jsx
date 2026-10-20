import AboutUs from "../components/AboutUs"
import CTA from "../components/CTA"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Process from "../components/Process"
import Projects from "../components/Projects"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <AboutUs />
      <Process />
      <Testimonials />
      <CTA />
    </main>
  )
}

export default Home