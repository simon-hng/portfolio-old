import { useState } from "react";
import * as React from "react";
import { ResumeList } from "./resumeList";
import { SortMenu } from "./sortMenu";

export const sortings = ["date", "title"];
export type sortingsType = typeof sortings[number];

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
    <section>
      <div className="flex justify-between">
        <h2 className="font-bold text-3xl text-text">
          Resume
        </h2>

        <SortMenu {...sortMenuProps} />
      </div>

      <ResumeList sortDesc={sortAsc} sortedBy={sortedBy} />
    </section>
  );
};

export default Resume;
