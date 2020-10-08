import React from "react";
import SectionContainer from "../SectionContainer";
import { fonts } from "../config";
import styled from "styled-components/macro";

export const Button = styled.button`
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
  margin-bottom: 40px;
  text-align: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }

  i {
    padding-left: 20px;
  }
`;

const Container = styled.div`
  min-height: 1200px;
  width: 100%;
  color: black;
  overflow: hidden;

  form {
    max-width: 460px;
    margin: 0 auto;
    background-color: transparent;
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
    color: black;
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
        <SectionContainer>
          <a name="contact"></a>
          <Container>
            <form action="https://formspree.io/mknqqvoz" method="POST">
              <h1>Contact</h1>
              <fieldset>
                <label for="name">
                  Name
                  <input type="text" name="name" required />
                </label>

                <br />
                <label for="email">
                  Email
                  <input type="email" name="_replyto" required />
                </label>

                <br />
                <label for="subject">
                  Subject
                  <input type="text" name="subject" />
                </label>

                <br />
                <label for="message">
                  Message
                  <textarea name="message" required></textarea>
                </label>
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
