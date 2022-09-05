import { useState } from "react";
import prettyDates from "../util/prettyDates";

export interface cardProps {
  headline: string;
  location: string;
  subheadline: string;
  date: string[];
  description: string[];
}

const Card = (props: cardProps) => {
  const [descriptionShown, setDescriptionShown] = useState(false);

  return (
    <div
      className="my-5 p-5 shadow-md
      duration-200 rounded-lg cursor-pointer
      border-2 border-white border-solid
      hover:shadow-lg hover:scale-105"
      onClick={() => setDescriptionShown(!descriptionShown)}
    >
      <h3>
        <span className="font-bold text-xl text-black dark:text-white">
          {props.headline}
        </span>
      </h3>

      <p className="text-sm">{props.subheadline}</p>

      <p>
        {props.location}, {prettyDates(props.date)}
      </p>

      {descriptionShown && (
        <ul className="mt-2 list-disc list-inside">
          {props.description.map((desc) => (
            // eslint-disable-next-line react/jsx-key
            <li>{desc}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Card;
