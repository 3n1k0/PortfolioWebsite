import React, { useState } from "react";
import HamburgerMenu from "../Hamburgermenu";
import styled from "styled-components/macro";
import { device } from "../mediaquery";

const Navbar = styled.nav`
  width: 50%;
  height: 100%;
  color: white;
  position: absolute;
  right: 0;
  align-items: flex-start;
  z-index: 3;

  top: 0;
  background: rgba(0, 0, 0, 0.9);

  display: ${({ isOpen }) => {
    return isOpen ? "flex" : "none";
  }};

  ul {
    display: grid;
    margin-top: 200px;

    li {
      list-style: none;
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    font-family: "Raleway";
    font-size: 2em;
    letter-spacing: 2px;
    font-weight: 400;

    &:hover {
      text-shadow: 1px 1px;
    }
  }

  @media ${device.tablet} {
    align-content: center;
    justify-items: center;
    height: 100%;
    overflow: hidden;
    position: fixed;
  }

  @media ${device.desktop} {
    width: 100%;
    height: 50px;
    background-color: black;
    color: white;
    position: fixed;
    align-items: center;
    top: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.8);
    opacity: 1;
    display: flex;
    overflow: hidden;

    ul {
      display: flex;
      list-style: none;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      margin: 0;
      padding: 0;

      li {
        margin: 0 1rem;
        padding: 1rem;
        display: flex;
      }

      a {
        text-decoration: none;
        text-transform: uppercase;
        color: white;
        font-family: "Raleway";
        font-size: 1em;
        letter-spacing: 2px;
        font-weight: 400;

        &:hover {
          text-shadow: 1px 1px;
        }
      }
    }
  }
`;

const Navitem = ({ href, navitemname }) => {
  return (
    <li>
      <a
        smooth={true}
        spy={true}
        hashSpy={true}
        offset={50}
        duration={500}
        delay={1000}
        isDynamic={true}
        ignoreCancelEvents={false}
        href={href}
      >
        {navitemname}
      </a>
    </li>
  );
};

const Navigation = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <Navbar isOpen={isOpen}>
        <ul>
          <Navitem href="#home" navitemname="Home" />
          <Navitem href="#about" navitemname="About" />
          <Navitem href="#portfolio" navitemname="Portfolio" />
          <Navitem href="#contact" navitemname="Contact" />
        </ul>
      </Navbar>
      <HamburgerMenu
        onClick={() => {
          setisOpen(!isOpen);
        }}
        isOpen={isOpen}
      />
    </>
  );
};

export default Navigation;
