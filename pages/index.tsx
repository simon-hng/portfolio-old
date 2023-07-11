import Head from "next/head";
import Hero from "../components/hero";
import Resume from "../components/resume";

const Home = () => (
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
        <Resume />
      </div>
    </div>
  </>
);

export default Home;
