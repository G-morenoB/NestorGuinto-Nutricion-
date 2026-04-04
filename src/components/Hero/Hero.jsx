import "./Hero.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Hero() {
  return (
    <section className="hero" id="home_hero">

      <div className="hero-container">

        <div className="hero-text">
          <h1>
            Transforma Tu Salud Con Una 
            <span> Nutrición Adecuada</span>
          </h1>

          <p>
            Planes personalizados de nutrición diseñados para ayudarte a
            alcanzar tus metas de salud y bienestar.
          </p>

          <div className="hero-buttons">
            <a 
              className="btn-primary"
              href={`https://wa.me/5525757657?text=Hola Néstor, me gustaría agendar una consulta de nutrición. ¿Tienes disponibilidad?`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> Consulta 
            </a>

            <a href="#services" className="btn-secondary">
              Ver Servicios
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-img-wrapper">
            <img src="/images/HeroImg1.jpeg" alt="Nutricionista" />
            <div className="hero-quote">
              <p>"¿Sabías que el momento en que empiezas a cuidar tu alimentación puede cambiar el futuro de tu salud?"</p>
              <span>— Néstor Guinto, Nutriólogo</span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;
