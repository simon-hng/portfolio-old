import Layout from "../components/layout";
import "../styles/globals.css";
import "devicon/devicon.min.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
