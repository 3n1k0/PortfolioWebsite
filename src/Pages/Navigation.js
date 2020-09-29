import React, { useState } from "react";
import styled from "styled-components/macro";
import { device } from "../mediaquery";


const Navbar = styled.nav`
  /* width: 50%;
  height: 100%;
  background-color: black;
  color: white;
  position: absolute;
  right: 0;
  align-items: center;
  top: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.9);
  transform: translateX(100%);

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
  } */

  /* @media ${device.desktop} { */
    width: 100%;
    height: 50px;
    background-color: black;
    color: white;
    position: fixed;
    align-items: center;
    top: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.8);

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
  /* } */
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


class Navigation extends React.Component {
  render() {
    return (
      <>
        <Navbar>
          <ul>
            <Navitem href="#home" navitemname="Home" />
            <Navitem href="#about" navitemname="About" />
            <Navitem href="#portfolio" navitemname="Portfolio" />
            <Navitem href="#contact" navitemname="Contact" />
          </ul>
        </Navbar>
      </>
    );
  }
}

export default Navigation;
