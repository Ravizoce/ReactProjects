import React, { useState } from "react";

const ThemeSwitch = ({ value = false, onChange }) => {
  const [isActive, setIsActive] = useState(value);

  const handleToggle = () => {
    const newValue = !isActive;
    setIsActive(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div
      className={`relative w-20 h-10 rounded-full border-2 cursor-pointer transition-all duration-300 bg-blue-500 overflow-hidden`}
      onClick={handleToggle}
    >
      {/* Knob with rings */}
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 w-9 h-9 transition-all duration-300  ${
          isActive ? "left-10" : "left-[0.5px]"
        }`}
      >
        <div>
          </div>
        {/* Outer ring */}
        <div
          className={`absolute inset-[-30px] rounded-full bg-white/15 transition-colors duration-300 shadow-sm`}
        />
        <div
          className={`absolute inset-[-20px] rounded-full bg-white/10 transition-colors duration-300 shadow-sm`}
        />

        {/* Middle ring */}
        <div
          className={`absolute inset-[-10px] rounded-full bg-white/5 transition-colors duration-300 shadow-sm`}
        />

        {/* Inner ring - the main knob */}
        <div
          className={`absolute inset-[2px] rounded-full bg-red-500 transition-colors duration-300 shadow-sm`}
        />
      </div>
    </div>
  );
};

export default ThemeSwitch;
