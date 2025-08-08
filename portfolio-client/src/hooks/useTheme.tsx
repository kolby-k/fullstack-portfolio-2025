import { useEffect, useState } from "react";

function useTheme() {
  const [dark, setDark] = useState(false);

  function setThemeDark(isDark: boolean) {
    const root = document.documentElement; // <html>
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  function initTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    }
  }

  useEffect(() => {
    initTheme();
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    setThemeDark(!dark);
    setDark(!dark);
  };

  return { toggle, dark };
}

export default useTheme;
