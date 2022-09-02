import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main className="m-10">{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
