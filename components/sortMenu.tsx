import { useEffect, useRef, useState } from "react";
import { IconButton } from "./iconButton";
import {
  sortMenuProps,
  sortings,
  SortDirectionIcon,
  sortingsType,
} from "./resume";

export const SortMenu = ({
  sortedBy,
  setSortedBy,
  sortAsc,
  setSortAsc,
}: sortMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
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
                {sortedBy === sort && <SortDirectionIcon sortAsc={sortAsc} />}
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

  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [buttonRef, setMenuOpen]);

  const redButton = `dark:text-red-600 dark:border-red-600 dark:fill-red-600 
                    text-red-800 border-red-800 fill-red-800`;

  return (
    <IconButton
      ref={buttonRef}
      className={menuOpen && redButton}
      onClick={onClick}
      text={menuOpen ? "no sort" : "sort by"}
    >
      {menuOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          className="w-6"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          className="w-6"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M4 18h4c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm1 6h10c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1z" />
        </svg>
      )}
    </IconButton>
  );
};
