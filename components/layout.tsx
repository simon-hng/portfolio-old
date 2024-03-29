import { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import { cx } from "class-variance-authority";
import { inter } from "../styles/fonts";

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
      <div
        className={cx(
          "flex justify-center bg-base text-subtext0 duration-500",
          inter.className
        )}
      >
        <div className="max-w-screen-lg px-10">
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

          <main>{children}</main>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
