export const DropdownField = ({
  options = [],
  defaultValue,
  className,
  placeholder,
  name,
  ...props
}) => {
  // const [selectedValue, setSelectedValue] = React.useState(defaultValue || "");

  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };

  return (
    <div className={`flex flex-col w-full ${className}`}>
      <select
        id={name}
        name={name}
        // value={selectedValue}
        // onChange={handleChange}
        style={{ background: "transparent" }}
        className={`border rounded-md px-3 py-2 focus:outline-none ${className}`}
        {...props}
      >
        <option value="">{placeholder || "Select an option"}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
