import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Full Stack Developer",
          "Freelancer",
          "MERN Stack Developer",
          "Open Source Contributor",
          "Tech Enthusiast",
          "Learner",
          "Problem Solver",
          "AI/ML Enthusiast",
          "UX/UI Designer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
