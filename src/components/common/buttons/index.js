import React from "react";

export const CustomButton = ({
  bgColor = "text-white",
  textColor = "bg-primary",
  children,
  className,
}) => {
  return (
    <button
      className={`font-medium py-[10px] px-[20px] rounded-lg focus:outline-none w-full md:w-auto flex justify-center items-center ${textColor} ${bgColor} ${className}`}
    >
      {children}
    </button>
  );
};
