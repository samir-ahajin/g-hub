import styled from "styled-components";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    window.onscroll = () => {
      scrollHeader();
    };
    let myHeader = document.getElementById("header");
    let main = document.getElementById("main");
    let sticky = myHeader.offsetTop;

    const scrollHeader = () => {
      if (window.scrollY > sticky) {
        myHeader.classList.add("sticky");
        main.classList.add("padding-sticky");
      } else {
        myHeader.classList.remove("sticky");
        main.classList.remove("padding-sticky");
      }
    };
  }, []);
  return (
    <>
      <StickyHeader id="header">
        <div id="logo">G-hub</div>
        <Navs>
          <Nav to="/">Home</Nav>
          <Nav to="shop">Shop</Nav>
          <Nav>Cart</Nav>
        </Navs>
      </StickyHeader>
    </>
  );
};

export default Header;

const StickyHeader = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  color: white;

  align-items: end;
  max-height: 200px;
  padding: 1rem;
`;

const Navs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: end;
  position: relative;
  z-index: 1;
`;
const Nav = styled(NavLink)`
  color: white;
  text-decoration: none;
  border-radius: 4px;
  &hover {
    background-color: red;
  }
`;
