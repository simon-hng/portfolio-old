import Card, { cardProps } from "../components/card";
import cv from "../assets/cv.json";
import * as React from "react";
import { sortingsType } from "./resume";

export const ResumeList = ({ sortedBy, sortDesc: sortAsc }) => {
  if (!sortedBy) return <Unsorted />;

  const comparators: {
    [sorting: sortingsType]: (a: cardProps, b: cardProps) => number;
  } = {
    date: (a, b) =>
      new Date(b.date[0]).getTime() - new Date(a.date[0]).getTime(),
    title: (a, b) => (a.headline > b.headline ? 1 : -1),
  };

  let resumeItems = [...cv.work, ...cv.education].sort(comparators[sortedBy]);
  if (sortAsc) resumeItems.reverse();

  return (
    <div className="mt-2">
      <h2 className="font-bold text-xl text-black dark:text-white">
        Sorted by {sortedBy} {sortAsc ? "ascending" : "descending"}
      </h2>

      {resumeItems.map((item) => (
        <Card key={item.headline + item.subheadline} {...item} />
      ))}
    </div>
  );
};

export const Unsorted = () => (
  <>
    <div className="mt-2">
      <h2 className="font-bold text-xl text-black dark:text-white">
        Working experience
      </h2>

      {cv.work.map((item) => (
        <Card key={item.headline} {...item} />
      ))}
    </div>

    <div className="mt-10">
      <h2 className="font-bold text-xl text-black dark:text-white">
        Education
      </h2>
      {cv.education.map((item) => (
        <Card key={item.headline} {...item} />
      ))}
    </div>
  </>
);
