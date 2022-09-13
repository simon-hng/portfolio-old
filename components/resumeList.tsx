import Card, { cardProps } from "../components/card";
import cv from "../assets/cv.json";
import { sortingsType } from "./resume";
import { LayoutGroup, motion, Reorder } from "framer-motion";
import { useEffect, useState } from "react";

interface resumeListProps {
  sortedBy: sortingsType;
  sortAsc: boolean;
}

const comparators: {
  [sorting: sortingsType]: (a: cardProps, b: cardProps) => number;
} = {
  date: (a, b) => new Date(b.date[0]).getTime() - new Date(a.date[0]).getTime(),
  title: (a, b) => (a.headline > b.headline ? 1 : -1),
};

const ResumeList = ({ sortedBy, sortAsc }: resumeListProps) => {
  const [items, setItems] = useState([...cv.work, ...cv.education]);

  useEffect(() => {
    let sortedItems = [...items].sort(comparators[sortedBy]);
    if (sortAsc) sortedItems.reverse();

    setItems(sortedItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortedBy, sortAsc]);

  if (!sortedBy) return <Unsorted />;

  return (
    <div className="mt-2">
      <h2 className="font-bold text-xl text-text">
        Sorted by {sortedBy} {sortAsc ? "ascending" : "descending"}
      </h2>
      <LayoutGroup>
        {items.map((item) => (
          <motion.div layout key={item.headline + item.subheadline}>
            <Card {...item} />
          </motion.div>
        ))}
      </LayoutGroup>
    </div>
  );
};

const Unsorted = () => (
  <>
    <div className="mt-2">
      <h2 className="font-bold text-xl text-text">Working experience</h2>

      {cv.work.map((item) => (
        <Card key={item.headline} {...item} />
      ))}
    </div>

    <div className="mt-10">
      <h2 className="font-bold text-xl text-text">Education</h2>
      {cv.education.map((item) => (
        <Card key={item.headline} {...item} />
      ))}
    </div>
  </>
);

export default ResumeList;
