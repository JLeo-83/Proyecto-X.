import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Términos y Condiciones</p>
<p>|</p>
<p>Política de Privacidad</p>
      </div>
      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://github.com/JLeo-83"
            target="_blank"
            className="w-1/2 h-1/2"
          >
            <img src="/assets/github.svg" alt="GitHub" />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.facebook.com/profile.php?id=61555502026909"
            target="_blank"
            className="w-1/2 h-1/2"
          >
            <img src="/assets/facebook.svg" alt="Facebook" />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.instagram.com/leo_garcia0rdinola/?hl=es-la"
            target="_blank"
            className="w-1/2 h-1/2"
          >
            <img src="/assets/instagram.svg" alt="Instagram" />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/jesus-leandro-g-21263a383"
            target="_blank"
            className="w-1/2 h-1/2"
          >
            <img src="/assets/linkedin.svg" alt="Linkedin" />
          </a>
        </div>
      </div>
      <p className="text-white-500">© 2026 Leandro García. Todos los derechos reservados.</p>
    </section>
  );
};

export default Footer;