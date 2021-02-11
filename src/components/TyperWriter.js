import Typewriter from "typewriter-effect";
import Typewriter from "typewriter-effect/core";
import React from "react";


<Typewriter
options={{
  autoStart: true,
  loop: true,
  deleteSpeed: 21,
  delay: 80,
}}
onInit={(typewriter) => {
  typewriter
    .start()
    .typeString("Hello, I'm Enikő! <br/> ")
    .typeString("I'm a FrontEnd Developer")

    .pauseFor(1000)
    .deleteChars(18)
    .pauseFor(500)
    .typeString("Problem Solver")
    .pauseFor(500)
    .deleteChars(14)
    .pauseFor(500)
    .typeString("Creative")
    .deleteChars(8)
    .pauseFor(500)
    .typeString("Fast Learner")
    .pauseFor(500);
}}
/>

export default Typewriter;