import * as React from "react";
import PropTypes from "prop-types";

const Header = ({ siteTitle }) => (
  <header>
    <div className="mx-10 py-8 text-center border-b-2 border-grey-200">
      <h1 className="text-2xl font-bold">{siteTitle}</h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
