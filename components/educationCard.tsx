interface educationCardProps {
  name: string;
  location: string;
  degree: string;
  date: string;
  description?: string;
}

const EducationCard = (props: educationCardProps) => (
  <div className="my-5 card">
    <h3>
      <span className="font-bold text-xl">{props.name}</span>
    </h3>

    <p className="text-sm">{props.degree}</p>

    <p>
      {props.location}, {props.date}
    </p>
  </div>
);

export default EducationCard;
