import Navbar from "../../components/Navbar/Navbar"
import Hero from "../../components/Hero/Hero"
import Services from "../../components/Services/Services"
import About from "../../components/About/About"
import Testimonials from "../../components/Testimonials/Testimonials"
import Contact from "../../components/AppointmentForm/Contact"
//import Footer from "../components/Footer/Footer.jsx"

function Home() {
  return (
    <>
      <Navbar />
       <Hero /> 
      <Services/>
     <About/>
       <Testimonials />
      <Contact />
      {/*<Footer /> */
      }
      
    </>
  )
}

export default Home