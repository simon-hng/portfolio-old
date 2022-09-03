interface headerProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

const Header = ({ setIsDarkMode, isDarkMode }: headerProps) => (
  <header className="flex flex-row-reverse">
    <button
      className="rounded-full border-solid border-2 border-slate-500 dark:border-slate-400 dark:text-slate-400 px-2"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      theme
    </button>
  </header>
);

export default Header;
