import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

interface headerProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

const Header = ({ setIsDarkMode, isDarkMode }: headerProps) => (
  <header className="py-10 flex flex-row-reverse space-x-2 space-x-reverse">
    <button className="btn w-14" onClick={() => setIsDarkMode(!isDarkMode)}>
      {isDarkMode ? (
        <FontAwesomeIcon icon={faSun} className="h-5" />
      ) : (
        <FontAwesomeIcon icon={faMoon} className="h-5" />
      )}
    </button>

    <a
      className="btn"
      href="https://www.github.com/simon-hng/"
      rel="noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon icon={faGithubAlt} className="h-5" />
    </a>

    <a className="btn" href="mailto:simon.huang@tum.de">
      <FontAwesomeIcon icon={faEnvelope} className="h-5" />
    </a>
  </header>
);

export default Header;
