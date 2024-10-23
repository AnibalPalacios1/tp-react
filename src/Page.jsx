import Header from "./components/Header";
import { headerRouteLinks } from "./data/data";
import Footer from "./components/Footer";
import PropTypes from "prop-types";

function Page({ children, activelink }) {
  return (
    <div>
      <Header navLinks={headerRouteLinks} activeLink={activelink} />
      {children}
      <Footer/>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.element.isRequired,
  activeLink: PropTypes.string,
};

export default Page;
