import { getYearsOfExperience } from "@/lib/utils";

export default function BioSection() {
  return (
    <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-8'>
      <div className='prose prose-lg max-w-none text-gray-700 dark:text-gray-300'>
        <p className='leading-relaxed text-center'>
          I'm a{" "}
          <span className='font-semibold text-blue-600 dark:text-blue-400'>
            Senior Software Engineer
          </span>{" "}
          with {getYearsOfExperience()}+ years building full-stack,
          enterprise-scale systems across healthcare, media, and
          telecommunications. Specialised in React, TypeScript, Flutter
          frontends, Node.js, GraphQL backends, and GDPR, HIPAA-compliant cloud
          architectures—consistently translating product and revenue goals into
          shipped features that reduce latency, accelerate deployment velocity,
          and hold up in production. Comfortable owning complex cross-functional
          deliverables end-to-end, from API design and performance profiling to
          progressive rollouts with LaunchDarkly.
        </p>
        <p className='leading-relaxed text-center mt-4'>
          My proactive problem-solving and commitment to team success have
          positively impacted both my projects and peers. I also bring
          experience across cloud platforms, microservices, and modern
          JavaScript frameworks, and I enjoy mentoring junior engineers,
          optimizing system performance, and delivering innovative solutions
          across domains.
        </p>
      </div>
    </div>
  );
}
