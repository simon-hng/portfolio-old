import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { sortings, type sortingsType } from "./resume";
import IconButton from "./iconButton";
import SortMenuButton from "./sortMenuButton";

export interface sortMenuProps {
  sortedBy: sortingsType;
  setSortedBy: Dispatch<SetStateAction<sortingsType>>;
  sortAsc: boolean;
  setSortAsc: Dispatch<SetStateAction<boolean>>;
}

const SortMenu = ({
  sortedBy,
  setSortedBy,
  sortAsc,
  setSortAsc,
}: sortMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
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
        className={`absolute h-0 w-full overflow-hidden opacity-0 duration-500 ${
          menuOpen && "h-auto opacity-100"
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
                  className={`${sortAsc && "rotate-180"} w-4 duration-300`}
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
