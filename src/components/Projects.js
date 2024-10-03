import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ProjectFirstPage } from "./ProjectFirstPage";
import { ProjectSecondPage } from "./ProjectSecondPage";
// import figures for project




export const Projects = () => {

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>During the past few years I'm lucky to be able to learn and collaborate with brilliant minds to develop these projects. With the knowledge I have obtained and the eagerness to learn more, I also dive into some personal projects to sharpen my skills further. </p>
                <ProjectFirstPage />
                <ProjectSecondPage />
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
