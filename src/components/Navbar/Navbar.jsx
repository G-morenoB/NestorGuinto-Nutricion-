import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
       <FontAwesomeIcon icon={faAppleWhole} size="lg" style={{color: "rgb(0, 166, 62)",}} /> Nestor Guinto - Nutrición
      </div>

      <ul className="navbar-links">
        <li>
          <a href="#home_hero">Inicio</a>
        </li>
        <li>
          <a href="#experience">Servicios</a>
        </li>
        <li>
          <a href="#projects">Sobre Mi</a>
        </li>
        <li>
          <a href="#sobre-mi">Testimonios</a>
        </li>
        <li>
          <a href="#sobre-mi">Contacto</a>
        </li>
      </ul>

      <a className="navbar-btn" href="#contacto">
        Agendar cita
      </a>
    </nav>
  );
}

export default Navbar;