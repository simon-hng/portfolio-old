import prettyDates from "../util/prettyDates";

export interface cardProps {
  headline: string;
  location: string;
  subheadline: string;
  date: string[];
  description: string[];
  category?: string;
}

const Card = (props: cardProps) => (
  <details className="my-5 cursor-pointer rounded-lg bg-base shadow-md duration-500 hover:scale-105 hover:shadow-lg dark:bg-mantle">
    <summary className="block rounded-lg p-5 duration-300">
      <h3>
        <span className="text-xl font-bold text-text">{props.headline}</span>
      </h3>

      <p className="text-sm">{props.subheadline}</p>

      <p>
        {props.location}, {prettyDates(props.date)}
      </p>
    </summary>

    <ul className="list-inside list-disc p-5 pt-0">
      {props.description.map((desc, index) => (
        <li key={index}>{desc}</li>
      ))}
    </ul>
  </details>
);

export default Card;
