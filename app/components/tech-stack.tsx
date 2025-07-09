import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Server,
  Cloud,
  Wrench,
  TrendingUp,
  Star,
  Award
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiAngular,
  SiRedux,
  SiD3Dotjs,
  SiJquery,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiPython,
  SiDocker,
  SiAmazonwebservices,
  SiGooglecloud,
  SiGit,
  SiLinux,
  SiNginx,
  SiPostman,
  SiFigma,
  SiJest,
  SiGithub,
  SiVercel,
  SiReactivex,
  SiVite,
  SiTypescript,
  SiTailwindcss,
  SiWebpack
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import * as React from "react";

type ProficiencyLevel = "beginner" | "intermediate" | "advanced" | "expert";

interface TechnologySkill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  proficiency: ProficiencyLevel;
  yearsOfExperience: number;
  isCore?: boolean;
}

interface TechnologyCategory {
  category: string;
  categoryIcon: React.ComponentType<{ className?: string }>;
  skills: TechnologySkill[];
  description: string;
}

const PROFICIENCY_CONFIG: Record<ProficiencyLevel, {
  label: string;
  color: string;
  bgColor: string;
  dotColor: string;
}> = {
  beginner: {
    label: "Beginner",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    dotColor: "bg-blue-400"
  },
  intermediate: {
    label: "Intermediate",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    dotColor: "bg-yellow-400"
  },
  advanced: {
    label: "Advanced",
    color: "text-green-600",
    bgColor: "bg-green-50",
    dotColor: "bg-green-400"
  },
  expert: {
    label: "Expert",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    dotColor: "bg-purple-400"
  }
};

const technologies: TechnologyCategory[] = [
  {
    category: "Frontend Development",
    categoryIcon: Code,
    description: "Building responsive, interactive user interfaces",
    skills: [
      { name: "React", icon: SiReact, proficiency: "expert", yearsOfExperience: 5, isCore: true },
      { name: "Next.js", icon: SiNextdotjs, proficiency: "advanced", yearsOfExperience: 3, isCore: true },
      { name: "TypeScript", icon: SiTypescript, proficiency: "advanced", yearsOfExperience: 4, isCore: true },
      { name: "JavaScript (ES6+)", icon: SiJavascript, proficiency: "expert", yearsOfExperience: 6, isCore: true },
      { name: "HTML5", icon: SiHtml5, proficiency: "expert", yearsOfExperience: 6 },
      { name: "CSS3 / Sass", icon: SiCss3, proficiency: "advanced", yearsOfExperience: 5 },
      { name: "Tailwind CSS", icon: SiTailwindcss, proficiency: "advanced", yearsOfExperience: 2 },
      { name: "Angular 11+", icon: SiAngular, proficiency: "advanced", yearsOfExperience: 3 },
      { name: "RxJS", icon: SiReactivex, proficiency: "intermediate", yearsOfExperience: 2 },
      { name: "Redux", icon: SiRedux, proficiency: "advanced", yearsOfExperience: 3 },
      { name: "D3.js", icon: SiD3Dotjs, proficiency: "intermediate", yearsOfExperience: 2 },
      { name: "jQuery", icon: SiJquery, proficiency: "advanced", yearsOfExperience: 4 }
    ],
  },
  {
    category: "Backend Development",
    categoryIcon: Server,
    description: "Server-side logic, APIs, and database management",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, proficiency: "expert", yearsOfExperience: 5, isCore: true },
      { name: "Express.js", icon: SiExpress, proficiency: "advanced", yearsOfExperience: 4, isCore: true },
      { name: "GraphQL", icon: SiGraphql, proficiency: "advanced", yearsOfExperience: 3 },
      { name: "REST APIs", icon: SiGraphql, proficiency: "expert", yearsOfExperience: 5 },
      { name: "PostgreSQL", icon: SiPostgresql, proficiency: "advanced", yearsOfExperience: 4 },
      { name: "MongoDB", icon: SiMongodb, proficiency: "advanced", yearsOfExperience: 3 },
      { name: "Redis", icon: SiRedis, proficiency: "intermediate", yearsOfExperience: 2 },
      { name: "SQL", icon: SiMysql, proficiency: "advanced", yearsOfExperience: 4 },
      { name: "Python / Flask", icon: SiPython, proficiency: "intermediate", yearsOfExperience: 2 }
    ],
  },
  {
    category: "DevOps & Cloud",
    categoryIcon: Cloud,
    description: "Deployment, infrastructure, and cloud services",
    skills: [
      { name: "Docker", icon: SiDocker, proficiency: "intermediate", yearsOfExperience: 2 },
      { name: "AWS", icon: SiAmazonwebservices, proficiency: "advanced", yearsOfExperience: 3, isCore: true },
      { name: "Google Cloud", icon: SiGooglecloud, proficiency: "intermediate", yearsOfExperience: 2 },
      { name: "CI/CD", icon: SiGithub, proficiency: "advanced", yearsOfExperience: 3 },
      { name: "Git", icon: SiGit, proficiency: "expert", yearsOfExperience: 6 },
      { name: "Linux", icon: SiLinux, proficiency: "intermediate", yearsOfExperience: 3 },
      { name: "Nginx", icon: SiNginx, proficiency: "intermediate", yearsOfExperience: 2 }
    ],
  },
  {
    category: "Development Tools",
    categoryIcon: Wrench,
    description: "Development environment and productivity tools",
    skills: [
      { name: "VS Code", icon: VscCode, proficiency: "expert", yearsOfExperience: 5 },
      { name: "Webpack", icon: SiWebpack, proficiency: "intermediate", yearsOfExperience: 3 },
      { name: "Vite", icon: SiVite, proficiency: "advanced", yearsOfExperience: 2 },
      { name: "Jest", icon: SiJest, proficiency: "advanced", yearsOfExperience: 3 },
      { name: "GitHub", icon: SiGithub, proficiency: "expert", yearsOfExperience: 6 },
      { name: "Postman", icon: SiPostman, proficiency: "advanced", yearsOfExperience: 4 },
      { name: "Figma", icon: SiFigma, proficiency: "intermediate", yearsOfExperience: 2 },
      { name: "Vercel", icon: SiVercel, proficiency: "advanced", yearsOfExperience: 2 }
    ],
  },
];

