import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import { Heading } from "nautilus-system/src";
import { format } from 'date-fns'

class PostDate extends Component {
  render() {

    // Format the date
    const { date } = this.props;
    const timestamp = new Date(date);
    const formattedDate = format(timestamp, 'Do of MMMM YYYY');

    return (
      <Heading level={0} size="metadataSmall">
        { formattedDate }
      </Heading>
    );
  }
}

export default PostDate;
