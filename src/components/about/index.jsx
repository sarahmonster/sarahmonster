import React, { Component } from "react";
import { Paragraph, Button, Heading } from 'nautilus-system/src';

class About extends Component {
  render() {
    return (
      <div className="about">
        <Heading level={1} size="title">Hello there! I'm Sarah and  there's a 98% chance I don't much care for you.</Heading>
		<Paragraph>I’m primarily a visual and product designer, but I have a strong technical background and a wide-ranging general knowledge that allows me to approach my work in a holistic way. I care deeply about diversity and inclusivity in tech and frequently speak at events across the world. My career has been marked by a continued process of experimentation and innovation, bringing new ideas to every project I join.</Paragraph>
		<Paragraph>Let’s make great things together!</Paragraph>
		<Button>Hello, there!</Button>
      </div>
    );
  }
}

export default About;
