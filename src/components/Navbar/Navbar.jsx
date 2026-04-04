import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
       <img className="navbar-logo-img" src="/images/logo.png" alt="Logo" />
      </div>

      <ul className="navbar-links">
        <li>
          <a href="#home_hero">Inicio</a>
        </li>
        <li>
          <a href="#services">Servicios</a>
        </li>
        <li>
          <a href="#about">Sobre mi</a>
        </li>
        <li>
          <a href="#testimonials">Testimonios</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>

      <a className="navbar-btn" href="#contacto">
        Agendar cita
      </a>
    </nav>
  );
}

export default Navbar;