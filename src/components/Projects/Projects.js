import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tindog3 from "../../Assets/Projects/tindog3.png";
import tourism3 from "../../Assets/Projects/tourism3 (1).png";

import  pimage4 from "../../Assets/Projects/pimage4.png";

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
              imgPath={tourism3}
              isBlog={false}
              title="Tour-travels"
              description="A kind of tour-travel guide consist of different travelling packages and description of many fun activites, Here I used Html, Css & javascript To create the front end part of the website and for storing the Contact Information in the Database we used php as a backend language"

            
              ghLink="https://github.com/Saksham6678/tourism-website"
              demolink="https://tourism-website-dq7r.vercel.app/#contact"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pimage4}
              isBlog={false}
              title="Personal-porttfolio"
              description=" A full responsive personal-portfolio website that contains my professional information  , built by using react.js , node.js , CSS3 and VS code"
              ghLink="https://github.com/Saksham6678/personal-portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tindog3}
              isBlog={false}
              title="Tinder-Dog"
              description="Its a website designed for Dog which is basically a Dog Tinder in which dog can meet new friends. This website is created using HTML, CSS and Bootstrap Framework."
              ghLink="https://github.com/Saksham6678/tinder-dog"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
