import prettyDates from "../util/prettyDates";

export interface cardProps {
  headline: string;
  location: string;
  subheadline: string;
  date: string[];
  description: string[];
}

const Card = (props: cardProps) => (
  <details
    className="my-5 shadow-md
        duration-500 cursor-pointer rounded-lg 
        bg-base dark:bg-mantle
        hover:shadow-lg hover:scale-105"
  >
    <summary className="block p-5">
      <h3>
        <span className="font-bold text-xl text-text">{props.headline}</span>
      </h3>

      <p className="text-sm">{props.subheadline}</p>

      <p>
        {props.location}, {prettyDates(props.date)}
      </p>
    </summary>

    <ul className="p-5 pt-0 list-disc list-inside">
      {props.description.map((desc, index) => (
        <li key={index}>{desc}</li>
      ))}
    </ul>
  </details>
);

export default Card;
