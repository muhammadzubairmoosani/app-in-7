export const Heading = ({ children, className, style }) => (
  <h1
    style={style}
    className={`text-xl md:text-4xl font-semibold text-black dark:text-light-gray ${className}`}
  >
    {children}
  </h1>
);
