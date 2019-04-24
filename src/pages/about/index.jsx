import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../../layout";
import About from "../../components/about";
import config from "../../../data/site-config";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`About | ${config.siteTitle}`} />
          <About />
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
