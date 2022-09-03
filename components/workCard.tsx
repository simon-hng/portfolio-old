interface workCardProps {
  name: string;
  location: string;
  position: string;
  date: string;
  activities: string[];
}

const WorkCard = (props: workCardProps) => (
  <div className="my-5 card">
    <h3>
      <span className="font-bold text-xl">{props.name}</span>
    </h3>

    <p className="text-sm">{props.position}</p>

    <p>
      {props.location}, {props.date}
    </p>
  </div>
);

export default WorkCard;
