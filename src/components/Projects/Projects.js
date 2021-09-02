import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import debsoc from "../../Assets/Projects/debsoc.jpg";
import imperium from "../../Assets/Projects/vcs.png";
import doracle from "../../Assets/Projects/doracle.jpg";
import stock from "../../Assets/Projects/stock.png";

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
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={doracle}
              isBlog={false}
              title="Doracle"
              description="A secure, scalable application that adopts a set of revolutionizing steps that will pave the way to a better-managed hospital that will be able to provide superior healthcare advantages to its patients. App and website built on React Native and MERN Stack respectively."
              link="https://github.com/tanu272/Doracle-App"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={debsoc}
              isBlog={false}
              title="Official Website of Debating Society, NIT Durgapur"
              description="Coordinated the maintenance and revamping of the website and worked to increase the SEO results of the website. Frontend built on React, React Bootstrap, CSS and backend built on Django and DRF."
              link="https://github.com/debsocnitdgp/debsoc-nitdgp-website"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={imperium}
              isBlog={false}
              title="Imperium"
              description="A local Version Control System(VCS), similar to Git. It uses C++ data structures and SHA hashing for add, init, commit, revert, help and other functionalities."
              link="https://github.com/lugnitdgp/TDoC-Imperium/tree/master/tanu272"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Stonkmaster"
              description="An application which predicts the Stock Prices of a company using Supervised Machine Learning. Uses Kaggle's stock prices dataset combined with various supervised learning algorithms like KNN, LASSO, Linear Regression to predict the future Stock Prices with 70% accuracy. "
              link="https://github.com/tanu272/TDoC-Stonksmaster"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
