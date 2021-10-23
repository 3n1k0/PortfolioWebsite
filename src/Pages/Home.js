import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const Contacts = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    list-style-type: none;
  }
`;

const Home = () => {
  return (
    <MainContainer>
      <Contacts>
        <ul>
          <li>Instagram</li>
          <li>Github</li>
          <li>Facebook</li>
          <li>Photography</li>
        </ul>
      </Contacts>
    </MainContainer>
  );
};

export default Home;
