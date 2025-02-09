import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kunal Gupta </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently employed as a Software Engineer at Tata Consultancy Services.
            <br />
            I have completed B.Tech in Information Technolgy from Pillai College of Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Gym 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep leveling up in real life just like a game"{" "}
          </p>
          <footer className="blockquote-footer">Kunal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
