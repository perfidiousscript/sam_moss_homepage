import React, { Component } from "react";
import styled from "styled-components";

const StyledBody = styled.p`
  box-shadow: 5px 10px #111;
  margin: 1rem 11rem;
  width: 66%;
  height: 42%;
  padding: 4rem;
  line-height;1.3;
  font-family: 'Roboto Slab';
`;

class Bio extends Component {
  render() {
    return (
      <StyledBody>
        &emsp; Sam Moss is from Cascadia. He has had work in theNewerYork, Gone
        Lawn and Signed Magazine. His fiction chapbook Rural Information was
        published by the Rockwell Press Collective in 2014. He co-hosts a
        quarterly reading in Minneapolis called Hespera. He is currently working
        on a novel about a man traveling across Siberia in 1890.{" "}
      </StyledBody>
    );
  }
}

export default Bio;
