import React from "react";

const Button = (prop) => {
  return (
    <button className=" self-center text-white py-1 px-4 h-4/6 bg-red-600 hover:bg-white hover:text-black border hover:border-2 hover:border-gray-700 rounded-sm">
      {prop.title}
    </button>
  );
};

export default Button;
