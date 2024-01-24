// Button.js
import React from "react";

const Button = ({ name }) => {
  return (
    <div className="inline-block mx-2">
      <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md focus:outline-none hover:bg-gray-400">
        {name}
      </button>
    </div>
  );
};

export default Button;
