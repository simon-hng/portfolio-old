import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface headerProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

const Header = ({ setIsDarkMode, isDarkMode }: headerProps) => (
  <header className="flex flex-row-reverse space-x-2 space-x-reverse py-10">
    <button
      aria-label="toggle theme"
      className="btn w-14"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isDarkMode ? (
        <FontAwesomeIcon icon={faSun} className="h-5" />
      ) : (
        <FontAwesomeIcon icon={faMoon} className="h-5" />
      )}
    </button>

    <Link
      className="btn"
      aria-label="linkedin account"
      href="https://www.linkedin.com/in/simon-hng"
      target="_blank"
    >
      <FontAwesomeIcon icon={faLinkedinIn} className="h-5" />
    </Link>

    <Link
      className="btn"
      aria-label="github account"
      href="https://www.github.com/simon-hng/"
      target="_blank"
    >
      <FontAwesomeIcon icon={faGithubAlt} className="h-5" />
    </Link>
  </header>
);

export default Header;
