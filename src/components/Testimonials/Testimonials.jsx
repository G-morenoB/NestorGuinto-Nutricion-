import "./Testimonials.css"
import TestimonialCard from "./TestimonialsCard.jsx";

function Testimonials() {
        const services = [  
           {
            stars: "⭐⭐⭐⭐⭐",
            description: "Gracias a la guía de esta nutricionista, logré perder 10 kilos en 3 meses y mejorar mi salud en general. ¡Recomendada al 100%!",
            name: "María López",
            service: "Pérdida de peso",
            img: "../.././public/images/testimonial1.jpg",
           },
            {
            stars: "⭐⭐⭐⭐⭐",
            description: "Gracias a la guía de esta nutricionista, logré perder 10 kilos en 3 meses y mejorar mi salud en general. ¡Recomendada al 100%!",
            name: "María López",
            img: "https://randomuser.me/api/portraits",
            service: "Pérdida de peso",
           }, 
            {
            stars: "⭐⭐⭐⭐⭐",
            description: "Gracias a la guía de esta nutricionista, logré perder 10 kilos en 3 meses y mejorar mi salud en general. ¡Recomendada al 100%!",
            name: "María López",
            img: "https://randomuser.me/api/portraits",
            service: "Pérdida de peso",
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