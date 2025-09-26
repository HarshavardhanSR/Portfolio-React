import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { TbBrandGolang } from "react-icons/tb";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiApachekafka,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Core Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus title="C++" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang title="Go (Golang)" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>

      {/* Web & Backend */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs title="Next.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js" />
      </Col>

      {/* Databases & Cloud */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb title="MongoDB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql title="PostgreSQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis title="Redis" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase title="Firebase" />
      </Col>

      {/* DevOps & Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws title="AWS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker title="Docker" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes title="Kubernetes" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka title="Kafka / Streaming" />
      </Col>

      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git & GitHub" />
      </Col>
    </Row>
  );
}

export default Techstack;
