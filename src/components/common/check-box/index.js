// import React, { useState } from "react";

export const Checkbox = ({ label, name, onChange, ...props }) => {
  //   const [isChecked, setIsChecked] = useState(false); // State to manage checkbox state

  //   const handleChange = (event) => {
  //     setIsChecked(event.target.checked);
  //     if (onChange) {
  //       onChange(event.target.checked); // Call external onChange handler if provided
  //     }
  //   };

  return (
    <div className="flex items-center justify-center mb-4">
      <input
        type="checkbox"
        id={name}
        name={name}
        // checked={isChecked}
        // onChange={() => handleChange}
        className="w-4 h-4 border-gray-300 rounded-sm focus:ring-primary focus:ring-offset-2"
        {...props} // Allow passing additional props to the input
      />
      <label htmlFor={name} className="ml-3 font-medium">
        {label}
      </label>
    </div>
  );
};
