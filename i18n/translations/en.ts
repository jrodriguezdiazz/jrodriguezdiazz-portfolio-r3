const en = {
  navigation: {
    about: "About Me",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    resume: "Resume",
    downloadResume: "Download Resume",
    toggleMenu: "Toggle menu",
  },
  page: {
    workExperience: "Work Experience",
    projects: "Projects",
    getInTouch: "Get in Touch",
  },
  hero: {
    name: "Jorge Rodríguez",
    title: "Senior Software Engineer",
  },
  bio: {
    intro:
      "I'm a {role} with {years}+ years building full-stack, enterprise-scale systems across healthcare, media, and telecommunications. Specialised in React, TypeScript, Flutter frontends, Node.js, GraphQL backends, and GDPR, HIPAA-compliant cloud architectures—consistently translating product and revenue goals into shipped features that reduce latency, accelerate deployment velocity, and hold up in production. Comfortable owning complex cross-functional deliverables end-to-end, from API design and performance profiling to progressive rollouts with LaunchDarkly.",
    outro:
      "My proactive problem-solving and commitment to team success have positively impacted both my projects and peers. I also bring experience across cloud platforms, microservices, and modern JavaScript frameworks, and I actively integrate AI-assisted engineering tools—Claude Code, Cursor AI, GitHub Copilot, and OpenAI Codex—into my daily workflow to speed up delivery, testing, and code quality without cutting corners. I enjoy mentoring junior engineers, optimizing system performance, and delivering innovative solutions across domains.",
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
    rights: "© {year} jrodriguezdiazz.vercel.app. All rights reserved.",
  },
  contact: {
    header: {
      intro:
        "Have a project in mind or just want to chat? I'd love to hear from you. Reach out through any of the channels below and I'll get back to you soon.",
    },
    title: "Contact Information",
    cta: {
      title: "Ready to start a conversation?",
      description:
        "Whether it's a quick question or a complex project, I'm here to help. Don't hesitate to reach out!",
    },
    responseCard: {
      title: "Response Time",
      description: "Usually within 24 hours",
    },
    quickActions: {
      title: "Preferred Contact Methods",
      scheduleCall: "Schedule a Call",
      scheduleCallDescription: "15-30 min chat",
    },
    availability: {
      title: "Currently Available",
      description: "Open to new projects",
    },
    labels: {
      email: "Email",
      linkedIn: "LinkedIn",
      github: "GitHub",
      twitter: "Twitter",
      location: "Location",
    },
  },
  projects: {
    intro: "My technical skills and expertise across different domains",
    status: {
      live: "Live",
      offline: "Offline",
    },
    items: {
      caribbeanCinemas: {
        title: "Cine Caribbean Cinemas",
        description:
          "🎞️ A modern web platform that revolutionizes the Caribbean cinema experience. 🍿",
      },
      belphoebe: {
        title: "Belphoebe",
        description:
          "🤖 Belphoebe is the virtual assistant of LICEM-Retro, her goal is to help you rent films on our platform, where you will find a great diversity of films 💁🏻‍♀️",
      },
      explorandoAndo: {
        title: "Explorando Ando",
        description:
          "🌴 Explorando Ando is the web platform for travel lovers in the Dominican Republic. 🇩🇴",
      },
      flixo: {
        title: "Flixo",
        description:
          "🤳🏾 Made to share your best moments and smiles with your friends. 🛜",
      },
      schoolAdministrator: {
        title: "School Administrator",
        description:
          "🏫 This platform is an example of a system that will allow managing students of a school. 📅",
      },
      bookSearchEngine: {
        title: "Book Search Engine",
        description:
          "🔍 An application that will allow users to search for books by entering a query (Title, Author, etc). Display the resulting books in a list on the page with all the corresponding data. 📚",
      },
      dragonQuest: {
        title: "Dragon's Quest",
        description:
          "🎮 Dragon's Quest is an exciting 2D platformer game that takes players on a thrilling adventure. Embark on a quest through vibrant pixelated worlds. 🐲",
      },
    },
  },
  experience: {
    summary: "{count} of professional software development experience",
    items: {
      bairesDev: {
        company: "BairesDev",
        client: "Spring Health",
        modality: "Remote",
        position: "Senior Software Engineer",
        startDate: "Jan 2026",
        endDate: "Present",
        responsibilities: [
          "Unlocked an estimated $460K in projected five-year incremental variable revenue by shipping Spring Health's Medication Management quick view—eligibility-driven client surfacing, one-click referral, and persistent completion state—directly into the care-coordination platform.",
          "Resolved the top-cited Q4 provider NPS/CSAT pain point by architecting HIPAA-compliant file attachments across web and mobile: extended an AWS S3 presigned-URL and virus-scan pipeline via GraphQL on the backend, React Query on web, and Flutter on mobile, with per-role visibility controls enforcing RBAC.",
          "Accelerated provider triage workflows by engineering a React/TypeScript redesign of the clinician portal client panel—clinical quick-filter views, row-level action menus, and role-gated admin and mobile experiences—gated behind LaunchDarkly to enable zero-downtime, percentage-based rollouts.",
          "Reduced unit test authoring time by ~30% by integrating Claude Code and Cursor AI into the development workflow, redirecting the reclaimed time toward code review depth.",
        ],
      },
      epam: {
        company: "EPAM Systems",
        client: "Dow Jones",
        modality: "Remote",
        position: "Senior Software Engineer",
        startDate: "May 2022",
        endDate: "Dec 2025",
        responsibilities: [
          "Accelerated ad-configuration deployment velocity by 45% and auto-detected 85% of anomalies before production by building a dynamic configuration management engine—Next.js/React admin UI, Node.js backend, MongoDB persistence, Redis caching—with template inheritance, versioned audit history, and one-click rollback, achieving 100% change traceability.",
          "Reduced 95th-percentile GraphQL API latency from 350 ms to 120 ms (66%) by profiling slow resolvers with Apollo Engine, optimizing hot paths, and establishing performance budgets in collaboration with AdOps and RevOps stakeholders.",
          "Achieved 99.8% data-mapping accuracy between legacy CMS metadata and Google Ad Manager ad-unit hierarchies by architecting a modular, API-first integration layer using Node.js, Express, and GraphQL.",
          "Adopted GitHub Copilot across the front-end and API teams, pairing AI-assisted code generation with peer review to speed up boilerplate, test scaffolding, and documentation without compromising review rigor.",
        ],
      },
      newtech: {
        company: "Newtech S.R.L.",
        client: "Verizon",
        modality: "Remote",
        position: "Software Developer",
        startDate: "Aug 2021",
        endDate: "May 2022",
        responsibilities: [
          "Improved end-to-end load times by 18% and shrank the initial bundle by 25% by revamping Verizon's fault-reporting SPA with Angular 11+—enabling AOT compilation, OnPush change detection, and lazy-loaded feature modules.",
          "Reduced regression defects by 30% and eliminated 2,000+ redundant TypeScript lines by enforcing the DRY principle across shared services, cutting technical debt and narrowing the test surface.",
          "Achieved 85% code coverage on critical user flows by building a full test suite with Jasmine, Karma, and Protractor—using HttpTestingController to mock backend responses and validate flows without live services.",
        ],
      },
      intellisysJudicatura: {
        company: "IntelliSys D. Corp.",
        client: "Escuela Nacional de la Judicatura",
        modality: "On Site",
        position: "Software Engineer",
        startDate: "Nov 2020",
        endDate: "Aug 2021",
        responsibilities: [
          "Mentored & upskilled four junior front-end engineers, conducting weekly one-on-one coaching sessions, pair-programming workshops and structured code reviews. Introduced best practices in JavaScript (ES6+), React, Git and unit testing (Jest, React Testing Library), boosting the team's average story-completion rate by 25%.",
          "Architected and delivered a virtual library of Dominican jurisprudence for academic and legal professionals, collaborating with subject-matter experts to model case metadata and hierarchy. Built a React/Next.js front-end with full-text search and faceted filters, backed by a Node.js/Express API and PostgreSQL datastore. Optimized indexing and query performance—reducing search latency by 40%—and enhanced the legal consultation experience by 13%, as measured in user-satisfaction surveys.",
          "Collaborated cross-functionally with UX designers, legal researchers and QA analysts—gathering requirements, refining user stories in Jira, and authoring technical and user documentation in Confluence to streamline onboarding and maintenance.",
        ],
      },
      intellisysCnc: {
        company: "IntelliSys D. Corp.",
        client: "Consejo Nacional de Competitividad (CNC)",
        modality: "On Site",
        position: "Software Developer",
        startDate: "Jun 2020",
        endDate: "Nov 2020",
        responsibilities: [
          "Designed and implemented interactive dashboards with D3.js, creating line charts, bar charts, and map graphs that let users explore historical trends, apply category filters, and hover for exact values.",
          "Built a fully responsive UI with HTML5 and CSS3 (Flexbox, Media Queries), ensuring cross-browser compatibility and seamless layouts on desktop, tablet, and mobile. Established a modular design system for reusable chart components and info panels.",
          "Collaborated closely with storytellers and UX designers, running A/B tests and iterating on prototypes based on in-app feedback and usage metrics—resulting in a 31% lift in user satisfaction as measured by post-interact surveys.",
        ],
      },
      intellisysInternal: {
        company: "IntelliSys D. Corp.",
        client: "IntelliSys D. Corp.",
        modality: "On Site",
        position: "Software Engineer",
        startDate: "Apr 2019",
        endDate: "Jun 2020",
        responsibilities: [
          "Streamlined internal data collection pipeline by architecting and deploying Node.js microservices on Google Cloud Platform (Cloud Functions, and Cloud SQL). Each service ingested, validated and normalized employee and project metrics from multiple sources (CSV uploads, Google Spreadsheets, APIs), then wrote consolidated records into PostgreSQL for analytics.",
          "Built an administrative web application using React, Redux, Node.js/Express, HTML5 and Material UI, and Axios for REST API integration. Designed dynamic data grids, search/filter controls and editable forms for employee records, incorporating client-side validation and optimistic UI updates.",
        ],
      },
    },
  },
};

export default en;
