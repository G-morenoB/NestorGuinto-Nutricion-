import React from "react";
import "./Contact.css";

const WHATSAPP_NUMBER = "5525757657"; 
const WHATSAPP_MSG = encodeURIComponent(
  "Hola Néstor, me gustaría agendar una consulta de nutrición. ¿Tienes disponibilidad?"
);

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/nutriologonestorguinto?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    bg: "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6.162c-1.205 0-2.162-.957-2.162-2.162s.957-2.162 2.162-2.162 2.162.957 2.162 2.162-.957 2.162-2.162 2.162zM18.406 6.594a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100063775314183",
    bg: "#1877F2",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

function Contact() {
  return (
    <section className="cs-root" id="contacto">


      <div className="cs-hero">
        <div className="cs-eyebrow">
          <span className="cs-pulse" />
          Consultas disponibles hoy
        </div>
        <h2 className="cs-hero-title">
          Agenda tu consulta con <span>Néstor Guinto</span>
        </h2>
        <p className="cs-hero-sub">
          Elige cómo contactarme — respondo el mismo día en horario de atención.
        </p>
      </div>

      {/* ── TRUST STRIP ── */}
      <div className="cs-trust">
        <div className="cs-trust-item">
          <svg width="14" height="14" fill="none" stroke="#c8e6c9" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          +100 pacientes atendidos
        </div>
        <div className="cs-trust-item">
          <svg width="14" height="14" fill="none" stroke="#c8e6c9" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
          </svg>
          Respuesta en menos de 2 hrs
        </div>
        <div className="cs-trust-item">
          <svg width="14" height="14" fill="none" stroke="#c8e6c9" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          Presencial y en línea
        </div>
      </div>

      {/* ── CARDS ── */}
      <div className="cs-grid">

        {/* WhatsApp */}
        <div className="cs-card cs-wa-card">
          <div className="cs-wa-top">
            <p className="cs-label">Contacto directo</p>
            <p className="cs-wa-number">+52 (552) 575-7657</p>
            <p className="cs-wa-sub">Coyuca de Benítez, Gro. · También atiendo en línea</p>
          </div>
          <a
            className="cs-wa-btn"
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Enviar mensaje por WhatsApp
          </a>
          <div className="cs-wa-response">
            <svg width="12" height="12" fill="none" stroke="#2e7d32" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            Tiempo de respuesta promedio: menos de 2 horas
          </div>
        </div>

        {/* Horario + Ubicación */}
        <div className="cs-info-row">
          <div className="cs-card cs-small-card">
            <div className="cs-card-header">
              <div className="cs-icon-circle" style={{ background: "#e8f5e9" }}>
                <svg width="16" height="16" fill="none" stroke="#2e7d32" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span className="cs-label">Horarios</span>
            </div>
            {[
              { day: "Lun – Vie", time: "9:00 – 19:00" },
              { day: "Sábado",    time: "9:00 – 14:00" },
              { day: "Domingo",   time: null },
            ].map(({ day, time }) => (
              <div className="cs-hours-row" key={day}>
                <span className="cs-hours-day">{day}</span>
                {time
                  ? <span className="cs-hours-time">{time}</span>
                  : <span className="cs-hours-time cs-closed">Cerrado</span>
                }
              </div>
            ))}
          </div>

          <div className="cs-card cs-small-card">
            <div className="cs-card-header">
              <div className="cs-icon-circle" style={{ background: "#fce4ec" }}>
                <svg width="16" height="16" fill="none" stroke="#c62828" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span className="cs-label">Ubicación</span>
            </div>
            <p className="cs-location-addr">Coyuca de Benítez,<br />Guerrero, México</p>
            <a
              className="cs-map-link"
              href="https://www.google.com/maps/place/C.+20+de+Noviembre+4,+Centro,+20140+Coyuca+de+Ben%C3%ADtez,+Gro./@17.0055958,-100.089768,16.94z/data=!4m6!3m5!1s0x85cae2ceef47bff7:0x7e5b3ecd7c819537!8m2!3d17.0075033!4d-100.0883358!16s%2Fg%2F11c0pwyhxc?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="12" height="12" fill="none" stroke="#2e7d32" strokeWidth="2" viewBox="0 0 24 24">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
              Ver en Maps
            </a>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="cs-card cs-social-card">
          <div className="cs-card-header">
            <div className="cs-icon-circle" style={{ background: "#f3e5f5" }}>
              <svg width="16" height="16" fill="none" stroke="#7b1fa2" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </div>
            <span className="cs-label">Sígueme en redes</span>
          </div>
          <div className="cs-social-grid">
            {socials.map(({ name, href, bg, icon }) => (
              <a
                key={name}
                className="cs-social-btn"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="cs-sicon" style={{ background: bg }}>{icon}</div>
                {name}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* ── CTA FINAL ── */}
      <div className="cs-cta">
        <h3>¿Listo para transformar tu salud?</h3>
        <p>Primera consulta de valoración — sin compromiso</p>
        <a
          className="cs-cta-btn"
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2.5">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Agendar consulta ahora
        </a>
      </div>

      <p className="cs-footer-note">
        danniel.guinto@gmail.com · Coyuca de Benítez, Guerrero · Atención presencial y en línea
      </p>

    </section>
  );
}
export default Contact;