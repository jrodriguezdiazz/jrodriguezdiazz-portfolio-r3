"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";

interface WorkExperienceEntry {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  technologies: string[];
}

interface WorkExperienceEntry {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  technologies: string[];
}

const experiences: WorkExperienceEntry[] = [
  {
    company: "EPAM Systems",
    position: "Senior Software Engineer",
    startDate: "May 2022",
    endDate: "Present",
    responsibilities: [
      "Architected and delivered a modular, API-first integration layer for Dow Jones ad configurations, designing REST & GraphQL endpoints to map CMS metadata to GAM hierarchies with 99.8% accuracy",
      "Built a dynamic configuration management engine (template inheritance, versioned change control) with a Next.js/React admin UI, achieving 100% traceability and cutting deployment time by 45%",
      "Collaborated with AdOps, RevOps & Product teams to define requirements, integrate the ACE widget, and profile GraphQL resolvers—reducing 95th-percentile API latency from 350ms to 120ms",
      "Owned CI/CD: authored Terraform modules for AWS (API Gateway, Lambda, ElastiCache), configured GitHub Actions workflows (lint, Jest tests), and set up CloudWatch alerts to maintain 99.9% uptime",
      "Mentored 3 junior engineers in API design, test-driven development (Jest & React Testing Library) and Kubernetes best practices"
    ],
    technologies: [
      "Node.js", "Express.js", "GraphQL", "React", "Next.js",
      "MongoDB", "Redis", "AWS (Lambda, API Gateway, ElastiCache)",
      "Terraform", "Jest", "GitHub Actions", "Apollo Engine"
    ]
  },
  {
    company: "Newtech S.R.L.",
    position: "Software Developer",
    startDate: "Aug 2021",
    endDate: "May 2022",
    responsibilities: [
      "Revamped Verizon’s fault-reporting SPA in Angular 11+ (AOT, OnPush, lazy modules), shrinking initial bundle by 25% and boosting load times by 18%",
      "Applied the DRY principle to eliminate over 2,000 lines of redundant TypeScript, reducing technical debt and cutting regression defects by 30%",
      "Integrated Angular HttpClient with Verizon’s REST APIs and centralized error/retry logic using RxJS operators (retry, catchError)",
      "Built and maintained an 85%-coverage test suite with Jasmine, Karma & Protractor, using HttpTestingController for isolated flow testing",
      "Worked in Agile/SCRUM (Jira, Confluence), defining acceptance criteria and automating deployments via Jenkins pipelines"
    ],
    technologies: [
      "Angular 11+", "TypeScript", "RxJS", "Sass",
      "Angular CLI", "Jasmine", "Karma", "Protractor",
      "HttpClient", "REST", "Jira", "Jenkins"
    ]
  },
  {
    company: "IntelliSys D. Corp.",
    position: "Software Engineer",
    startDate: "Nov 2020",
    endDate: "Aug 2021",
    responsibilities: [
      "Mentored 4 junior front-end engineers through pair-programming, code reviews and workshops on ES6+, React & Jest, boosting team delivery rate by 25%",
      "Architected and delivered a virtual library of Dominican jurisprudence with React/Next.js, Elasticsearch full-text search and faceted filters—improving satisfaction by 13%",
      "Built a Node.js/Express backend with PostgreSQL, optimized search indexing & queries to reduce latency by 40%",
      "Defined CI/CD with GitHub Actions and Docker, deploying to AWS Elastic Beanstalk with zero-downtime releases",
      "Collaborated with UX, legal researchers & QA, writing technical docs and onboarding guides in Confluence"
    ],
    technologies: [
      "React", "Next.js", "Node.js", "Express.js",
      "PostgreSQL", "Elasticsearch", "Docker",
      "GitHub Actions", "Jest", "Confluence"
    ]
  },
  {
    company: "Consejo Nacional de Competitividad (CNC)",
    position: "Software Developer",
    startDate: "Jul 2020",
    endDate: "Oct 2020",
    responsibilities: [
      "Designed and implemented interactive D3.js dashboards (line, bar, stacked area, maps) for visualizing national competitiveness data",
      "Orchestrated AJAX data fetches with jQuery and built responsive UIs with HTML5 & CSS3 (Flexbox, Media Queries)",
      "Optimized SVG rendering via virtualization and selective DOM updates, cutting initial load time by 45%",
      "Ran A/B tests and iterated on UX prototypes based on in-app feedback, lifting user satisfaction by 31%"
    ],
    technologies: [
      "D3.js", "JavaScript (ES6+)", "jQuery",
      "HTML5", "CSS3", "SVG Performance Tuning"
    ]
  },
  {
    company: "IntelliSys D. Corp.",
    position: "Software Engineer",
    startDate: "Apr 2019",
    endDate: "Jun 2020",
    responsibilities: [
      "Streamlined data collection via Node.js microservices on GCP (Cloud Functions, Pub/Sub, Cloud SQL), ingesting & normalizing CSV/Spreadsheet data to BigQuery",
      "Built an admin web app in React & Redux with Node.js/Express backend, featuring dynamic data grids, filter/search controls and optimistic updates",
      "Implemented JWT auth, centralized logging with Stackdriver, and automated deployments with Cloud Build & Terraform",
      "Containerized services with Docker and deployed to GKE, reducing manual data prep time by 40% and improving admin efficiency by 15%"
    ],
    technologies: [
      "Node.js", "Express.js", "React", "Redux",
      "GCP (Cloud Functions, Pub/Sub, Cloud SQL, BigQuery, GKE)",
      "Docker", "Terraform", "JWT", "Stackdriver"
    ]
  }
];


export default function WorkExperience() {
  return (
    <div className="space-y-8">
      { experiences.map((experience, index) => (
        <div key={ index } className="border rounded-lg p-6 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold">{ experience.company }</h3>
              <p className="text-lg text-muted-foreground">{ experience.position }</p>
            </div>
            <p className="text-sm text-muted-foreground">
              { experience.startDate } - { experience.endDate }
            </p>
          </div>
          <ul className="list-disc list-inside space-y-2">
            { experience.responsibilities.map((responsibility, idx) => (
              <li key={ idx } className="text-muted-foreground">
                { responsibility }
              </li>
            )) }
          </ul>
          <div className="flex flex-wrap gap-2">
            { experience.technologies.map((tech, idx) => (
              <Badge key={ idx } variant="secondary">
                { tech }
              </Badge>
            )) }
          </div>
        </div>
      )) }
    </div>
  );
}
