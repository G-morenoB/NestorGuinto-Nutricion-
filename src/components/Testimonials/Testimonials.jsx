import "./Testimonials.css"
import TestimonialCard from "./TestimonialsCard.jsx";

function Testimonials() {
        const services = [  
           {
            stars: "⭐⭐⭐⭐⭐",
            description: "El mejor nutriólogo, recetas súper fáciles para adultos y niños muy completas. Siempre está al pendiente de ti y de todas tus dudas. ",
            name: "Ana Serna",
            service: "Control de peso",
            img: "../.././public/images/testimonial1.jpg",
           },
            {
            stars: "⭐⭐⭐⭐⭐",
            description: "Un nutriólogo muy bueno, las comídas muy ricas y para nada aburridas. Vez cambios en poco tiempo, te empiezas a sentir mejor y además está pendiente de ti respondiendo tus dudas.",
            name: "Leslie Peñaloza",
            img: "https://randomuser.me/api/portraits",
            service: "Nutrición deportiva",
           }, 
            {
            stars: "⭐⭐⭐⭐⭐",
            description: "Me encantan sus menús porque son muy completos, además la atención y el seguimiento es muy bueno siempre esta al pendiente de como te sientes y que necesitas",
            name: "Linett SG",
            img: "https://randomuser.me/api/portraits",
            service: "Control de peso",
           } 
        ];
    return (  
<section className="testimonials" id="testimonials">
    <h2>Testimonios de mis clientes</h2>
    <p>Testimonios reales de personas que han transformado su salud</p>

    <div className="testimonial-cards">
        {services.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            stars={testimonial.stars}
            description={testimonial.description}
            name={testimonial.name}
            service={testimonial.service}
            img={testimonial.img}

          />
        ))}
        </div>
</section>
    )
}

export default Testimonials;