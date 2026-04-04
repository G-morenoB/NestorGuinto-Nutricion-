import "./Testimonials.css"
import TestimonialCard from "./TestimonialsCard.jsx";

function Testimonials() {
        const services = [  
           {
            stars: "⭐⭐⭐⭐⭐",
            description: "Sus planes nutricionales que se adaptan muy bien a tu ritmo de vida ... excelente nutriólogo",
            name: "María López",
            service: "Control de peso",
            img: "../.././public/images/testimonial1.jpg",
           },
            {
            stars: "⭐⭐⭐⭐⭐",
            description: "Excelente atención, profesional, у calidez humana, 100% recomendable.",
            name: "Juan Pérez",
            img: "https://randomuser.me/api/portraits",
            service: "Nutrición deportiva",
           }, 
            {
            stars: "⭐⭐⭐⭐⭐",
            description: "Me encantan sus menús porque son muy completos, además la atención y el seguimiento es muy bueno siempre esta al pendiente de como te sientes y quenecesitas",
            name: "Esther Cruz",
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