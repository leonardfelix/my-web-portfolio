import { Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";


// import figures for project



import homeGUI from "../assets/img/projects/rocketGui/app example.png";

export const ProjectSecondPage = () => {
    const rocketGUI = [
      {
        title: "The Rocket Telemetry Data Application",
        description: "The appearance of the application on a Windows Computer. Using simulated data, a few charts can be observed on the right side representing data such as altitude and gyro concerning time. Other processed statistics such as packet type and software state are shown on the bottom half.",
        imgUrl: homeGUI,
      },
    ];
  
    const projects = [
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
      },
    ];
  
    return (
      <Tab.Container id="projects-tabs" defaultActiveKey="first">
        <Nav variant="pills" className="nav-pills-custom mb-5 justify-content-center align-items-center" id="pills-tab">
          <Nav.Item>
            <Nav.Link eventKey="first">Dish</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Database</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="secondlast">Marine Animal Tracking</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="last">Symphony No. 1, Op. 1</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content id="slideInUp">
          <Tab.Pane eventKey="first">
          <h3>Dish</h3>

          <p>
            
          </p>
            
          </Tab.Pane>
          <Tab.Pane eventKey="second">
          <h3>Database</h3>

            <p>
            </p>
          </Tab.Pane>

          <Tab.Pane eventKey="secondlast">
          <h3>Marine Animal Tracking</h3>
         
            <p>
            </p>
          </Tab.Pane>
          <Tab.Pane eventKey="last">
          <h3>Symphony No. 1, Op. 1</h3>
         
            <p>
            </p>
          </Tab.Pane>

        </Tab.Content>
      </Tab.Container>
    )
}