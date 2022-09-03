import prettyDates from "../util/prettyDates";

interface cardProps {
  headline: string;
  location: string;
  subheadline: string;
  date: string[];
  description?: string[] | string;
}

const Card = (props: cardProps) => (
  <div className="my-5 card">
    <h3>
      <span className="font-bold text-xl text-black dark:text-white">{props.headline}</span>
    </h3>

    <p className="text-sm">{props.subheadline}</p>

    <p>
      {props.location}, {prettyDates(props.date)}
    </p>
  </div>
);

export default Card;
