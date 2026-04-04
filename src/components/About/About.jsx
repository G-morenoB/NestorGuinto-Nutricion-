import "./About.css";
import { Award, CalendarCheck2,Users,HeartPlus } from "lucide-react";

const stats = [
  {
    icon: (
      <Award color="#2e7d32" />
    ),
    value: "Certificado Profesional",
    label: "Cédula Profesional",
  },
  {
    icon: (
      <HeartPlus color="#2e7d32" />
    ),
    value: "100+ Pacientes",
    label: "Resultados exitosos",
  },
  {
    icon: (
      <CalendarCheck2 color="#2e7d32" />
    ),
    value: "10+ Años",
    label: "De experiencia",
  },
  {
    icon: (
      <Users color="#2e7d32" />
    ),
    value: "Enfoque Holístico",
    label: "Salud integral",
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-image">
          <img src="../../public/images/SobreMi.jpeg" alt="Néstor Guinto Nutriólogo" />
        </div>

        <div className="about-text">
          <h2>Sobre mi</h2>
          <p>
            Soy Néstor Guinto, nutriólogo egresado de la Universidad Tecnológica de México.
            Mi formación y experiencia se han enfocado en el área de la nutrición clínica y
            la promoción de hábitos alimenticios que favorezcan la salud y el bienestar.
          </p>
          <p>
            Mi objetivo como profesional es acompañar a cada paciente en el proceso de mejorar
            su salud mediante una alimentación equilibrada y personalizada, basada en evidencia
            científica y adaptada a su estilo de vida.
          </p>

          <div className="about-stats">
            {stats.map((s) => (
              <div className="about-stat" key={s.value}>
                <div className="about-stat-icon">{s.icon}</div>
                <div className="about-stat-text">
                  <p className="about-stat-value">{s.value}</p>
                  <p className="about-stat-label">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
