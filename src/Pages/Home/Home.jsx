import Navbar from "../../components/Navbar/Navbar"
import Hero from "../../components/Hero/Hero"
import Services from "../../components/Services/Services"
import About from "../../components/About/About"
import Testimonials from "../../components/Testimonials/Testimonials"
import Contact from "../../components/Contact/Contact"


function Home() {
  return (
    <>
      <Navbar />
       <Hero /> 
      <Services/>
     <About/>
       <Testimonials />
      <Contact />
    </>
  )
}

export default Home