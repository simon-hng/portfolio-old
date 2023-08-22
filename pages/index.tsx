import Head from "next/head";
import { resume, type ResumeItem } from "../assets/resume";
import Hero from "../components/hero";
import Resume from "../components/resume";

interface Props {
  items: ResumeItem[];
}
const Home = ({ items }: Props) => (
  <>
    <Head>
      <title>Simon Huang</title>
      <meta
        name="description"
        content="Portfolio of Simon Huang. Student at TUM. Working student @siemens. GitHub addict"
      />
      <meta property="og:title" content="Portfolio of Simon Huang" />
      <meta
        property="og:description"
        content="Portfolio of Simon Huang. Student at TUM. Working student @siemens. GitHub addict"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="flex justify-center">
      <div>
        <Hero />
        <Resume items={items} />
      </div>
    </div>
  </>
);

export function getStaticProps() {
  return {
    props: {
      items: resume.sort(
        (a, b) => new Date(b.date[0]).getTime() - new Date(a.date[0]).getTime()
      ),
    },
  };
}

export default Home;
