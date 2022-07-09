import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone! I am <span className="purple">Tanushree Bhattacharya </span>
            - an aspiring software developer from <span className="purple"> Kolkata, India.</span> 
            <br />I have experience in <span className="purple">software development, mobile app creation, front-end/back-end web development</span> and <span className="purple">graphic designing</span> through various hackathons, freelancing as well as interning in a few companies, including Microsoft. 
            <br />I love to explore new technologies and find innovative solutions to user's problems.
            <br />Currently I'm a final year student pursuing a B.Tech degree in Electronics and Communication Engineering from National Institute of Technology Durgapur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing the guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Sci-fi movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            {" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
