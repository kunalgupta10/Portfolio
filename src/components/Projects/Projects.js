import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/MICP.jfif";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/Wodscape.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/MMTT.png";

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
              title="Woodscape"
              description="Woodscape - A Website dedicated for sales of Furnitures, Front End made by basic HTML, CSS and Back-end using NodeJS."
              ghLink="https://github.com/kunalgupta10/Woodcape"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MM Tours Travels"
              description="MM Tours Travels - A Toursism Websiter made for an In-house Client to represent packages and services avaialable for tourisms in Maharashtra"
              ghLink="https://github.com/kunalgupta10/Tourism-Website"
              demoLink="https://mmtourstravels.glitch.me/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="To-Do List App"
              description="A basic To-Do List app where we can add and remove line items Coded in HTML/CSS and Javascript"
              ghLink="https://github.com/kunalgupta10/LGM-VIP-WEBDEV-Task1"
              demoLink="https://kunalgupta10.github.io/LGM-VIP-WEBDEV-Task1/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Medical Insurance Prediction"
              description="A model built for prediction on Medical insurance cost using libraries such as Numpy, Pandas, Seaborn, Sklearn etc. Used Linear Regression and R-square value as performance matrix and achieved R squared value/Accuracy as 75%"
              ghLink="https://github.com/kunalgupta10/MedicalInsuracePrediction"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human.
Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/kunalgupta10/EmotionClassification"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
