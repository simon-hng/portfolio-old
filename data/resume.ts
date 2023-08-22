export type ResumeItem = {
  headline: string;
  location: string;
  subheadline?: string;
  date: string[];
  description: string[];
  category: "work" | "education" | "extracurricular" | "birth";
};

export const resume: ResumeItem[] = [
  {
    headline: "Siemens AG",
    location: "Munich",
    subheadline: "Working student",
    date: ["2021-11-01", "2023-09-01"],
    description: [
      "Led development of an internal service tool, streamlining processes and improving team efficiency.",
      "Implemented GitLab CI/CD for continuous integration and deployment.",
      "Managed infrastructure in AWS using Terraform, optimizing resource utilization and reducing complexity.",
      "Utilized OpenSearch for monitoring and data analysis, providing valuable insights for error detection.",
    ],
    category: "work",
  },
  {
    headline: "Technical University of Munich",
    location: "Munich",
    subheadline: "Tutor",
    date: ["2020-10-01", "2021-10-01"],
    description: [
      "Tutored students in Math preparation, PGDP (Practical programming), and EIST (Introduction to software engineering) courses, providing guidance and support in mastering the course material.",
      "Provided tutoring and mentoring to students, assisting them in understanding complex concepts and improving their overall performance.",
      "Conducted exam grading, ensuring fairness and accuracy in evaluating student assessments.",
    ],
    category: "work",
  },
  {
    headline: "olli design",
    location: "Hamburg",
    subheadline: "Web Developer",
    date: ["2018-07-01", "2019-07-01"],
    description: [
      "Developed corporate websites, creating visually appealing and functional web solutions to meet clients' needs.",
      "Utilized CMS platforms such as Typo3 to build and manage website content, ensuring easy maintenance and updates.",
      "Designed and implemented Typo3 templates, customizing the appearance and layout of websites to align with client branding and requirements.",
    ],
    category: "work",
  },
  {
    headline: "SinnerSchrader",
    location: "Hamburg",
    subheadline: "Web Development Internship",
    date: ["2018-01-01"],
    description: [
      "Strong experience in frontend development, creating engaging and user-friendly web interfaces.",
      "Adherence to industry best practices, ensuring high-quality code, performance optimization, and responsive design.",
      "Proficient in utilizing NodeJS, NPM, Gulp, Grunt, and other relevant tools to streamline development processes and enhance productivity.",
    ],
    category: "work",
  },
  {
    headline: "luca design",
    location: "Hamburg",
    subheadline: "Frontend Developer",
    date: ["2016-11-01", "2017-01-01"],
    description: [
      "Extensive experience in frontend development, creating modern and responsive user interfaces using HTML, CSS, and JavaScript.",
    ],
    category: "work",
  },
  {
    headline: "opus5",
    location: "Hamburg",
    subheadline: "Frontend Development Internship",
    date: ["2016-01-01"],
    description: [
      "Extensive experience in frontend development using basic HTML, CSS, and JavaScript, creating intuitive and interactive user interfaces.",
      "Proficient in designing UIs using tools like Photoshop and Illustrator, translating design concepts into visually appealing web interfaces.",
    ],
    category: "work",
  },
  {
    headline: "Technical University of Munich",
    location: "Munich",
    subheadline: "M.Sc. Informatics",
    date: ["2023-10-01", "now"],
    description: ["Focus on Software Engineering and Machine Learning"],
    category: "education",
  },
  {
    headline: "Technical University of Munich",
    location: "Munich",
    subheadline: "B.Sc. Informatics",
    date: ["2019-10-01", "2023-10-01"],
    description: [
      "Application subject mathematics",
      "Thesis in Applied Software Engineering: Learning Analytics of Grading Programming Exercises",
    ],
    category: "education",
  },
  {
    headline: "Gymnasium Klosterschule",
    location: "Hamburg",
    subheadline: "Abitur",
    date: ["2011-08-01", "2019-06-21"],
    description: ["Secondary education similar to A levels"],
    category: "education",
  },
  {
    headline: "TUM.ai",
    location: "Munich",
    subheadline: "Active Member",
    date: ["2023-06-01", "now"],
    description: [
      "Led technical projects for the development and implementation of an internal brand and design system, ensuring consistent and cohesive visual identity across company products and services.",
      "Played a key role in the development of internal tools, utilizing Next.js, Python, and various SaaS solutions to streamline workflows and enhance infrastructure capabilities.",
      "Actively participated in workshops covering a diverse range of topics, including Responsible AI and Communication Skills, fostering both technical and soft skill development in areas such as AI ethics and effective communication.",
    ],
    category: "extracurricular",
  },
  {
    headline: "Hello World!",
    location: "Rostock",
    date: ["2000-12-07"],
    description: [
      "I was born on December 7th in the small harbour city of Rostock",
    ],
    category: "birth",
  },
];
