import "./Hero.css";

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
            <a href="#contacto" className="btn-primary">
              Consulta 
            </a>

            <a href="#servicios" className="btn-secondary">
              Ver Servicios
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="../../public/images/hero.jpg" alt="Nutricionista"/>
        </div>

      </div>

    </section>
  );
}

export default Hero;