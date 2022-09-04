interface headerProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

const Header = ({ setIsDarkMode, isDarkMode }: headerProps) => (
  <header className="flex flex-row-reverse">
    <button className="btn" onClick={() => setIsDarkMode(!isDarkMode)}>
      theme
    </button>
  </header>
);

export default Header;
