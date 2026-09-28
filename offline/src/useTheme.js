import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((e)=>e === "light" ? "dark" : "light"
    );
  };

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);

    console.log("Current theme:", theme);
  }, [theme]);

  return { theme, toggleTheme };
};

export default useTheme;