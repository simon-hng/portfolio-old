import cv from "../assets/cv.json";
interface skillsProps {}

const Skills = ({}: skillsProps) => (
  <section className="mt-20">
    <h2 className="font-bold text-3xl text-text">Skills</h2>

    <IconList title="Languages" icons={cv.skills.languages} />

    <IconList title="Frameworks" icons={cv.skills.frameworks} />

    <IconList title="Tools" icons={cv.skills.tools} />
  </section>
);

export default Skills;

interface iconListProps {
  icons: string[];
  title: string;
}

const IconList = ({ icons, title }: iconListProps) => {
  return (
    <div className="mt-2">
      <h2 className="font-bold text-xl text-text">{title}</h2>

      <div className="flex flex-wrap mt-5">
        {icons.map((skill: string) => (
          <div
            key={skill}
            className="duration-500 w-22 mr-5 mb-7 relative group"
          >
            <i
              className={`devicon-${skill.toLowerCase()}-plain 
              text-6xl duration-500
              group-hover:text-rosewater group-active:text-rosewater
              `}
            />
            <div className="absolute left-0 right-0 mx-auto min-w-min duration-500 opacity-0 group-hover:opacity-100 group-active:opacity-100">
              <p className="text-center text-rosewater">{skill}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
