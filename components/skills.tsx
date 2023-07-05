import skills from "../assets/skills.json";

const Skills = () => (
  <section className="mt-20">
    <h2 className="text-3xl font-bold text-text">Skills</h2>

    <IconList title="Languages" icons={skills.languages} />

    <IconList title="Frameworks" icons={skills.frameworks} />

    <IconList title="Tools" icons={skills.tools} />
  </section>
);

interface iconListProps {
  icons: string[];
  title: string;
}

const IconList = ({ icons, title }: iconListProps) => {
  return (
    <article className="mt-2">
      <h2 className="text-xl font-bold text-text">{title}</h2>

      <div className="mt-5 flex flex-wrap">
        {icons.map((skill: string) => (
          <button
            key={skill}
            className="w-22 group relative mr-5 mb-7 outline-teal duration-500 focus:outline-none"
          >
            <i
              className={`devicon-${skill.toLowerCase()}-plain 
              text-6xl duration-500 group-hover:text-teal group-focus:text-teal`}
            />
            <div
              className="absolute left-0 right-0 mx-auto min-w-min opacity-0 duration-500 
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
