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
        <HeadCon>
          <Header />
        </HeadCon>

        <Align>
          <Outlet />
        </Align>
      </MainBG>
    </>
  );
};

export default App;

const MainBG = styled.div``;

const HeadCon = styled.div``;
const Align = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
  min-height: 300px;
  padding: 1rem;
  z-index: 0;
`;
