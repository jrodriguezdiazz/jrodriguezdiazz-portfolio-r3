export default function Footer() {
  return (
    <footer className='border-t bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm'>
      <div className='container mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 max-w-7xl'>
        <p className='text-xs text-gray-500 dark:text-gray-400'>
          © {new Date().getFullYear()} jrodriguezdiazz.vercel.app. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
