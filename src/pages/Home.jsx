import AboutUs from "../components/AboutUs"
import CTA from "../components/CTA"
import Footer from "../components/Footer"
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
      <Footer />
    </main>
  )
}

export default Home