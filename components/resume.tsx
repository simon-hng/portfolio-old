import { useState } from "react";
import * as React from "react";
import { ResumeList } from "./resumeList";
import { SortMenu } from "./sortMenu";

export const sortings = ["date", "title"];
export type sortingsType = typeof sortings[number];

interface sortDirectionIconProps {
  sortAsc: boolean;
}

export const SortDirectionIcon = ({ sortAsc }: sortDirectionIconProps) => (
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

export interface sortMenuProps {
  sortedBy: sortingsType;
  setSortedBy: (sortedBy: sortingsType) => void;
  sortAsc: boolean;
  setSortAsc: (sortAsc: boolean) => void;
}
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
