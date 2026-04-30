import ServiceCard from "./ServiceCard";
import "./Services.css";
import { Apple, HeartPlus,Dumbbell, BookHeart, CalendarCheck, Users } from "lucide-react";
import { useEffect } from "react";

function Services() {
  useEffect(() => {
  const cards = document.querySelectorAll(".service-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));

  return () => observer.disconnect();
}, []);

    const services = [
    {
      icon: <Users color="#00A63E" />,
      title: "Consulta de nutrición personalizada",
      description: "Planes adaptados a tu estilo de vida y objetivos."
    },
     {
      icon: <Apple color="#00A63E" />,
      title: "Cambio de hábitos",
      description: "Aprende a mejorar tu alimentación."
    },
    {
      icon:<BookHeart color="#00A63E" />,
      title: "Planes alimenticios",
      description: "Análisis de composición corporal."
    },
    {
      icon:<HeartPlus color="#00A63E" />,
      title: "Control de peso",
      description: "Logra tu peso ideal de forma saludable."
    },
    {
      icon: <Dumbbell color="#00A63E" />,
      title: "Nutrición deportiva",
      description: "Optimiza tu rendimiento deportivo."
    },
    {
      icon: <CalendarCheck color="#00A63E" />,
      title: "Seguimiento semanal online",
      description: "Consultas nutricionales a distancia."
    }
   
  ];

  return (
<section className="services" id="services">

    <h2>Mis servicios</h2>
    <p className="PDescript">Elige un estilo de vida saludable.</p>

    <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
 
  <section>

  </section>
  </section>
  );
}
export default Services;