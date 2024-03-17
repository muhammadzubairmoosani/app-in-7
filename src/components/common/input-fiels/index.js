export const TextField = ({ placeholder, name, ...props }) => {
  return (
    <div className="flex flex-col mb-4">
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        type="text"
        className="border rounded-md px-3 py-2 focus:outline-none"
        {...props}
      />
    </div>
  );
};
