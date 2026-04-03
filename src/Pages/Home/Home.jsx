import Navbar from "../../components/Navbar/Navbar"
import Hero from "../../components/Hero/Hero"
import Services from "../../components/Services/Services"
import About from "../../components/About/About"
import Testimonials from "../../components/Testimonials/Testimonials"
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm"
import Contact from "../../components/Contact/Contact"
import Footer from "../../components/Footer/Footer"


function Home() {
  return (
    <>
      <Navbar />
       <Hero /> 
      <Services/>
     <About/>
       <Testimonials />
      <AppointmentForm />
      <Contact />
      <Footer />

    </>
  )
}

export default Home