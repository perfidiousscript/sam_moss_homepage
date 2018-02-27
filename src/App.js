import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import Body from "./Body";
import "./App.css";
import colors from "./utils/colors";

const Main = styled.div`
  background: ${colors.black};
  color: ${colors.grey};
  height: 100%;
  flex: 1;
`;

const Name = styled.div`
  font-size: 6rem;
  font-family: "Nanum Myeongjo", serif;
`;

class App extends Component {
  render() {
    return (
      <Main>
        <Name>Sam Moss</Name>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Main>
    );
  }
}

export default App;
