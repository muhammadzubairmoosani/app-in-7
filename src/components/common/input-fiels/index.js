export const TextField = ({ label, name, ...props }) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="text-sm font-medium mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        className="border rounded-md px-3 py-2 focus:outline-none"
        {...props}
      />
    </div>
  );
};
