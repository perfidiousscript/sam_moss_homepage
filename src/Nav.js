import React, { Component, Fragment } from "react";
import styled from "styled-components";
import colors from "./utils/colors";
import { Link } from "react-router-dom";
import Body from "./Body";

const Navbar = styled.div`
  width: 100%;
  display: flex;
`;

const NavItem = styled(Link)`
  text-align: center;
  border: 1px solid ${colors.grey};
  height: 2rem;
  padding-top: 0.8rem;
  flex-grow: 1;
  text-decoration: none;
  color: ${colors.grey};
  font-family: "Nanum Myeongjo", serif;
`;

const NavLink = styled.a`
  text-align: center;
  border: 1px solid ${colors.grey};
  height: 2rem;
  padding-top: 0.8rem;
  flex-grow: 1;
  text-decoration: none;
  color: ${colors.grey};
  font-family: "Nanum Myeongjo", serif;
`;

class Nav extends Component {
  render() {
    return (
      <Fragment>
        <Navbar>
          <NavItem to="/work">Works</NavItem>
          <NavLink href="//hesperareading.com">Hespera</NavLink>
          <NavItem to="/bio">Bio</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </Navbar>
        <Body />
      </Fragment>
    );
  }
}

export default Nav;
