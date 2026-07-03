export const navLinks = [
  {
    id: 1,
    name: "Inicio",
    href: "#home",
  },
  {
    id: 2,
    name: "Sobre mí",
    href: "#about",
  },
  {
    id: 3,
    name: "Proyectos",
    href: "#work",
  },
  {
    id: 4,
    name: "Contacto",
    href: "#contact",
  },
];
export const clientReviews = [
  {
    id: 1,
    name: "Aprendiendo Next.js y Tailwind CSS",
    position: "Proyecto actual",
    img: "assets/review1.png",
    review:
      "Actualmente estoy aprendiendo a usar Next.js y Tailwind CSS para construir aplicaciones web modernas y responsivas. Este proyecto me está ayudando a comprender los fundamentos del desarrollo y diseño frontend, enfocándome en escribir código limpio y mantenible.",
  },
  {
    id: 2,
    name: "Explorando el desarrollo Backend",
    position: "Autodidacta",
    img: "assets/review2.png",
    review:
      "A medida que me adentro en el desarrollo backend, voy adquiriendo experiencia en la configuración de bases de datos, manejo de la lógica del lado del servidor y seguridad. Mi objetivo es construir una base sólida para crear aplicaciones web escalables y seguras.",
  },
  {
    id: 3,
    name: "Proyectos personales",
    position: "Práctica y crecimiento",
    img: "assets/review3.png",
    review:
      "A través de proyectos propios, como una aplicación de tareas sencilla y una plataforma de comercio electrónico, aplico lo aprendido en escenarios del mundo real. Estos proyectos me ayudan a mejorar mis habilidades tanto en frontend como en backend.",
  },
  {
    id: 4,
    name: "Aprendizaje continuo",
    position: "Educación constante",
    img: "assets/review4.png",
    review:
      "Me dedico a mejorar mis habilidades en desarrollo web explorando nuevas tecnologías y frameworks. Cada proyecto que realizo me permite potenciar mi capacidad para resolver problemas y profundizar en las mejores prácticas de desarrollo.",
  },
];

export const myProjects = [
  {
    title: "Letras y Alabanzas - Centro Evangélico Vida Nueva",
    desc: "Sitio web para recopilar y compartir las letras de las alabanzas del Centro Evangélico Vida Nueva. Permite buscar canciones por título, artista o letra, reproducir videos de YouTube, y ver las letras en modo proyección para cultos.",
    subdesc:
      "Construido con HTML, CSS y JavaScript puro. Incluye modo oscuro/claro, PWA instalable, reproductor de audio personalizado y búsqueda en tiempo real.",
    href: "https://letras-vidanueva.netlify.app",
    texture: "/textures/project/project1.mp4ñ",
    logo: "/assets/project-logo1.webp",
    logoStyle: {
      backgroundColor: "#ffffff",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      { id: 1, name: "HTML", path: "/assets/html.svg" },
      { id: 2, name: "CSS", path: "assets/css.svg" },
      { id: 3, name: "JavaScript", path: "/assets/javascript.svg" },
    ],
  },
  {
    title: "Menú Básico Responsivo",
    desc: "Menú de navegación responsivo con diseño limpio y adaptable a cualquier tamaño de pantalla. Incluye animaciones suaves y una experiencia de usuario intuitiva tanto en móvil como en escritorio.",
    subdesc:
      "Desarrollado con HTML, CSS y JavaScript. Demuestra dominio de diseño responsivo, flexbox y manejo del DOM.",
    href: "https://menubasicoresponsivo.netlify.app",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      { id: 1, name: "HTML", path: "/assets/html.svg" },
      { id: 2, name: "CSS", path: "assets/css.svg" },
      { id: 3, name: "JavaScript", path: "/assets/javascript.svg" },
    ],
  },
  {
    title: "Landing Page con Efecto Parallax",
    desc: "Landing page moderna con un banner principal que implementa efecto parallax al hacer scroll. Diseño atractivo, completamente responsivo y con animaciones fluidas que mejoran la experiencia visual del usuario.",
    subdesc:
      "Construida con HTML, CSS y JavaScript. El efecto parallax está implementado de forma nativa sin librerías externas, optimizado para rendimiento.",
    href: "https://efectoparallaxresponsive.netlify.app",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "rgba(231, 81, 22, 0.81)",
      background:
        "linear-gradient(0deg, #f5c16050, #f5a36050), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(221, 212, 208, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px  rgba(231, 81, 22, 0.59)",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
        { id: 1, name: "HTML", path: "/assets/html.svg" },
      { id: 2, name: "CSS", path: "assets/css.svg" },
      { id: 3, name: "JavaScript", path: "/assets/javascript.svg" },
    ],
  },
  {
    title: "Portafolio 3D Personal",
    desc: "Portafolio personal interactivo con gráficos 3D, animaciones fluidas y diseño moderno. Muestra proyectos, habilidades y experiencia de forma visualmente impactante con modelos 3D animados.",
    subdesc:
      "Construido con React.js, Three.js, React Three Fiber, GSAP y Tailwind CSS. Desplegado en Netlify con integración continua desde GitHub.",
    href: "https://proyectotree.netlify.app",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "TailwindCSS", path: "assets/tailwindcss.png" },
      { id: 3, name: "Three.js", path: "/assets/Three.js.png" },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "React",
    pos: "Aprendiendo el Framework",
    duration: "2024 - Presente",
    title:
      "Actualmente estoy aprendiendo React para construir interfaces de usuario dinámicas. Este framework me permite crear aplicaciones web interactivas y disfruto el proceso de dominar la arquitectura basada en componentes.",
    icon: "/assets/react.png",
    animation: "clapping",
  },
  {
    id: 2,
    name: "Three.js",
    pos: "Librería JavaScript 3D",
    duration: "2024 - Presente",
    title:
      "Estoy explorando Three.js para incorporar gráficos 3D en mi proyectos web. Esta librería me ayuda a comprender los fundamentos del renderizado en 3D y cómo crear experiencias visuales atractivas en la web.",
    icon: "/assets/Three.js.png",
    animation: "salute",
  },
  {
    id: 3,
    name: "GitHub",
    pos: "Herramienta de Control de Versiones",
    duration: "2023 - Presente",
    title:
      "Uso GitHub para gestionar mis proyectos y colaborar con otros. Aprender control de versiones ha sido esencial para mantener mi código organizado y realizar un seguimiento de los cambios de manera efectiva.",
    icon: "/assets/github.svg",
    animation: "victory",
  },
];
