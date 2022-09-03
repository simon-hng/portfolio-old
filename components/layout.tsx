import { useEffect, useState } from "react";
import Footer from "./footer";

const Layout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div className={isDarkMode && "dark"}>
      <main className="bg-white text-slate-500 dark:bg-slate-900 dark:text-slate-400 p-10 duration-500">
        <button
          className="rounded-full border-solid border-2 border-slate-500 dark:border-slate-400 dark:text-slate-400 px-2"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          change theme
        </button>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
