import React from "react";
import { Link } from "gatsby";
import { Card, Paragraph } from 'nautilus-system/src';
import countryFlagEmoji from "country-flag-emoji";
import { format } from "date-fns";

class SpeakingEngagementList extends React.Component {
  getPostList() {
    const postList = [];
    const { postEdges } = this.props;
    postEdges.forEach(postEdge => {
      postList.push({
        id: postEdge.node.id,
        path: postEdge.node.url,
        title: postEdge.node.title,
        date: this.outputDate(postEdge),
        city: postEdge.node.city,
        country: postEdge.node.countryCode,
        location: this.outputLocation(postEdge),
        metadata: this.outputLocation(postEdge) + " · " + this.outputDate(postEdge)
      });
    });
    return postList;
  }

  outputLocation(postEdge) {
    const currentCountryFlagEmoji = countryFlagEmoji.get(postEdge.node.countryCode).emoji;
    const currentCountryName = countryFlagEmoji.get(postEdge.node.countryCode).name;
    let locationString;
    if (currentCountryFlagEmoji) {
      locationString = `${currentCountryFlagEmoji} ${postEdge.node.city}`;
    } else if (currentCountryName) {
      locationString = `${postEdge.node.city}, ${currentCountryName}`;
    } else {
      locationString = `${postEdge.node.city}, ${postEdge.countryCode}`;
    }
    return locationString;
  }

  outputDate(postEdge) {
    const timestamp = new Date(postEdge.node.date);
    let formattedDate;
    if (timestamp > new Date()) {
      formattedDate = format(timestamp, 'Do of MMMM YYYY');
    } else {
      formattedDate = format(timestamp, 'MMMM YYYY');
    }
    return formattedDate;
  }

  render() {
    const postList = this.getPostList();
    console.log(countryFlagEmoji.data);
    return (
      <React.Fragment>
        {/* Your post list here. */
        postList.map(post => (
          <Card key={post.id} title={post.title} metadata={post.metadata} link={post.path} />
        ))}
      </React.Fragment>
    );
  }
}

export default SpeakingEngagementList;
