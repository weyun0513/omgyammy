import React from "react";

function Button({ name = "", ...props }) {
  return (
    <button
      {...props}
      type="submit"
      className={`text-[#777] hover:text-blue border-[1.6px] w-full py-2 rounded-xl hover:border-[#cda154] focus:border-[#cda154] duration-500 ${props.className}`}
    >
      {name}
    </button>
  );
}

export default Button;
