import Card, { cardProps } from "../components/card";
import cv from "../assets/cv.json";
import { useState } from "react";

const sortings = ["date", "title"];
type sortingsType = typeof sortings[number];

interface sortDirectionProps {
  sortDesc: boolean;
}

const SortDirection = ({ sortDesc }: sortDirectionProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    className={` duration-300 w-6 fill-slate-400 hover:fill-white ${
      sortDesc && "rotate-180"
    }`}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M11 5v11.17l-4.88-4.88c-.39-.39-1.03-.39-1.42 0-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L13 16.17V5c0-.55-.45-1-1-1s-1 .45-1 1z" />
  </svg>
);

const Resume = () => {
  const [sortedBy, setSortedBy] = useState<sortingsType>();
  const [sortDesc, setSortDesc] = useState(true);

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="font-bold text-xl text-black dark:text-white">Resume</h2>

        <div className="relative group">
          <button
            onClick={() => setSortedBy(undefined)}
            className="btn flex justify-between"
          >
            <p className="pr-1">sort by</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              className="w-6 fill-slate-400"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M4 18h4c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm1 6h10c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1z" />
            </svg>
          </button>
          <ul className="duration-500 w-full border-slate-400 absolute h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100">
            {sortings.map((sort) => (
              <li className="my-1 btn bg-slate-900" key={sort}>
                <button
                  onClick={() => {
                    if (sortedBy === sort) setSortDesc(!sortDesc);
                    setSortedBy(sort);
                  }}
                  className="w-full flex justify-between"
                >
                  <p>{sort}</p>
                  {sortedBy === sort && <SortDirection sortDesc={sortDesc} />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ResumeList sortDesc={sortDesc} sortedBy={sortedBy} />
    </div>
  );
};

const ResumeList = ({ sortedBy, sortDesc }) => {
  if (!sortedBy) return <Unsorted />;

  const comparators: {
    [sorting: sortingsType]: (a: cardProps, b: cardProps) => number;
  } = {
    date: (a, b) =>
      new Date(b.date[0]).getTime() - new Date(a.date[0]).getTime(),
    title: (a, b) => (a.headline > b.headline ? 1 : -1),
  };

  let resumeItems = [...cv.work, ...cv.education].sort(comparators[sortedBy]);
  if (sortDesc) resumeItems.reverse();

  return (
    <div>
      {resumeItems.map((item) => (
        <Card key={item.headline + item.subheadline} {...item} />
      ))}
    </div>
  );
};

const Unsorted = () => (
  <>
    <div className="mt-10">
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

export default Resume;
