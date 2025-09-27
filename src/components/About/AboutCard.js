import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Harshavardhan SR </span>
            from <span className="purple">Bangalore, India.</span>
            <br />
            I am a passionate <span className="purple">Full-Stack Developer</span> and tech enthusiast,
            constantly exploring new technologies and building impactful projects.
            <br />
            I am currently pursuing my <span className="purple">Master’s in Computer Applications</span>
            and working on projects involving <span className="purple">AI, Data Engineering, and Web Development.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Tech Trends
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on Open-Source Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & Meeting New People
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming & Brainstorming New Ideas
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "I believe great code is not just about solving problems, but creating
            experiences that feel effortless and inspiring."
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
