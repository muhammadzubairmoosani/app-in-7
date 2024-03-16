import React from "react";

export const CustomButton = ({
  bgColor = "text-white",
  textColor = "bg-primary",
  width = "w-auto",
  hoverColor = "hover:bg-primary",
  children,
}) => {
  return (
    <button
      className={`font-medium py-2 px-4 rounded-md focus:outline-none ${textColor} ${bgColor} ${hoverColor} ${width}`}
    >
      {children}
    </button>
  );
};
