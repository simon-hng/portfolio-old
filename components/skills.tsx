import cv from "../assets/cv.json";

const Skills = () => (
  <section className="mt-20">
    <h2 className="font-bold text-3xl text-text">Skills</h2>

    <IconList title="Languages" icons={cv.skills.languages} />

    <IconList title="Frameworks" icons={cv.skills.frameworks} />

    <IconList title="Tools" icons={cv.skills.tools} />
  </section>
);

interface iconListProps {
  icons: string[];
  title: string;
}

const IconList = ({ icons, title }: iconListProps) => {
  return (
    <article className="mt-2">
      <h2 className="font-bold text-xl text-text">{title}</h2>

      <div className="flex flex-wrap mt-5">
        {icons.map((skill: string) => (
          <button
            key={skill}
            className="duration-500 w-22 mr-5 mb-7 relative group outline-teal focus:outline-none"
          >
            <i
              className={`devicon-${skill.toLowerCase()}-plain 
              text-6xl duration-500 group-hover:text-teal group-focus:text-teal`}
            />
            <div
              className="absolute left-0 right-0 mx-auto min-w-min duration-500 opacity-0 
              group-hover:opacity-100 group-focus:opacity-100"
            >
              <p className="text-center text-teal">{skill}</p>
            </div>
          </button>
        ))}
      </div>
    </article>
  );
};

export default Skills;
