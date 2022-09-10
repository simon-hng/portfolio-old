import { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";

interface layoutProps {
  children: React.ReactElement;
}

const Layout = ({ children }: layoutProps) => {
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
    <div className={isDarkMode ? "dark mocha" : "latte"}>
      <div className="bg-base text-subtext0 flex justify-center duration-500">
        <div className="px-10 max-w-screen-lg">
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

          <main>{children}</main>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
