import "./About.css";

function About() {
  return (
    <section className="about" id="about">
        <div className="about-container">
        <div className="about-image">
            <img src="../../public/images/SobreMi.jpeg" alt="Nutricionista"/>
                </div>
        <div className="about-text">
            <h2>Sobre mi</h2>
            <p>
                Soy Néstor Guinto, nutriólogo egresado de la Universidad Tecnológica de México. Mi formación y experiencia
                se han enfocado en el área de la nutrición clínica y la promoción de hábitos alimenticios que favorezcan
                la salud y el bienestar.</p>
                
                <p>
                Mi objetivo como profesional es acompañar a cada paciente en el proceso de mejorar su salud mediante una 
                alimentación equilibrada y personalizada, basada en evidencia científica y adaptada a su estilo de vida.                
                </p>
                </div>
        </div>
        </section>
  );
}
export default About;