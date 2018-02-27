import React, { Component } from "react";
import styled from "styled-components";

const StyledBody = styled.p`
  box-shadow: 5px 10px #111;
  margin: 1rem 11rem;
  width: 66%;
  height: 42%;
  padding: 6rem 22rem;
  line-height;1.3;
  font-family: 'Roboto Slab';
`;

class Contact extends Component {
  render() {
    return <StyledBody>email: this.is.fryou@gmail.com</StyledBody>;
  }
}

export default Contact;
