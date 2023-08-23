import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Button } from "./ui/button";

interface headerProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

const Header = ({ setIsDarkMode, isDarkMode }: headerProps) => (
  <header className="flex flex-row-reverse space-x-2 space-x-reverse py-10">
    <Button
      aria-label="toggle theme"
      className="btn w-14"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isDarkMode && <FontAwesomeIcon icon={faSun} className="h-5" />}
      {!isDarkMode && <FontAwesomeIcon icon={faMoon} className="h-5" />}
    </Button>

    <Button asChild>
      <Link
        aria-label="linkedin account"
        href="https://www.linkedin.com/in/simon-hng"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedinIn} className="h-5" />
      </Link>
    </Button>

    <Button asChild>
      <Link
        className="btn"
        aria-label="github account"
        href="https://www.github.com/simon-hng/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithubAlt} className="h-5" />
      </Link>
    </Button>
  </header>
);

export default Header;
