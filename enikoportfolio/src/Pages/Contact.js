import React from "react";
import SectionContainer from "../SectionContainer";
import { fonts } from './config'

import styled from "styled-components/macro";

const Button = styled.button`
  width: 250px;
  height: 45px;
  border: none;
  outline: none;
  box-shadow: 0 3px 2px 0 grey;
  color: #fff;
  font-size: 14px;
  text-shadow: 0 1px rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.4);
  font-family: ${fonts.others};


  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }
`;

const Container = styled.div`
  min-height: 1200px;
  width: 100%;
  color: #384047;
  form {
    max-width: 550px;
    margin: 0 auto;
    padding: 10px 20px 30px 20px;
    background: white;
    border-radius: 8px;
    position: relative;
    top: 200px;
    border: 1px solid black;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  fieldset {
    display: flex;
    flex-flow: column;
    border: none;
    width: 90%;
  }
  input,
  textarea {
    background: #384047;
    border: none;
    font-size: 16px;
    height: auto;
    margin: 0;
    outline: 0;
    padding: 15px;
    width: 100%;
    background-color: rgba(214, 212, 208, 0.2);
    color: #384047;
    margin-bottom: 30px;
    & :focus {
      border: 1px solid black;
    }
  }
  textarea {
    height: 200px;
  }
  h1 {
    font-family: ${fonts.titles};
    text-transform: uppercase;
    text-align: center;
    font-size: 37px;
    line-height: 1.5;
    letter-spacing: 0.337em;
    font-weight: 100;
    padding-bottom: 50px;
    padding-top: 26px;
  }
  label {
    padding-bottom: 10px;
    font-family: "Raleway";
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

class Contact extends React.Component {
  render() {
    return (
      <div>
        <SectionContainer color="#ffff">
          <a name="contact"></a>
          <Container>
            <form action="https://formspree.io/mknqqvoz" method="POST">
              <h1>Contact</h1>
              <fieldset>
                <label for="name">Name </label>
                <input type="text" name="name" required />

                <br />
                <label for="email">Email</label>
                <input type="email" name="_replyto" required />

                <br />
                <label for="subject">Subject</label>
                <input type="text" name="subject" />

                <br />
                <label for="message">Message</label>
                <textarea name="message" required></textarea>
              </fieldset>
              <Button type="submit">Send</Button>
            </form>
          </Container>
        </SectionContainer>
      </div>
    );
  }
}
export default Contact;
