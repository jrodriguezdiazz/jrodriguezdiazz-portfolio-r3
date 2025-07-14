export default function SkillsHighlight() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
      <div className='bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 text-center border border-blue-200 dark:border-blue-800'>
        <div className='text-blue-600 dark:text-blue-400 text-2xl font-bold mb-2'>
          Frontend
        </div>
        <div className='text-sm text-gray-600 dark:text-gray-400'>
          React, Next.js, TypeScript
        </div>
      </div>
      <div className='bg-green-50 dark:bg-green-900/20 rounded-xl p-6 text-center border border-green-200 dark:border-green-800'>
        <div className='text-green-600 dark:text-green-400 text-2xl font-bold mb-2'>
          Backend
        </div>
        <div className='text-sm text-gray-600 dark:text-gray-400'>
          Node.js, PostgreSQL, APIs
        </div>
      </div>
      <div className='bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 text-center border border-purple-200 dark:border-purple-800'>
        <div className='text-purple-600 dark:text-purple-400 text-2xl font-bold mb-2'>
          Cloud
        </div>
        <div className='text-sm text-gray-600 dark:text-gray-400'>
          Serveless, DevOps
        </div>
      </div>
    </div>
  );
}
