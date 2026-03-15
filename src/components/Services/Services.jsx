import ServiceCard from "./ServiceCard";
import "./Services.css";
import { Apple, HeartPlus } from "lucide-react";

function Services() {
    const services = [
    {
      icon: <Apple color="#00A63E" />,
      title: "Consulta de nutrición personalizada",
      description: "Planes adaptados a tu estilo de vida y objetivos."
    },
     {
      title: "Cambio de hábitos",
      description: "Aprende a mejorar tu alimentación."
    },
    {
      title: "Planes alimenticios",
      description: "Análisis de composición corporal."
    },
    {
      icon:<HeartPlus color="#00A63E" />,
      title: "Control de peso",
      description: "Logra tu peso ideal de forma saludable."
    },
    {
      title: "Nutrición deportiva",
      description: "Optimiza tu rendimiento deportivo."
    },
    {
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