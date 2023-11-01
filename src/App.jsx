//libraries
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
//router
import { Outlet } from "react-router-dom";
//Pages
import Header from "./assets/components/Header";
//images
import background from "./assets/resources/bg.gif";

const App = () => {
  return (
    <>
      <MainBG id="main">
        <Header />

        <Align>
          <Outlet />
        </Align>
      </MainBG>
    </>
  );
};

export default App;

const MainBG = styled.div`
  height: auto;
  min-height: 100%;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const Align = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding-inline: 1rem;
  margin-inline: 1rem;
`;
