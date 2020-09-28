import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    background: white;
    color: papayawhip;
    background: linear-gradient(270deg, #3cbbe1, #5c1078);
    background-size: 400% 400%;
    -webkit-animation: AnimationName 4s ease infinite;
    -moz-animation: AnimationName 4s ease infinite;
    animation: AnimationName 4s ease infinite;

  }

  *{
    box-sizing: border-box;
    font-family: "Raleway";
  }

 

@-webkit-keyframes AnimationName {
    0%{background-position:47% 0%}
    50%{background-position:54% 100%}
    100%{background-position:47% 0%}
}
@-moz-keyframes AnimationName {
    0%{background-position:47% 0%}
    50%{background-position:54% 100%}
    100%{background-position:47% 0%}
}
@keyframes AnimationName {
    0%{background-position:47% 0%}
    50%{background-position:54% 100%}
    100%{background-position:47% 0%}
}
`;

export default GlobalStyle;
