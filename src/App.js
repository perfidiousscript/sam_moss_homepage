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

class App extends Component {
  render() {
    return (
      <Main>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Main>
    );
  }
}

export default App;
