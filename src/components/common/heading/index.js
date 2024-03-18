export const Heading = ({ children, className }) => (
  <h1
    className={`text-xl md:text-4xl font-semibold text-black dark:text-light-gray ${className}`}
  >
    {children}
  </h1>
);
