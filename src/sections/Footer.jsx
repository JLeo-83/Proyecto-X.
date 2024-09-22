import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
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
            href="https://www.linkedin.com/in/leo-garcia-ordinola-30291832a"
            target="_blank"
            className="w-1/2 h-1/2"
          >
            <img src="/assets/linkedin.svg" alt="Linkedin" />
          </a>
        </div>
      </div>
      <p className="text-white-500">@2024 Leandro. All rights reserved.</p>
    </section>
  );
};

export default Footer;