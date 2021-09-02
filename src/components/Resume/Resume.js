import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Tanushree Bhattacharya Resume (2).pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
              title="Mentor at Codess.Cafe:"
              date="June 2021 - Present"
              content={[
                "Trained juniors and freshmen for interview preparation for scholarships and internships, with priority towards DSA and development.",
              ]}
            />
            <Resumecontent
              title="Freelance (Frontend Developer  - ReactJs, BootStrap and React Native)"
              date="June 2020 - September 2020"
              content={[
                "Worked closely with clients to collect requirements, create over 15 web pages, and improve the quality of existing web pages and apps.",
                "Delivered products that meet the expected standards, within the deadline.",
              ]}
            />
            <Resumecontent
              title="Web-Developer [Entrepreneurship Cell, NIT Durgapur and Debating Society, NIT Durgapur]"
              date="October 2019 - Present"
              content={[
                "Collaborated with other club members on projects, events, and mentoring juniors.",
                "Conducted coding workshop with over 500 people and coordinated the ensuing QnA session.",
              ]}
            />
            <Resumecontent
              title="Editor-in-Chief  [My_Realms(Writes Section)]"
              date="August 2020 - Present"
              content={[
                "Managed and edited articles at My_Realms, a budding community of writers, photographers, and artists, since September 2020.",
                "Partnered with a group of 20+ people from all over the country to create an easy stage for upcoming creators to showcase their talents.",
              ]}
            />
          </Col>

          <Col md={6} className="resume-right">
          <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.Tech Degree in Electronics and Communication [National Institute of Technology, Durgapur] "
              date="2019 - Present"
              content={[`CGPA: 8.75 (Till 4th Sem)`]}
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
                "Incoming Intern at Microsoft India for summer 2022.",
                "Qualified as one of the top 26 teams for Amazon HackOn 2021.",
                "Qualified for the Final round of Facebook Hacker Cup 2020 and the first round of Google Codejam 2021.",  
                "Completed Hactoberfest arranged by Digital Ocean twice in the years 2019 and 2020.", 
                "Codechef 4-star and Codeforces Apprentice.", 
                "NTSE Scholar 2017.",
                "JEE Main 2019 score of 98.7 percentile among 9+ lakh candidates and JEE Advanced rank of 8095.",
                "GirlsScript Winter of Coding Mentor for 2021 session.",
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
