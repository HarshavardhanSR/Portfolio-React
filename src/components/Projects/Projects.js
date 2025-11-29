import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="VISTA"
              description="AI-powered video communication platform similar to Loom. Features include video recording, transcription with Whisper AI, AI-generated titles and summaries, and collaborative sharing. Built with Next.js, NeonDB, AWS S3, Express.js, and Socket.IO."
              ghLink="https://github.com/HarshavardhanSR/Vista"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Insta Wild"
              description="Wildlife detection app that classifies animals from uploaded images and shows their danger level. Built with React.js, Flask, and a CNN model trained on wildlife datasets. Helps raise awareness about endangered species and safety measures."
              ghLink="https://github.com/HarshavardhanSR/Insta_Wild"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="HairFall Detection System"
              description="A web-based system to detect early signs of hairfall using uploaded scalp images. Built with React.js, Firebase, and TensorFlow.js. Provides a health score and suggestions for improvement."
              ghLink="https://github.com/HarshavardhanSR/HairFall_Detection_System"
              // demoLink="https://editor.Harshavardhan SR-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Other Github Projects"
              description="A collection of various projects including AI for social good, face recognition, emotion detection, and more. Explore my GitHub for diverse applications of machine learning and web development."
              ghLink="https://github.com/HarshavardhanSR"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
