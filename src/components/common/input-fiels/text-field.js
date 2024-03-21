export const TextField = ({
  inputClassName,
  className,
  placeholder,
  name,
  ...props
}) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        type="text"
        className={`border rounded-md px-3 py-2 focus:outline-none ${inputClassName}`}
        {...props}
      />
    </div>
  );
};
