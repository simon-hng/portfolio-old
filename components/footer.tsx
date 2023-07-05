import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <footer>
    <hr className="mt-20 border-text" />
    <div className="flex flex-row-reverse justify-between py-10">
      <a
        href="https://github.com/simon-hng/portfolio/"
        target="_blank"
        rel="noreferrer"
        className="underline duration-500 hover:text-blue"
      >
        source <FontAwesomeIcon icon={faCode} className="inline h-4" />
      </a>
    </div>
  </footer>
);

export default Footer;
