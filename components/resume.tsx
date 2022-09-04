import Card from "../components/card";
import cv from "../assets/cv.json";

export const Resume = () => {
  return (
    <div>
      <div className="mt-10">
        <h2 className="font-bold text-xl text-black dark:text-white">
          Working experience
        </h2>
        {cv.work.map((item) => (
          <Card key={item.headline} {...item} />
        ))}
      </div>

      <div className="mt-10">
        <h2 className="font-bold text-xl text-black dark:text-white">
          Education
        </h2>
        {cv.education.map((item) => (
          <Card key={item.headline} {...item} />
        ))}
      </div>
    </div>
  );
};

