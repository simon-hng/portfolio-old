import { cx } from "class-variance-authority";
import Image from "next/image";

const Link = ({ href, text, className }) => (
  <a
    className={cx("font-bold text-text duration-500 " + className)}
    href={href}
  >
    {text}
  </a>
);

const Hero = () => (
  <div className="my-20 flex flex-col items-center space-y-5 md:flex-row md:space-x-5">
    <div className="h-48 w-48 shrink-0 overflow-clip rounded-full">
      <Image
        src="https://avatars.githubusercontent.com/u/25489463?s=400&u=669e0467028bbd791a9a24e718ee7927c87edaca&v=4"
        alt="Image of my face"
        width="192"
        height="192"
        draggable="false"
      />
    </div>

    <div className="flex flex-col justify-center text-center md:text-left">
      <h1 className="mb-5 text-6xl text-text">Hello, I&apos;m&nbsp;Simon</h1>

      <p className="text-xl">
        Informatics student at{" "}
        <Link
          href="https://www.in.tum.de/"
          text="TUM"
          className="hover:text-tum-blue"
        />
        , working student at{" "}
        <Link
          href="https://www.siemens.com"
          text="Siemens"
          className="hover:text-siemens-petrol"
        />
        .
      </p>
    </div>
  </div>
);

export default Hero;
