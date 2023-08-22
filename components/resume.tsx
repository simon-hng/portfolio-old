import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CakeIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import * as React from "react";
import { type ResumeItem } from "../data/resume";
import prettyDates from "../util/prettyDates";

interface Props {
  items: ResumeItem[];
}
const Resume = ({ items }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-3xl font-bold text-text">Resume</h2>

      <div className="mt-2 pl-5">
        {items?.map((item: ResumeItem) => (
          <article
            key={item.headline}
            className="relative border-l-2 border-text pl-8 pb-8 text-text last:border-0"
          >
            <div className="absolute top-0 left-0 h-10 w-10 translate-x-[-50%] rounded-full border-2 border-text bg-base p-2">
              {item.category === "work" && <BuildingOffice2Icon />}
              {item.category === "education" && <AcademicCapIcon />}
              {item.category === "extracurricular" && <HeartIcon />}
              {item.category === "birth" && <CakeIcon />}
            </div>
            <p className="text-subtext0">{prettyDates(item.date)}</p>
            <h2 className="text-lg font-bold">
              {item.headline}
              {item.subheadline && `, ${item.subheadline}`} - {item.location}
            </h2>
            {item.description && (
              <ul className="list-disc pl-4">
                {item.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Resume;
