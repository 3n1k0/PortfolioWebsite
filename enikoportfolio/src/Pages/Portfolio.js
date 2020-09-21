import React from "react";
import Progress from "../Progress";
import SectionContainer from "../SectionContainer";

class Portfolio extends React.Component {
  render() {
    return (
      <SectionContainer color="pink">
        <a name="portfolio"></a>
        <h1>portfolio</h1>
        <Progress scroll="75%" />
      </SectionContainer>
    );
  }
}

export default Portfolio;
