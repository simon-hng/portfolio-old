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
      <span className="font-bold text-xl">{props.headline}</span>
    </h3>

    <p className="text-sm">{props.subheadline}</p>

    <p>
      {props.location}, {prettyDates(props.date)}
    </p>
  </div>
);

const prettyDates = (dates: string[]) => {
  const prettyDate = (dateString: string) => {
    //TODO localization
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    if (dateString === "now") return "now";

    const date = new Date(dateString);

    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  console.log(dates);
  return dates.map((date) => prettyDate(date)).join(" - ");
};

export default Card;
