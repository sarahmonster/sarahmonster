import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import rehypeReact from "rehype-react"
import { Heading, Paragraph } from 'nautilus-system/src';

import Layout from "../../layout";
import UserInfo from "../../components/user-info";
import PostTags from "../../components/post-tags";
import PostDate from "../../components/post-date";
import SEO from "../../components/SEO";
import config from "../../../data/site-config";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: Heading,
    h2: Heading,
    h3: Heading,
    p: Paragraph
  },
}).Compiler


export default class TalkTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;

    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />

            <Heading level={1} size="title">{post.title}</Heading>

            { renderAst(postNode.htmlAst) }

            <PostTags tags={post.tags} />
            <UserInfo config={config} />
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TalkBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
