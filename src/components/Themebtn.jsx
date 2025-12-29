import React from "react";
import useTheme from "./UseContext";
import { IoSunnyOutline } from "react-icons/io5";
import { GoMoon } from "react-icons/go";

const ThemeBtn = () => {
  const { themeMode, lightMode, darkMode } = useTheme();

  const onChangeTheme = (e) => {
    const checkMode = e.currentTarget.checked;
    if (checkMode) 
      darkMode();
    else 
      lightMode();
  };

  return (
    <label className="relative cursor-pointer flex items-center justify-center">
      <input
        type="checkbox"
        value=""
        checked={themeMode === "dark"}
        onChange={onChangeTheme}
        className="sr-only peer"
      />
      <div className="w-11 h-6 mb-2 bg-gray-300 rounded-full peer-checked:bg-blue-500   peer-checked:after:translate-x-full after:h-6 after:w-6 after:bg-white after:content-[''] after:transition-all after:absolute border-rounded after:rounded-xl m-2 relative">
        {/* Sun icon for light mode */}
        <IoSunnyOutline
          className={`absolute z-50 text-yellow-500 text-2xl transition-opacity duration-300 ${
            themeMode === "dark" ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Moon icon for dark mode */}
        <GoMoon
          className={`absolute -right-1 z-50 text-gray-500 text-2xl transition-opacity duration-300 ${
            themeMode === "dark" ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </label>
  );
};

export default ThemeBtn;
