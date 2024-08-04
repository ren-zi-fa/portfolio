import React from "react";

const Button = ({ children, cls = "bg-indigo-600 hover:bg-indigo-400 " }) => {
  return (
    <button
      className={` text-white font-serif py-2 px-6 rounded  md:ml-4 
    duration-500 ${cls}`}>
      {children}
    </button>
  );
};

export default Button;
