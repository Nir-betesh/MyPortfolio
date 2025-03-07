import React, { useState } from "react";

const ThemeToggle = () => {
  const [isBrightMode, setIsBrightMode] = useState(true);

  const toggleTheme = () => {
    setIsBrightMode(!isBrightMode);
  
    if (isBrightMode) 
      document.documentElement.classList.add("dark");
    else
      document.documentElement.classList.remove("dark");
  };
  

  return (
    <div className="border-separate flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-all duration-500">
      <button
        onClick={toggleTheme}
        className="w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-all duration-500"
      >
        <div
          className={`w-6 h-6 rounded-full bg-white dark:bg-black transform transition-transform duration-500 ${
            isBrightMode ? "translate-x-0" : "translate-x-6"
          }`}
        >
          {isBrightMode ? (
            <span className="flex items-center justify-center -translate-x-px translate-y-0.5 text-yellow-500 text-sm font-bold">
              ☀
            </span>
          ) : (
            <span className="flex items-center justify-center translate-y-0.5 text-blue-500 text-sm font-bold">
              🌙
            </span>
          )}
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;