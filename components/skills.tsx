import cv from "../assets/cv.json";
interface skillsProps {}

const Skills = ({}: skillsProps) => (
  <section className="mt-20">
    <h2 className="font-bold text-3xl text-black dark:text-white">Skills</h2>

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
      <h2 className="font-bold text-xl text-black dark:text-white">{title}</h2>

      <div className="flex flex-wrap mt-5">
        {icons.map((skill: string) => (
          <div
            key={skill}
            className="duration-500 w-20 mr-5 mb-5 relative group flex flex-col items-center"
          >
            <i
              className={`devicon-${skill.toLowerCase()}-plain text-6xl duration-500 group-hover:text-black dark:group-hover:text-white`}
            />
            <div className="duration-500 overflow-hidden opacity-0 group-hover:opacity-100">
              <p className="text-black dark:text-white">{skill}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
