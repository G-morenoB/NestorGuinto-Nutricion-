import "./Contact.css";
import { Phone,Mail,MapPin } from "lucide-react";


function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // honeypot anti-bot
    if (formData.get("company")) {
      return;
    }

    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message")
    };

    console.log(data);
  };

  return (
    <section className="contact" id="contact">

      <h2>Agendar tu consulta</h2>
      <p className="p1">Contáctame para agendar una cita</p>

      <div className="contact-container">

        <form className="contact-form" onSubmit={handleSubmit}>

          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="fullName"
            placeholder="Tu nombre"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Tu@email.com"
            required
          />

          <label htmlFor="phone">Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            placeholder="5551234567"
            required
          />

          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            placeholder="Cuéntame sobre tus objetivos"
            maxLength="500"
            required
          ></textarea>

          {/* campo oculto anti bots */}
          <input type="text" name="company" style={{display:"none"}} />

          <button type="submit">Agendar cita</button>

        </form>

        <div className="contact-right"> 
            <div className="contact-info">
                 <h3>Información de contacto</h3> 
                 <p className="info"><Mail color="#00A63E" /><strong>Email:</strong></p> 
                 <p className="info2">info@nutricion.com</p>
                 <p className="info"><Phone color="#00A63E" /><strong>Teléfono: </strong></p> 
                 <p className="info2">+52 (552)-575-7657</p>
                 <p className="info"><MapPin color="#00A63E" /><strong>Ubicación: </strong></p> 
                <p className="info2">Coyuca de Benitez, Gro.</p>
            </div> 
            <div className="opening-hours">

              <h3>Horario de Atención</h3>

              <div className="hours-row">
                <span>Lunes - Viernes</span>
                <span>9:00 AM - 7:00 PM</span>
              </div>

              <div className="hours-row">
                <span>Sábado</span>
                <span>9:00 AM - 2:00 PM</span>
              </div>

              <div className="hours-row">
                <span>Domingo</span>
                <span>Cerrado</span>
              </div>

            </div>
             <div className="img-contact"> 
                <img src="../../public/images/contact-img1.jpeg"  alt="NestorGuinto-Nutrición" className="img"/> 
            </div>
        </div>

      </div>

    </section>
  );
}

export default Contact;