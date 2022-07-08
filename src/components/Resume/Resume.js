import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Tanushree Bhattacharya Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="SWE Intern at Microsoft:"
              date="May 2022 - June 2022"
              content={[
                "Integrated a new feature into Microsoft’s substrate search to help users search files and recordings related to meetings through meeting-related keywords to improve overall user experience and enhance the business relevance of meeting-related searches by 93%.",
                "Improved accuracy of Search Answers by analyzing user responses through E2E testing.",
              ]}
            />
            <Resumecontent
              title="Frontend Developer Intern at FarziEnginner "
              date="September 2020 - November 2020"
              content={[
                "Worked closely witCollaborated with various business clients to build and fix bugs in various e-commerce platforms like Lotus, Plix, MamaEarth, and so on.h clients to collect requirements, create over 15 web pages, and improve the quality of existing web pages and apps.",
                "Built custom dynamic Shopify theme as per Figma design with Vanilla JS, CSS, Bootstrap, and ReactJS as required.",
              ]}
            />
            <Resumecontent
              title="Mentor at Codess.Cafe:"
              date="August 2021 - Present"
              content={[
                "Guided 10 college sophomores from all over India for internship opportunities, with priority towards DSA, competitive programming and interview preparation.",
              ]}
            />
          </Col>

          <Col md={6} className="resume-right">
          <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.Tech Degree in Electronics and Communication [National Institute of Technology, Durgapur] "
              date="2019 - Present"
              content={[`CGPA: 8.8 (Till 6th Sem)`]}
            />
            <Resumecontent
              title="12TH BOARD (AISSCE) [Sushila Birla Girls' School, Kolkata]"
              date="2019"
              content={["Precentage: 94%"]}
            />
            <Resumecontent
              title="10TH BOARD (AISSE) [Sushila Birla Girls' School, Kolkata] "
              date="2017"
              content={["CGPA: 10"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Recipient of Grace Hopper Scholarship for the year 2022.",
                "Qualified as one of the top 26 teams for Amazon HackOn 2021.",
                "Finalist for of Facebook Hacker Cup 2020.",  
                "GirlsScript Winter of Coding Mentor for 2021 session.",
                "NTSE Scholar 2017.",
                "JEE Main 2019 score of 98.7 percentile among 9+ lakh candidates and JEE Advanced rank of 8095.",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
