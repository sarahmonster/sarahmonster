import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { Heading, Paragraph } from "nautilus-system/src";

import Layout from "../../layout";
import PostListing from "../../components/post-listing";
import SpeakingEngagementList from "../../components/SpeakingEngagementList";
import SEO from "../../components/SEO";
import config from "../../../data/site-config";

class Index extends React.Component {
  render() {
    const allTalks = this.props.data.allMarkdownRemark.edges;
    const allEvents = this.props.data.allSpeakingEngagementsJson.edges;

    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />

        <Heading size="xxlarge" level={1}>Speaking</Heading>
        <Heading size="medium" level={0}>Sometimes I do it.</Heading>

        <Paragraph>No lie, I'm sometimes terrified of public speaking. But I think it's good to do things that terrify you, and I like sharing my ideas, so I do it...pretty frequently.</Paragraph>

        <Heading size="large" level={2}>Speaking engagements</Heading>
        <SpeakingEngagementList postEdges={allEvents} />

        <Heading size="large" level={2}>Things I've talked about</Heading>
        <PostListing postEdges={allTalks} />
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query getAllTalks {
    allSpeakingEngagementsJson {
      edges {
        node {
          id
          title
          date
          url
          city
          countryCode
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/talks/"} },
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


