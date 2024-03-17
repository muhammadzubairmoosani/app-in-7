export const TextArea = ({ placeholder, name, ...props }) => {
  return (
    <div className="flex flex-col mb-4">
      <textarea
        rows="4"
        cols="50"
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