interface ProficiencyIndicatorProps {
  proficiency: ProficiencyLevel;
  years: number;
}

const ProficiencyIndicator: React.FC<ProficiencyIndicatorProps> = ({ proficiency, years }) => {
  const config = PROFICIENCY_CONFIG[proficiency];
  const dots = Array.from({ length: 4 }, (_, i) => i);
  const filledDots = proficiency === "beginner" ? 1 :
    proficiency === "intermediate" ? 2 :
      proficiency === "advanced" ? 3 : 4;

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {dots.map((dot) => (
          <div
            key={dot}
            className={`w-2 h-2 rounded-full ${
              dot < filledDots ? config.dotColor : "bg-gray-200"
            }`}
          />
        ))}
      </div>
      <span className={`text-xs font-medium ${config.color}`}>
        {years}y
      </span>
    </div>
  );
};

interface SkillBadgeProps {
  skill: TechnologySkill;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  const config = PROFICIENCY_CONFIG[skill.proficiency];

  return (
    <div className={`
      group relative flex flex-col items-center gap-2 p-3 rounded-lg border
      ${config.bgColor} hover:shadow-md transition-all duration-200
      ${skill.isCore ? 'ring-2 ring-primary/20' : ''}
    `}>
      <div className="flex items-center gap-2">
        <skill.icon className="w-5 h-5" />
        <span className="font-medium text-sm">{skill.name}</span>
        {skill.isCore && <Star className="w-3 h-3 text-amber-500" />}
      </div>

      <ProficiencyIndicator proficiency={skill.proficiency} years={skill.yearsOfExperience} />

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
        {config.label} • {skill.yearsOfExperience} years
        {skill.isCore && " • Core Skill"}
      </div>
    </div>
  );
};

interface CategoryCardProps {
  category: TechnologyCategory;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const coreSkills = category.skills.filter(skill => skill.isCore);
  const otherSkills = category.skills.filter(skill => !skill.isCore);

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start gap-3 mb-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          <category.categoryIcon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{category.category}</h3>
          <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
        </div>
        <Badge variant="outline" className="ml-auto">
          {category.skills.length} skills
        </Badge>
      </div>

      {/* Core Skills */}
      {coreSkills.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-4 h-4 text-amber-500" />
            <h4 className="text-sm font-medium text-amber-700">Core Skills</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {coreSkills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      )}

      {/* Other Skills */}
      {otherSkills.length > 0 && (
        <div>
          {coreSkills.length > 0 && (
            <h4 className="text-sm font-medium text-muted-foreground mb-3">Additional Skills</h4>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {otherSkills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};

interface TechStackStatsProps {
  technologies: TechnologyCategory[];
}

const TechStackStats: React.FC<TechStackStatsProps> = ({ technologies }) => {
  const stats = React.useMemo(() => {
    const allSkills = technologies.flatMap(cat => cat.skills);
    const totalSkills = allSkills.length;
    const coreSkills = allSkills.filter(skill => skill.isCore).length;
    const expertSkills = allSkills.filter(skill => skill.proficiency === "expert").length;
    const avgExperience = Math.round(
      allSkills.reduce((sum, skill) => sum + skill.yearsOfExperience, 0) / totalSkills
    );

    return { totalSkills, coreSkills, expertSkills, avgExperience };
  }, [technologies]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div className="text-center p-4 bg-primary/5 rounded-lg">
        <div className="text-2xl font-bold text-primary">{stats.totalSkills}</div>
        <div className="text-sm text-muted-foreground">Total Skills</div>
      </div>
      <div className="text-center p-4 bg-amber-50 rounded-lg">
        <div className="text-2xl font-bold text-amber-600">{stats.coreSkills}</div>
        <div className="text-sm text-muted-foreground">Core Skills</div>
      </div>
      <div className="text-center p-4 bg-purple-50 rounded-lg">
        <div className="text-2xl font-bold text-purple-600">{stats.expertSkills}</div>
        <div className="text-sm text-muted-foreground">Expert Level</div>
      </div>
      <div className="text-center p-4 bg-green-50 rounded-lg">
        <div className="text-2xl font-bold text-green-600">{stats.avgExperience}</div>
        <div className="text-sm text-muted-foreground">Avg Years</div>
      </div>
    </div>
  );
};

export default function TechStack() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <p className="text-muted-foreground">
          My technical skills and expertise across different domains
        </p>
      </div>

      <TechStackStats technologies={technologies} />
      <div className="mt-8 p-4 bg-muted/30 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-4 h-4 text-primary" />
          <h3 className="font-medium">Legend</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Star className="w-3 h-3 text-amber-500" />
            <span>Core Skill</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Beginner</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span>Intermediate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span>Expert</span>
          </div>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {technologies.map((category) => (
          <CategoryCard key={category.category} category={category} />
        ))}
      </div>
    </div>
  );
}
