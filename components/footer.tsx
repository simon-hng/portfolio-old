import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <footer>
    <hr className="border-text mt-20" />
    <div className="py-10 flex flex-row-reverse justify-between">
      <a
        href="https://github.com/simon-hng/portfolio/"
        target="_blank"
        rel="noreferrer"
        className="duration-500 hover:text-blue underline"
      >
        source <FontAwesomeIcon icon={faCode} className="inline h-4" />
      </a>
    </div>
  </footer>
);

export default Footer;
