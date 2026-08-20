export const profile = {
  name: "Kevin R. Martínez Ojeda",
  handle: "Kevmart",
  role: "Ingeniero de Sistemas en formación",
  tagline: "Full-Stack Developer — Java/Spring, PHP/Laravel & JavaScript",
  location: "Sullana, Piura, Perú",
  email: "kevinmartinez130605@gmail.com",
  phone: "+51 988 656 424",
  whatsapp: "https://wa.me/51988656424",
  // TODO: reemplaza con tus URLs reales cuando las tengas
  linkedin: "#",
  github: "#",
  summary:
    "Ingeniero de Sistemas en formación en la Universidad César Vallejo, con experiencia construyendo software full-stack en Java, PHP, JavaScript, MySQL, SQL y Firebase. Actualmente me desempeño como QA Manual and Automation en Ensolvers, diseñando y automatizando pruebas con Playwright y Cypress, e integrando testing en pipelines de CI/CD junto a equipos Agile. Esta doble mirada —construir y validar software— se apoya en Git, GitHub y Postman para entregar soluciones frontend y backend más robustas, de principio a fin.",
};

export const skills = {
  Personal: [
    "Gestión de tiempo",
    "Liderazgo",
    "Comunicación",
    "Pensamiento crítico",
    "Multitarea",
  ],
  Profesional: [
    "Java (Spring)",
    "PHP (Laravel)",
    "JavaScript",
    "Tailwind CSS",
    "SQL / NoSQL",
    "Firebase",
    "APIs RESTful",
    "MVC",
    "Arquitectura Hexagonal",
    "Git & GitHub",
    "Postman / Bruno",
  ],
  "QA & Testing": [
    "Playwright",
    "Cypress",
    "Selenium",
    "Testing manual",
    "Diseño de casos de prueba",
    "CI/CD",
    "Jira",
    "Notion",
    "Agile / Scrum",
    "QA potenciado por IA",
  ],
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  bullets: string[];
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Ensolvers",
    role: "QA Manual and Automation",
    location: "Remoto · Internacional",
    period: "Dic. 2025 — Actualidad",
    current: true,
    bullets: [
      "Desarrollo y mantenimiento de pruebas automatizadas para aplicaciones web con Playwright y Cypress.",
      "Ejecución de pruebas funcionales, de regresión y exploratorias para asegurar la calidad del software.",
      "Gestión de incidencias en Jira y documentación de casos de prueba en Notion.",
      "Integración de pruebas automatizadas en pipelines de CI/CD junto a equipos Agile.",
      "Evaluación de herramientas de IA para optimizar la generación de casos de prueba.",
    ],
    stack: ["Playwright", "Cypress", "CI/CD", "Jira", "Notion"],
  },
  {
    company: "Devdatep Consulting",
    role: "Lead Backend",
    location: "Piura, Perú",
    period: "Jul. 2025 — Nov. 2025",
    current: false,
    bullets: [
      "Lideré el equipo de desarrollo backend, promoviendo productividad y buenas prácticas.",
      "Diseñé e implementé pruebas técnicas para la evaluación de nuevos candidatos.",
      "Colaboré en el despliegue, monitoreo y mantenimiento de proyectos internos.",
      "Diseño y desarrollo de endpoints para APIs RESTful, optimizando recursos clave del sistema.",
    ],
    stack: ["Java", "Spring", "REST APIs", "SQL"],
  },
  {
    company: "Segas Automotores",
    role: "Desarrollador Web",
    location: "Piura, Perú",
    period: "Ago. 2024 — Jun. 2025",
    current: false,
    bullets: [
      "Desarrollo de una plataforma e-commerce de repuestos y kits de conversión automotriz.",
      "Catálogo de productos, carrito de compras, gestión de pedidos e integración con WhatsApp.",
      "Implementación de roles de usuario diferenciados para clientes y administrador.",
    ],
    stack: ["PHP", "Laravel", "Tailwind CSS", "MySQL", "Livewire"],
  },
  {
    company: "Autónomo",
    role: "Freelance · Desarrollador independiente",
    location: "Piura, Perú",
    period: "Ene. 2024 — Actualidad",
    current: true,
    bullets: [
      "Diseño e implementación de sitios web, e-commerce y sistemas de gestión administrativa o ventas.",
      "Integración de soluciones de Inteligencia Artificial mediante consumo de APIs de LLMs y automatización de procesos.",
      "Gestión integral del ciclo de desarrollo: requerimientos, despliegue, mantenimiento y comunicación directa con clientes.",
      "Aprendizaje continuo de nuevas tecnologías para ofrecer soluciones modernas y escalables.",
    ],
    stack: ["Laravel", "PHP", "Java", "Tailwind CSS", "Flutter", "SQL/NoSQL"],
  },
];

export const education = {
  school: "Universidad César Vallejo",
  program: "Ingeniería de Sistemas",
  location: "Piura, Perú",
  period: "2022 — Actualidad",
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  source: string;
};

export const projects: Project[] = [
  {
    title: "E-commerce de repuestos automotrices",
    description:
      "Plataforma de venta de repuestos y kits de conversión con catálogo, carrito, gestión de pedidos, roles de cliente/administrador e integración directa con WhatsApp para el cierre de ventas.",
    tags: ["Laravel", "Livewire", "Tailwind CSS", "MySQL"],
    source: "Segas Automotores",
  },
  {
    title: "Automatización de QA potenciada por IA",
    description:
      "Suites de pruebas end-to-end con Playwright y Cypress, integradas a pipelines de CI/CD, con herramientas de IA para acelerar la generación de casos de prueba.",
    tags: ["Playwright", "Cypress", "CI/CD", "IA"],
    source: "Ensolvers",
  },
  {
    title: "APIs RESTful para operaciones internas",
    description:
      "Diseño y desarrollo de endpoints RESTful en Spring, con foco en arquitectura limpia y buenas prácticas de equipo para optimizar recursos clave del sistema.",
    tags: ["Java", "Spring", "REST", "Arquitectura Hexagonal"],
    source: "Devdatep Consulting",
  },
  {
    title: "Soluciones a medida para clientes independientes",
    description:
      "Sitios web, e-commerce y sistemas de gestión administrativa construidos de punta a punta, incluyendo automatización de procesos con APIs de modelos de lenguaje.",
    tags: ["Laravel", "Flutter", "Firebase", "LLM APIs"],
    source: "Freelance",
  },
];
