import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if(storedTheme === "dark"){
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
    }
    else{
        setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {        
      if(isDarkMode){
          document.documentElement.classList.remove("dark");    // add/remove the class "dark" to the document dynamically
          localStorage.setItem("theme", "light");             // remembr theme
          setIsDarkMode(false);
      }
      else{            
          document.documentElement.classList.add("dark");     // add/remove the class "dark" to the document dynamically
          localStorage.setItem("theme", "dark");
          setIsDarkMode(true);
      }
      
  }

  return (
    <div>
      <button onClick={toggleTheme} className="fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 ">
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-blue-900" />
        )}
      </button>
    </div>
  );
}

export default ThemeToggle;
