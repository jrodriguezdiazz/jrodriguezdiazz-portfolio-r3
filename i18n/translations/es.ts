const es = {
  navigation: {
    about: "Sobre Mí",
    experience: "Experiencia",
    projects: "Proyectos",
    contact: "Contacto",
    resume: "Currículum",
    downloadResume: "Descargar Currículum",
    toggleMenu: "Alternar Menú",
  },
  page: {
    workExperience: "Experiencia Laboral",
    projects: "Proyectos",
    getInTouch: "Ponte en Contacto",
  },
  hero: {
    name: "Jorge Rodríguez",
    title: "Ingeniero de Software Senior",
  },
  bio: {
    intro:
      "Soy un {role} con más de {years} años creando sistemas full-stack a escala empresarial en salud, medios y telecomunicaciones. Especializado en interfaces con React, TypeScript y Flutter, backends con Node.js y GraphQL, y arquitecturas cloud compatibles con GDPR y HIPAA; traduciendo constantemente objetivos de producto y negocio en funcionalidades lanzadas que reducen latencia, aceleran la velocidad de despliegue y resisten en producción. Me siento cómodo asumiendo entregables complejos entre equipos de extremo a extremo, desde diseño de APIs y profiling de rendimiento hasta rollout progresivo con LaunchDarkly.",
    outro:
      "Mi enfoque proactivo para resolver problemas y mi compromiso con el éxito del equipo han impactado positivamente tanto mis proyectos como a mis colegas. También aporto experiencia en plataformas cloud, microservicios y frameworks modernos de JavaScript, e integro herramientas de ingeniería asistida por IA—Claude Code, Cursor AI, GitHub Copilot y OpenAI Codex—en mi flujo diario para acelerar entregas, pruebas y calidad del código sin recortar estándares. Disfruto mentorizar ingenieros junior, optimizar el rendimiento del sistema y entregar soluciones innovadoras en múltiples dominios.",
  },
  skills: {
    frontendTitle: "Frontend",
    frontendDescription: "React, Next.js, TypeScript, Flutter",
    backendTitle: "Backend",
    backendDescription: "Node.js, PostgreSQL, APIs",
    cloudTitle: "Cloud",
    cloudDescription: "Serverless, DevOps",
  },
  footer: {
    rights:
      "© {year} jrodriguezdiazz.vercel.app. Todos los derechos reservados.",
  },
  contact: {
    header: {
      intro:
        "¿Tienes un proyecto en mente o simplemente quieres conversar? Me encantaría saber de ti. Ponte en contacto a través de cualquiera de los canales que aparecen abajo y te responderé pronto.",
    },
    title: "Información de Contacto",
    cta: {
      title: "¿Listo para empezar una conversación?",
      description:
        "Ya sea una pregunta rápida o un proyecto complejo, estoy aquí para ayudar. ¡No dudes en contactar!",
    },
    responseCard: {
      title: "Tiempo de Respuesta",
      description: "Normalmente en 24 horas",
    },
    quickActions: {
      title: "Métodos de Contacto Preferidos",
      scheduleCall: "Programar una Llamada",
      scheduleCallDescription: "Charla de 15-30 min",
    },
    availability: {
      title: "Disponible Actualmente",
      description: "Abierto a nuevos proyectos",
    },
    labels: {
      email: "Correo",
      linkedIn: "LinkedIn",
      github: "GitHub",
      twitter: "Twitter",
      location: "Ubicación",
    },
  },
  projects: {
    intro: "Mis habilidades técnicas y experiencia en diferentes dominios",
    status: {
      live: "En vivo",
      offline: "Fuera de línea",
    },
    items: {
      caribbeanCinemas: {
        title: "Cine Caribbean Cinemas",
        description:
          "🎞️ Una plataforma web moderna que revoluciona la experiencia cinematográfica del Caribe. 🍿",
      },
      belphoebe: {
        title: "Belphoebe",
        description:
          "🤖 Belphoebe es la asistente virtual de LICEM-Retro, su objetivo es ayudarte a alquilar películas en nuestra plataforma, donde encontrarás una gran diversidad de películas 💁🏻‍♀️",
      },
      explorandoAndo: {
        title: "Explorando Ando",
        description:
          "🌴 Explorando Ando es la plataforma web para los amantes del viaje en la República Dominicana. 🇩🇴",
      },
      flixo: {
        title: "Flixo",
        description:
          "🤳🏾 Hecho para compartir tus mejores momentos y sonrisas con tus amigos. 🛜",
      },
      schoolAdministrator: {
        title: "School Administrator",
        description:
          "🏫 Esta plataforma es un ejemplo de un sistema que permitirá gestionar estudiantes de una escuela. 📅",
      },
      bookSearchEngine: {
        title: "Book Search Engine",
        description:
          "🔍 Una aplicación que permitirá a los usuarios buscar libros ingresando una consulta (Título, Autor, etc.). Muestra los resultados en una lista con todos los datos correspondientes. 📚",
      },
      dragonQuest: {
        title: "Dragon's Quest",
        description:
          "🎮 Dragon's Quest es un emocionante juego de plataformas en 2D que lleva a los jugadores a una aventura llena de emoción. Embárcate en una búsqueda a través de mundos pixelados vibrantes. 🐲",
      },
    },
  },
  experience: {
    summary: "{count} de experiencia profesional en desarrollo de software",
    items: {
      bairesDev: {
        company: "BairesDev",
        client: "Spring Health",
        modality: "Remoto",
        position: "Ingeniero de Software Senior",
        startDate: "Ene 2026",
        endDate: "Presente",
        responsibilities: [
          "Se desbloquearon aproximadamente $460K en ingresos variables incrementales proyectados a cinco años al lanzar la vista rápida de Medication Management de Spring Health—superficie de elegibilidad para clientes, referencia en un clic y estado de finalización persistente—directamente en la plataforma de coordinación de atención.",
          "Se resolvió el principal problema citado en NPS/CSAT de proveedores del Q4 al diseñar adjuntos de archivo compatibles con HIPAA en web y móvil: se extendió un pipeline de URLs firmadas de AWS S3 y análisis de virus a través de GraphQL en backend, React Query en web y Flutter en móvil, con controles de visibilidad por rol que aplican RBAC.",
          "Se aceleraron los flujos de triaje de proveedores al desarrollar un rediseño de React/TypeScript del panel del portal clínico—vistas rápidas clínicas, menús de acción por fila y experiencias de administración y móvil por rol—activado con LaunchDarkly para habilitar despliegues por porcentaje y sin tiempo de inactividad.",
          "Se redujo el tiempo de creación de pruebas unitarias en ~30% al integrar Claude Code y Cursor AI en el flujo de desarrollo, redirigiendo el tiempo recuperado hacia la profundidad de revisión de código.",
        ],
      },
      epam: {
        company: "EPAM Systems",
        client: "Dow Jones",
        modality: "Remoto",
        position: "Ingeniero de Software Senior",
        startDate: "May 2022",
        endDate: "Dic 2025",
        responsibilities: [
          "Se aceleró la velocidad de despliegue de la configuración de anuncios en 45% y se detectaron automáticamente el 85% de anomalías antes de producción al construir un motor dinámico de gestión de configuración—interfaz de administración Next.js/React, backend Node.js, persistencia MongoDB, caché Redis—con herencia de plantillas, historial de auditoría versionado y rollback en un clic, logrando trazabilidad del 100% de los cambios.",
          "Se redujo la latencia del 95º percentil de la API GraphQL de 350 ms a 120 ms (66%) al perfilar resolvers lentos con Apollo Engine, optimizar rutas calientes y establecer presupuestos de rendimiento en colaboración con stakeholders de AdOps y RevOps.",
          "Se logró una precisión del 99.8% en el mapeo de datos entre metadatos heredados del CMS y jerarquías de unidades de anuncios de Google Ad Manager al diseñar una capa de integración modular y API-first usando Node.js, Express y GraphQL.",
          "Se adoptó GitHub Copilot en los equipos de front-end y API, combinando generación de código asistida por IA con revisión por pares para acelerar boilerplate, scaffolding de pruebas y documentación sin comprometer el rigor de las revisiones.",
        ],
      },
      newtech: {
        company: "Newtech S.R.L.",
        client: "Verizon",
        modality: "Remoto",
        position: "Desarrollador de Software",
        startDate: "Ago 2021",
        endDate: "May 2022",
        responsibilities: [
          "Se mejoraron los tiempos de carga de extremo a extremo en 18% y se redujo el bundle inicial en 25% al renovar la SPA de reportes de fallos de Verizon con Angular 11+—habilitando compilación AOT, detección de cambios OnPush y módulos de funciones perezosos.",
          "Se redujeron los defectos de regresión en 30% y se eliminaron más de 2,000 líneas redundantes de TypeScript al aplicar el principio DRY en servicios compartidos, reduciendo deuda técnica y acotando la superficie de pruebas.",
          "Se logró un 85% de cobertura de código en flujos críticos al construir un conjunto completo de pruebas con Jasmine, Karma y Protractor—usando HttpTestingController para simular respuestas del backend y validar flujos sin servicios en vivo.",
        ],
      },
      intellisysJudicatura: {
        company: "IntelliSys D. Corp.",
        client: "Escuela Nacional de la Judicatura",
        modality: "Presencial",
        position: "Ingeniero de Software",
        startDate: "Nov 2020",
        endDate: "Ago 2021",
        responsibilities: [
          "Mentoricé y potencié a cuatro ingenieros front-end juniors, realizando sesiones semanales de coaching uno a uno, talleres de pair-programming y revisiones de código estructuradas. Introduje buenas prácticas en JavaScript (ES6+), React, Git y pruebas unitarias (Jest, React Testing Library), aumentando la tasa promedio de finalización de historias en 25%.",
          "Diseñé y entregué una biblioteca virtual de jurisprudencia dominicana para profesionales académicos y legales, colaborando con expertos en la materia para modelar metadatos y jerarquías de casos. Construí un front-end en React/Next.js con búsqueda de texto completo y filtros facetados, respaldado por una API Node.js/Express y una base de datos PostgreSQL. Optimicé la indexación y el rendimiento de consultas—reduciendo la latencia de búsqueda en 40%—y mejoré la experiencia de consulta legal en 13%, según encuestas de satisfacción del usuario.",
          "Colaboré de forma transversal con diseñadores UX, investigadores legales y analistas QA—recopilando requerimientos, refinando historias de usuario en Jira y redactando documentación técnica y de usuario en Confluence para agilizar la incorporación y el mantenimiento.",
        ],
      },
      intellisysCnc: {
        company: "IntelliSys D. Corp.",
        client: "Consejo Nacional de Competitividad (CNC)",
        modality: "Presencial",
        position: "Desarrollador de Software",
        startDate: "Jun 2020",
        endDate: "Nov 2020",
        responsibilities: [
          "Diseñé e implementé dashboards interactivos con D3.js, creando gráficos de líneas, barras y mapas que permitían explorar tendencias históricas, aplicar filtros por categoría y pasar el cursor para ver valores exactos.",
          "Construí una interfaz completamente responsive con HTML5 y CSS3 (Flexbox, Media Queries), garantizando compatibilidad entre navegadores y diseños fluidos en escritorio, tableta y móvil. Establecí un sistema modular de diseño para componentes reutilizables de gráficos y paneles informativos.",
          "Colaboré estrechamente con narradores y diseñadores UX, ejecutando pruebas A/B e iterando sobre prototipos según feedback y métricas de uso dentro de la app—lo que resultó en un 31% de aumento en la satisfacción del usuario medido por encuestas posteriores a la interacción.",
        ],
      },
      intellisysInternal: {
        company: "IntelliSys D. Corp.",
        client: "IntelliSys D. Corp.",
        modality: "Presencial",
        position: "Ingeniero de Software",
        startDate: "Abr 2019",
        endDate: "Jun 2020",
        responsibilities: [
          "Agilicé la pipeline interna de recolección de datos al diseñar e implementar microservicios Node.js en Google Cloud Platform (Cloud Functions y Cloud SQL). Cada servicio ingresaba, validaba y normalizaba métricas de empleados y proyectos desde múltiples fuentes (subidas CSV, Google Spreadsheets, APIs) y luego escribía registros consolidados en PostgreSQL para análisis.",
          "Construí una aplicación web administrativa usando React, Redux, Node.js/Express, HTML5 y Material UI, y Axios para integración REST. Diseñé grillas de datos dinámicas, controles de búsqueda/filtros y formularios editables para registros de empleados, incorporando validación del lado del cliente y actualizaciones optimistas de UI.",
        ],
      },
    },
  },
};

export default es;
