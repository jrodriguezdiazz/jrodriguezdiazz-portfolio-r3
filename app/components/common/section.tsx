// Section wrapper component for consistency
export const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-10 ${className}`}>
    <div className='container mx-auto px-4 md:px-6 max-w-7xl'>{children}</div>
  </section>
);

// Section header component for consistency
export const SectionHeader = ({ children, className = "" }) => (
  <h2
    className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-center ${className}`}
  >
    {children}
  </h2>
);
