interface headerProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

const Header = ({ setIsDarkMode, isDarkMode }: headerProps) => (
  <header className="flex flex-row-reverse space-x-2 space-x-reverse">
    <button className="btn" onClick={() => setIsDarkMode(!isDarkMode)}>
      theme
    </button>

    <a
      className="btn"
      href="https://www.github.com/simon-hng/"
      rel="noreferrer"
      target="_blank"
    >
      github
    </a>

    <a
      className="btn"
      href="mailto:simon.huang@tum.de"
    >
      mail
    </a>
  </header>
);

export default Header;
