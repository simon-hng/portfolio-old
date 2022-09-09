import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCode } from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <footer>
    <hr className="border-text mt-20"/>
    <div className="py-10 flex justify-between">
      <p>
        made with <FontAwesomeIcon icon={faHeart} className="inline h-4" /> in
        neovim
      </p>
      <a
        href="https://github.com/simon-hng/portfolio/"
        target="_blank"
        rel="noreferrer"
        className="duration-500 hover:text-rosewater"
      >
        source <FontAwesomeIcon icon={faCode} className="inline h-4" />
      </a>
    </div>
  </footer>
);

export default Footer;
