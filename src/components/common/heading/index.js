export const Heading = ({
  children,
  className,
  style,
  onClick,
  textSize = "text-xl",
}) => (
  <h1
    onClick={onClick}
    style={style}
    className={`${textSize} md:text-4xl font-semibold text-black dark:text-light-gray ${className}`}
  >
    {children}
  </h1>
);
