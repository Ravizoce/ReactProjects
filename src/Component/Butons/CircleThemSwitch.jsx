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
        className={`absolute top-1/2 transform  w-9 h-9 transition-all `}
      >
      </div>
    </div>
  );
};

export default ThemeSwitch;
