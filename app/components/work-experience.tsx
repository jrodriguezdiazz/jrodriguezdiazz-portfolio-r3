"use client";

import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import * as React from "react";

interface WorkExperienceEntry {
  company: string;
  companyLink: string;
  client: string;
  clientLink: string;
  modality: string;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  technologies: string[];
}

const experiences: WorkExperienceEntry[] = [
  {
    company: "EPAM Systems",
    client: "Dow Jones",
    clientLink: "https://www.dowjones.com",
    companyLink: "https://www.epam.com",
    modality: "Remote",
    position: "Senior Software Engineer",
    startDate: "May 2022",
    endDate: "Present",
    responsibilities: [
      "Architected & delivered a modular, API-first integration layer for Dow Jones ad configurations, leveraging Node.js, Express.js and GraphQL. Designed REST and GraphQL endpoints to pull CMS metadata and map it to GAM ad‐unit hierarchies ensuring 99.8% data-mapping accuracy between legacy CMS structures and Google Ad Manager.",
      "Built a dynamic configuration management engine with a Next.js/React admin UI and a Node.js backend, using MongoDB for persisting templates and Redis for caching active configurations. Introduced template inheritance (allowing bulk updates via parent templates) and versioned change control (audit history, approvals, roll-back), which enabled 100% traceability of all ad-config changes, accelerated deployment velocity by 45%, and automatically detected & flagged 85% of configuration anomalies before reaching production. ",
      "Collaborated cross-functionally with AdOps, RevOps, and Product teams to refine requirements, roadmap new features (e.g. ACE widget integration for in-page editing), and conduct performance tuning—profiling slow GraphQL resolvers with Apollo Engine and optimizing hot paths to reduce 95th-percentile API latency from 350 ms to 120 ms."],
    technologies: ["JavaScript", "React", "Next.js", "Node.js", "Express.js", "HTML", "GraphQL", "AWS", "MongoDB", "Redis", "Jest", "Jira", "Google Ads "]
  },
  {
    company: "Newtech S.R.L.",
    client: "Verizon",
    companyLink: "https://www.newtechsa.com/es/inicio",
    clientLink: "https://www.verizon.com",
    modality: "Remote",
    position: "Software Developer",
    startDate: "Aug 2021",
    endDate: "May 2022",
    responsibilities: ["Revamped Verizon’s fault-reporting single-page application using Angular 11+, enabling Ahead-Of-Time (AOT) compilation, OnPush change detection, and lazy-loaded feature modules. These optimizations shrank the initial bundle by 25% and improved end-to-end load times by 18%.",

      "Eliminated over 2,000 lines of redundant TypeScript across shared services and components by enforcing the DRY principle, which reduced technical debt and cut regression defects by 30%.",

      "Built a comprehensive test suite with Jasmine, Karma and Protractor, achieving 85% code coverage. Employed HttpTestingController to mock backend responses and validate critical user flows without live services.",

      "Operated within an Agile/SCRUM environment using Jira for backlog management and Confluence for documentation. Collaborated closely with product owners and QA to define acceptance criteria, refine user stories and coordinate deployments through Jenkins pipelines. ",],
    technologies: ["TypeScript", "Angular", "Angular CLI", "RxJS", "Node.js", "HTML", "CSS", "Jasmine", "GitLab", "Jenkins"]
  },
  {
    company: "IntelliSys D. Corp.",
    client: "Escuela Nacional de la Judicatura",
    companyLink: "https://intellisysdcorp.com/",
    clientLink: "https://juriteca.edu.do/base/domenj",
    modality: "On Site",
    position: "Software Engineer",
    startDate: "Nov 2020",
    endDate: "Aug 2021",
    responsibilities: ["Mentored & upskilled four junior front-end engineers, conducting weekly one-on-one coaching sessions, pair-programming workshops and structured code reviews. Introduced best practices in JavaScript (ES6+), React, Git and unit testing (Jest, React Testing Library), boosting the team’s average story-completion rate by 25%.",

      "Architected and delivered a virtual library of Dominican jurisprudence for academic and legal professionals, collaborating with subject-matter experts to model case metadata and hierarchy. Built a React/Next.js front-end with full-text search and faceted filters, backed by a Node.js/Express API and PostgreSQL datastore. Optimized indexing and query performance—reducing search latency by 40%—and enhanced the legal consultation experience by 13%, as measured in user-satisfaction surveys.",

      "Collaborated cross-functionally with UX designers, legal researchers and QA analysts—gathering requirements, refining user stories in Jira, and authoring technical and user documentation in Confluence to streamline onboarding and maintenance."],
    technologies: ["JavaScript", "Node.js", "Express.js", "HTML", "CSS", "Sass", "SQL"]
  },
  {
    company: "IntelliSys D. Corp.",
    companyLink: "https://intellisysdcorp.com/",
    client: "Consejo Nacional de Competitividad (CNC)",
    clientLink: "https://cnc.gob.do",
    modality: "On Site",
    position: "Software Developer",
    startDate: "Jul 2020",
    endDate: "Oct 2020",
    responsibilities: ["Designed and implemented interactive dashboards with D3.js, creating line charts, bar charts, and map graphs that let users explore historical trends, apply category filters, and hover for exact values.",

      "Built a fully responsive UI with HTML5 and CSS3 (Flexbox, Media Queries), ensuring cross-browser compatibility and seamless layouts on desktop, tablet, and mobile. Established a modular design system for reusable chart components and info panels.",

      "Collaborated closely with storytellers and UX designers, running A/B tests and iterating on prototypes based on in-app feedback and usage metrics—resulting in a 31% lift in user satisfaction as measured by post-interact surveys."],
    technologies: ["JavaScript", "D3.js", "jQuery", "HTML", "CSS"]
  },
  {
    company: "IntelliSys D. Corp.",
    client: "IntelliSys D. Corp.",
    companyLink: "https://intellisysdcorp.com/",
    clientLink: "https://intellisysdcorp.com/",
    modality: "On Site",
    position: "Software Engineer",
    startDate: "Apr 2019",
    endDate: "Jun 2020",
    responsibilities: ["Streamlined internal data collection pipeline by architecting and deploying Node.js microservices on Google Cloud Platform (Cloud Functions, and Cloud SQL). Each service ingested, validated and normalized employee and project metrics from multiple sources (CSV uploads, Google Spreadsheets, APIs), then wrote consolidated records into PostgreSQL for analytics.",
      "Built an administrative web application using React, Redux, Node.js/Express, HTML5 and Material UI, and Axios for REST API integration. Designed dynamic data grids, search/filter controls and editable forms for employee records, incorporating client-side validation and optimistic UI updates."],
    technologies: ["JavaScript", "React", "Material-UI", "Node.js", "Express.js", "HTML", "CSS", "Python", "Flask", "GCP", "PostgreSQL", "Looker"]
  }
];


export default function WorkExperience() {
  return (
    <div className="space-y-8">
      { experiences.map((experience, index) => (
        <div key={ index } className="border rounded-lg p-6 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h2
                className="text-xl font-semibold flex items-center"
              >
                { experience.company }
                <span
                  className={ "ml-2 text-muted-foreground text-sm" }
                  children={ <Link
                    href={ experience.companyLink } target="_blank" rel="noopener noreferrer"
                    className="hover:underline">
                    <ExternalLink className="h-4 w-4" />
                  </Link> }
                />
              </h2>
              <h3
                className="text-xl font-semibold flex items-center"
              >
                { experience.client }
                <span
                  className={ "ml-2 text-muted-foreground text-sm" }
                  children={ <Link
                    href={ experience.clientLink } target="_blank" rel="noopener noreferrer"
                    className="hover:underline">
                    <ExternalLink className="h-4 w-4" />
                  </Link> }
                />
              </h3>
              <h4 className="text-lg text-muted-foreground">{ experience.modality } | { experience.position }</h4>
            </div>
            <h4 className="text-sm text-muted-foreground">
              { experience.startDate } - { experience.endDate }
            </h4>
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
