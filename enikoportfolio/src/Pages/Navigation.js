import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-scroll";

const Navbar = styled.nav`
  width: 100%;
  height: 50px;
  background-color: black;
  color: white;
  position: fixed;
  display: flex;
  top: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.7);

  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
    width: 100%;

    li {
      margin: 0 1rem;
      padding: 1rem;
      display: flex;
    }

    a {
      text-decoration: none;
      text-transform: uppercase;
      color: white;
    }
  }
`;

class Navigation extends React.Component {
  render() {
    return (
      <Navbar>
        <ul>
          <li>
            <a
              smooth={true}
              spy={true}
              hashSpy={true}
              offset={50}
              duration={500}
              delay={1000}
              isDynamic={true}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
              ignoreCancelEvents={false}
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              smooth={true}
              spy={true}
              hashSpy={true}
              offset={50}
              duration={500}
              delay={1000}
              isDynamic={true}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
              ignoreCancelEvents={false}
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a smooth={true} href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a smooth={true} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </Navbar>
    );
  }
}

export default Navigation;
