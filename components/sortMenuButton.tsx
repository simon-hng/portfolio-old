import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { sortingsType } from "./resume";
import IconButton from "./iconButton";

interface sortMenuButtonProps {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
  setSortedBy: (sortedBy: sortingsType) => void;
}

const SortMenuButton = ({
  menuOpen,
  setSortedBy,
  setMenuOpen,
}: sortMenuButtonProps) => {
  const onClick = () => {
    if (!menuOpen) return setMenuOpen(true);

    setSortedBy(undefined);
    setMenuOpen(false);
  };

  const redButton = `text-red border-red fill-red`;

  return (
    <IconButton
      className={menuOpen && redButton}
      onClick={onClick}
      text={menuOpen ? "no sort" : "sort by"}
    >
      {menuOpen ? (
        <FontAwesomeIcon icon={faXmark} className="w-4 h-6" />
      ) : (
        <FontAwesomeIcon icon={faBars} className="w-4" />
      )}
    </IconButton>
  );
};

export default SortMenuButton;
