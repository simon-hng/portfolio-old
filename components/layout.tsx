import { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  let initialThemeIsDark = true;

  if (typeof window !== "undefined") {
    initialThemeIsDark =
      localStorage.theme === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  const [isDarkMode, setIsDarkMode] = useState(initialThemeIsDark);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? "dark" : undefined}>
      <div className="bg-white text-slate-500 dark:bg-slate-900 dark:text-slate-400 flex justify-center duration-500">
        <main className="p-10 max-w-screen-lg">
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
