import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, } from "lucide-react";
import Link from "next/link";

export default function AboutMe() {
  return <div className="flex flex-col items-center justify-center space-y-4 text-center">
    <div className="space-y-2">
      <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-3xl lg:text-6xl/none">
        Jorge Rodríguez Díaz
      </h1>
      <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
        I’m a Senior Software Engineer with 5 years of experience architecting, developing, and optimizing web applications using
        React, Node.js, and PostgreSQL. Known for my analytical thinking and attention to detail, I combine deep technical expertise
        with a collaborative mindset to drive code quality, accelerate time-to-market, and foster cross-functional teamwork. My
        proactive problem-solving and commitment to team success have positively impacted both my projects and peers. I also bring
        experience across cloud platforms, microservices, and modern JavaScript frameworks, and I enjoy mentoring junior engineers,
        optimizing system performance, and delivering innovative solutions across domains.
      </p>
    </div>
    <div className="space-x-4">
      <Link href="https://github.com/jrodriguezdiazz" target="_blank">
        <Button variant="outline" size="icon">
          <Github className="h-4 w-4" />
          <span className="sr-only">GitHub</span>
        </Button>
      </Link>
      <Link href="https://www.linkedin.com/in/jrodriguezdiazz" target="_blank">
        <Button variant="outline" size="icon">
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">LinkedIn</span>
        </Button>
      </Link>
      <Link href="https://x.com/jrodriguezdiazz" target="_blank">
        <Button variant="outline" size="icon">
          <Twitter className="h-4 w-4" />
          <span className="sr-only">Twitter</span>
        </Button>
      </Link>
      <Link href="mailto:jrodriguezdiazz@outlook.com">
        <Button variant="outline" size="icon">
          <Mail className="h-4 w-4" />
          <span className="sr-only">Email</span>
        </Button>
      </Link>
    </div>
  </div>;
}
