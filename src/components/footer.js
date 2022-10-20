import * as React from "react";
// import PropTypes from "prop-types";

const weather = () => {
  const forecast = ["☀️", "☔️", "🌨"];
  return forecast[Math.floor(Math.random() * forecast.length)];
};

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="mx-10 py-8 text-center">
      Made in sunny Lancashire {weather()}
    </div>
  </footer>
);

// Header.propTypes = {
//   siteTitle: PropTypes.string
// };

// Header.defaultProps = {
//   siteTitle: ``
// };

export default Footer;
