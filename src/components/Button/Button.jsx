import React from "react";

const Button = ({ buttonname, bg }) => {
  return (
    <>
      <button
        className={`${bg}  py-[17px] px-[62px] rounded-[162px] text-white text-[20px] font-semibold`}
      >
        {buttonname}
      </button>
    </>
  );
};

export default Button;
