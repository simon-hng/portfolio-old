interface headerProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

const btn =
  "rounded-full border-solid border-2 border-slate-500 dark:border-slate-400 dark:text-slate-400 px-2";

const Header = ({ setIsDarkMode, isDarkMode }: headerProps) => (
  <header className="flex flex-row-reverse">
    <button className={btn} onClick={() => setIsDarkMode(!isDarkMode)}>
      theme
    </button>

    <button className={`${btn} mr-2`}>sort by</button>
  </header>
);

export default Header;
