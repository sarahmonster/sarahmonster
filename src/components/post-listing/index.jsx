import React from "react";
import { Link } from "gatsby";
import { Card, Paragraph } from 'nautilus-system/src';

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    const { postEdges } = this.props;
    postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div>
        {/* Your post list here. */
        postList.map(post => (
          <Card key={post.title} title={post.title} metadata={post.tags} media={post.cover}>
            <Paragraph noMargin size="small">{post.excerpt}</Paragraph>
            <Link to={post.path}>Read more</Link>
          </Card>
        ))}
      </div>
    );
  }
}

export default PostListing;
