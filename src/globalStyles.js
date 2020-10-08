import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
  background: #000;
} 

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    color: papayawhip;
    background: rgb(59,0,105);
    background: radial-gradient(circle, rgba(108,63,142,1) 27%, rgba(38,48,125,1) 90%);
    align-content: center;
    overscroll-behavior-y: none;
    justify-items: center;
  }





  *{
    box-sizing: border-box;
    font-family: "Raleway";
    text-decoration: none;
    
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
