import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../../layout";
import PostListing from "../../components/post-listing";
import SEO from "../../components/SEO";
import config from "../../../data/site-config";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query GetAllStories {
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/posts/"} },
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
