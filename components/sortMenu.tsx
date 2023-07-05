import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { sortings, type sortingsType } from "./resume";
import IconButton from "./iconButton";
import SortMenuButton from "./sortMenuButton";

export interface sortMenuProps {
  sortedBy: sortingsType;
  setSortedBy: (sortedBy: sortingsType) => void;
  sortAsc: boolean;
  setSortAsc: (sortAsc: boolean) => void;
}

const SortMenu = ({
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
      className="relative z-10"
      onMouseOver={() => setMenuOpen(true)}
      onMouseOut={() => setMenuOpen(false)}
    >
      <SortMenuButton
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setSortedBy={setSortedBy}
      />

      <ul
        key="sortMenuOptions"
        className={`duration-500 w-full absolute opacity-0 overflow-hidden h-0 ${
          menuOpen && "opacity-100 h-auto"
        }`}
      >
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
    </div>
  );
};

export default SortMenu;
