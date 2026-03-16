import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import { Facebook } from "lucide-react";

function Footer() {
    return (
        <footer className="footer">
            <div className="container-logo">
                <FontAwesomeIcon icon={faAppleWhole} size="lg" style={{color: "rgb(0, 166, 62)",}} /> Nestor Guinto - Nutrición
                <p>Transformando vidas a través de la nutrición personalizada y el bienestar integral.</p>
            </div>
            <div className="nav-container">
            <h4>Servicios</h4>
                <ul className="nav-links">
                    <li>
                    <a href="#home_hero">Inicio</a>
                    </li>
                    <li>
                    <a href="#services">Servicios</a>
                    </li>
                    <li>
                    <a href="#about">Sobre Mi</a>
                    </li>
                    <li>
                    <a href="#testimonials">Testimonios</a>
                    </li>
                </ul>
            </div>
            <div className="container-services">
             <h4>Servicios</h4>
                <p className="service">Consulta de nutrición personalizada</p>
                <p className="service">Cambio de hábitos</p>
                <p className="service">Planes alimenticios</p>
                <p className="service">Control de peso</p>    
                <p className="service">Nutrición deportiva</p>
                <p className="service">Seguimiento semanal online</p>
            </div>
            <div className="container-contact">
             <h4>Contacto</h4>
                <p>+52(55) 2575-7657</p>
                <p>contacto@nestorguinto.com</p>
                <p><Facebook color="#00A63E" />Nestor Guinto - Nutrición</p>
                <p>Coyuca de Benitez, Gro.</p>
                
            </div>

            <p className="footer__text">© 2024 Your Company. All rights reserved.</p>
        </footer>
    );
}   

export default Footer;