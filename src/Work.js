import React, { Component } from "react";
import styled from "styled-components";
import colors from "./utils/colors";

const StyledBody = styled.p`
  box-shadow: 5px 10px #111;
  margin: 1rem 11rem;
  width: 66%;
  height: 42%;
  padding: 4rem;
  line-height;1.3;
  font-family: 'Roboto Slab';
`;

const StyledLink = styled.a`
  color: ${colors.grey};
`;

class Work extends Component {
  render() {
    return (
      <StyledBody>
        <StyledLink href="http://journal.gonelawn.net/issue16/Moss.php">
          Lying Down Machines in Gone Lawn #16
        </StyledLink>
        <p>
          "And yes the sheet hid his flesh of yellow folds and mismatched
          convexities, and yes the leather mask held his worst part, the very
          worst part of him, but the son's voice was still intact and bled
          through these two, and though it was high and creening, it still did
          what it was meant to do, which was instill in the world his endless
          hatred. "
        </p>
        <StyledLink href="http://www.verbivoraciouspress.org/festschrifts/volume-three-the-syllabus/">
          Essay in Verbivoracious Festscrift: Syllabus
        </StyledLink>
      </StyledBody>
    );
  }
}

export default Work;
