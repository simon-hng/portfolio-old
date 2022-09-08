import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faBars,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { IconButton } from "./iconButton";
import { sortMenuProps, sortings, sortingsType } from "./resume";

export const SortMenu = ({
  sortedBy,
  setSortedBy,
  sortAsc,
  setSortAsc,
}: sortMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setMenuOpen]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseOver={() => setMenuOpen(true)}
      onMouseOut={() => setMenuOpen(false)}
    >
      <SortMenuButton
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setSortedBy={setSortedBy}
      />

      {menuOpen && (
        <ul className="duration-500 w-full border-gray-400 absolute">
          {sortings.map((sort) => (
            <li key={sort}>
              <IconButton
                className="my-1"
                onClick={() => {
                  if (sortedBy === sort) setSortAsc(!sortAsc);
                  setSortedBy(sort);
                }}
                text={sort}
              >
                {sortedBy === sort && (
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className={`${sortAsc && "rotate-180"} duration-300 w-4`}
                  />
                )}
              </IconButton>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

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

  const redButton = `dark:text-red-600 dark:border-red-600 dark:fill-red-600 
                    text-red-800 border-red-800 fill-red-800`;

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
