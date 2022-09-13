import Card, { cardProps } from "../components/card";
import cv from "../assets/cv.json";
import { sortingsType } from "./resume";
import { LayoutGroup, motion } from "framer-motion";
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

type resumeItem = cardProps | string;

const ResumeList = ({ sortedBy, sortAsc }: resumeListProps) => {
  const [items, setItems] = useState<resumeItem[]>(cv.resume);

  useEffect(() => {
    let sortedItems: resumeItem[] = [...cv.resume];

    if (!sortedBy) {
      sortedItems.unshift("Working experience");

      sortedItems.splice(
        sortedItems.findIndex(
          (item) => typeof item !== "string" && item.category === "education"
        ),
        0,
        "Education"
      );
    } else {
      sortedItems.sort(comparators[sortedBy]);
      if (sortAsc) sortedItems.reverse();

      sortedItems.unshift(
        `Sorted by ${sortedBy} ${sortAsc ? "ascending" : "descending"}`
      );
    }

    setItems(sortedItems);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortedBy, sortAsc]);

  return (
    <div className="mt-2">
      <LayoutGroup>
        {items.map((item) => {
          return typeof item === "string" ? (
            <motion.div layout key={item}>
              <h2 className="font-bold text-xl text-text">{item}</h2>
            </motion.div>
          ) : (
            <motion.div layout key={item + item.headline + item.subheadline}>
              <Card {...item} />
            </motion.div>
          );
        })}
      </LayoutGroup>
    </div>
  );
};

export default ResumeList;
