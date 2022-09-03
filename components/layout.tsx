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
      <div className="bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 flex justify-center duration-500">
        <main className="p-10 max-w-screen-lg">
          <header className="flex flex-row-reverse">
            <button
              className="rounded-full border-solid border-2 border-slate-500 dark:border-slate-400 dark:text-slate-400 px-2"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              theme
            </button>
          </header>
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
