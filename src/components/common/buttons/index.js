import React from "react";

export const CustomButton = ({
  bgColor = "text-white",
  textColor = "bg-primary",
  children,
  className,
}) => {
  return (
    <button
      className={`font-medium py-2 px-4 rounded-md focus:outline-none w-full md:w-auto ${textColor} ${bgColor}  ${className}`}
    >
      {children}
    </button>
  );
};
