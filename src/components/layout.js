import * as React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";
import { useStaticQuery, graphql } from "gatsby";

import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div class="flex flex-col h-screen justify-between">
      <Header
        siteTitle={data.site.siteMetadata?.title || `Woop woop!`}
      ></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
