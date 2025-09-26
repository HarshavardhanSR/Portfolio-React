import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiDocker,
  SiGithub,
  SiAmazonaws,
  SiNotion,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* OS / Environment */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos title="macOS / Development Environment" />
      </Col>

      {/* Code & Version Control */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub title="GitHub" />
      </Col>

      {/* API & Dev Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title="Postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker title="Docker" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws title="AWS CLI / Console" />
      </Col>

      {/* Collaboration & Deployment */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack title="Slack / Communication" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotion title="Notion / Project Management" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel title="Vercel / Deployment" />
      </Col>
    </Row>
  );
}

export default Toolstack;
