import { useState } from "react";
import * as React from "react";
import { IconButton } from "./iconButton";
import { ResumeList } from "./resumeList";

const sortings = ["date", "title"];
export type sortingsType = typeof sortings[number];

interface sortDirectionIconProps {
  sortAsc: boolean;
}

const SortDirectionIcon = ({ sortAsc }: sortDirectionIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    className={` duration-300 w-6 ${sortAsc && "rotate-180"}`}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M11 5v11.17l-4.88-4.88c-.39-.39-1.03-.39-1.42 0-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L13 16.17V5c0-.55-.45-1-1-1s-1 .45-1 1z" />
  </svg>
);

interface sortMenuProps {
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
  return (
    <div className="relative group">
      <IconButton
        className="dark:hover:text-red-600 dark:hover:border-red-600 dark:hover:fill-red-600 hover:text-red-800 hover:border-red-800 hover:fill-red-800"
        onClick={() => setSortedBy(undefined)}
        text="sort by"
      >
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
      </IconButton>

      <ul className="duration-500 w-full border-gray-400 absolute h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100">
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
    </div>
  );
};

const Resume = () => {
  const [sortedBy, setSortedBy] = useState<sortingsType>();
  const [sortAsc, setSortAsc] = useState(false);

  const sortMenuProps = { sortedBy, setSortedBy, sortAsc, setSortAsc };

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="font-bold text-3xl text-black dark:text-white">
          Resume
        </h2>

        <SortMenu {...sortMenuProps} />
      </div>

      <ResumeList sortDesc={sortAsc} sortedBy={sortedBy} />
    </div>
  );
};

export default Resume;
