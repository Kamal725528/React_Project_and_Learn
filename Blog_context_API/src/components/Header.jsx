import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";


function Header() {

  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="py-4 border-b-2 border-gray-300 dark:border-gray-700 drop-shadow-md fixed top-0 inset-x-0 bg-white dark:bg-gray-800 z-10 flex justify-between items-center px-4">
    <h1 className="font-serif text-3xl text-center tracking-widest text-gray-800 dark:text-gray-200 mx-auto">
        My Blog
    </h1>
    <button 
        onClick={toggleTheme} 
        className="text-sm px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md shadow-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  </div>
   );
}

export default Header;
