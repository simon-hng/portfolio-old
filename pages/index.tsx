import Head from "next/head";
import Hero from "../components/hero";
import Resume from "../components/resume";
import Skills from "../components/skills";

const Home = () => (
  <>
    <Head>
      <title>Simon Huang</title>
      <meta name="description" content="Personal portfolio" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="flex justify-center">
      <div>
        <Hero />

        <Resume />

        <Skills />
      </div>
    </div>
  </>
);

export default Home;
