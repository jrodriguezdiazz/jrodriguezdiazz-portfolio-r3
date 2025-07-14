export default function BioSection() {
  return (
    <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-8'>
      <div className='prose prose-lg max-w-none text-gray-700 dark:text-gray-300'>
        <p className='leading-relaxed text-center'>
          I'm a{" "}
          <span className='font-semibold text-blue-600 dark:text-blue-400'>
            Senior Software Engineer
          </span>{" "}
          with 6 years of experience architecting, developing, and optimizing
          web applications using React, Node.js, and PostgreSQL. Known for my
          analytical thinking and attention to detail, I combine deep technical
          expertise with a collaborative mindset to drive code quality,
          accelerate time-to-market, and foster cross-functional teamwork.
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
