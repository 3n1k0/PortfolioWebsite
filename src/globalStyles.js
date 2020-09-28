import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    background: white;
    color: papayawhip;
    background: rgb(59,0,105);
background: radial-gradient(circle, rgba(59,0,105,0.7553396358543417) 27%, rgba(47,69,184,1) 90%);
  }

  *{
    box-sizing: border-box;
    font-family: "Raleway";
    text-decoration: none;
  }

  h2 {
    color: papayawhip;
    text-align: center;
    padding-bottom: 50px;
    opacity: 0.8;
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
