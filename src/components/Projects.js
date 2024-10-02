import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import figures for project

import homePage from "../assets/img/projects/datavis/homepage.png";
import ageChart from "../assets/img/projects/datavis/age chart.png";
import trelloBoard from "../assets/img/projects/datavis/trello board.png";

import mobile from "../assets/img/projects/mutuals/mobile.jpg";
import register from "../assets/img/projects/mutuals/register.png";
import recommendation from "../assets/img/projects/mutuals/recommended.png";

import homeGUI from "../assets/img/projects/rocketGui/app example.png";

export const Projects = () => {

  const neuroscience = [

  ];
  const datavis = [
    {
      title: "The Hompage of The Data Visualiser",
      description: "The main page of the data visualiser app displayed on a widescreen, consisting of several charts representing data such as gender and profession. Exhibition users can access and interact by clicking on a chart image, which will then lead them to the corresponding charts.",
      imgUrl: homePage,
    },
    {
      title: "An Example Chart Displaying Age",
      description: "This figure shows the age chart representation of the gallery portrait data. Each individual face portraits are neatly organised based on their respective people's age, visualising a bar chart. Supporting features such as a dropdown legend, magnification, and navigation to the next chart are also present.",
      imgUrl: ageChart,
    },
    {
      title: "The Development Trello Board",
      description: "Trello board is used in this project as a management and tracking tool for weekly tasks and milestones. Shown is a few example of development task assigned to several team members on various stages such as completed, in progress, and awaiting review/merge.",
      imgUrl: trelloBoard,
    },
  ];
  const mutuals = [
    {
      title: "A Registration Page Example",
      description: "This image shows an example registration page for a person named Francis. Francis wanted to register for mutuals and was prompted with various fields to fill in such as full name and social media account. Optionally, he could also tell his interests which will be useful for finding mutual friends.",
      imgUrl: register,
    },
    {
      title: "A Recommendation Page Example",
      description: "This figure shows the Mutuals app recommendation page to find people with similar interests. In this example, Mark, a user who registered with Mutuals, saw Francis on his recommendation page because they have the same interest in documentary, romance, and concerts. ",
      imgUrl: recommendation,
    },
    {
      title: "The Mobile Version of Mutuals",
      description: "As development continued, Mutuals made its way to the mobile platform. This image shows the homepage of Mutuals on a modern smartphone.",
      imgUrl: mobile,
    },
  ];
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
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>During the past few years I'm lucky to be able to learn and collaborate with brilliant minds to develop these projects. With the knowledge I have obtained and the eagerness to learn more, I also dive into some personal projects to sharpen my skills further. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Animal Pose Estimation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">NPG Data Visualisation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Mutuals</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Rocket Telemetry GUI</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Personal Website</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="sixth">Symphony No. 1, Op. 1</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <h3>Animal Pose Estimation</h3>
                    <Row className="justify-content-center">
                        {
                          neuroscience.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    <p>
                     
                      <br/><br/>The main tools used for this pose estimation project include Pytorch for creating CNN(Convolutional Neural Network); Torchvision for image transformation; and Weights and Biases to monitor and visualise the model output as it trains. Due to the high computing resources needed to train this model, code is developed and executed on a Linux-based HPC(High-Performance Computing) environment on a computing cluster that uses Sylabs singularity containerisation.  This environment is accessed and utilised using SSH and Slurm scripts.
                    </p>
                     
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <h3>National Portrait Gallery (NPG) Data Visualisation</h3>
                    <Row className="justify-content-center">
                        {
                          datavis.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <p>
                      Melita Dahl, a PhD student at The ANU School of Art and Design came up with the idea of making a web data visualiser of portraits from The National Portrait Gallery in Canberra for her doctoral exhibition. Working together with her as a client and a group of dedicated software engineers, we're able to provide technical assistance to accomplish her grand visions.
                      <br /><br />The website visualiser consists of 1219 portraits from the gallery which are then preprocessed using Azure Facial Expression Recognition(FER). These detected faces along with their metadata such as expression, age, and gender are then visualised on various categories appealingly using charts comprised of face portraits. I took part in developing significant main features of the visualiser including a home page where exhibition users can select a chart of their preferences and various redactions of the face portraits such as by gender and facial features. To adjust the website for its main purpose, an art exhibition and another development branch were created to ensure that the visualiser works well on a 4k resolution device.
                      <br /><br />I took on the role of a communication manager in this project and led the team's communication with the client and other external stakeholders. This encompasses giving weekly reports to the client, being the middleman who translates technical terms into simple yet understandable words, and taking initiative in finding solutions when conflicts arise between the two sides. I am also involved in the creation of project management documents, most notably the statement of work that details the scope agreement of this project. As well as the team charter which governs various aspects of the team workflow such as decision-making procedures and ground rules.
                      <br /><br />The application was developed using the Svelte framework and Snowpack for the front end. The face portrait collection along with their data was stored in a spritesheet and JSON file inside the application without linking to an external database which allows for a faster loading time. Git was used to manage this collaborative effort and the use of a staging site hosted on Oracle cloud. Not long after, changes were implemented to remove the staging site and make a versioning system instead on the main production website for the client's comparison purposes. The Trello management board was used to track all task schedules, assignees, and statuses to keep the team well-informed on the project's progress.
                      </p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                    <h3>Mutuals</h3>
                    <Row className="justify-content-center">
                        {
                          mutuals.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <p>
                      The idea for Mutuals comes from the events of the Covid-19 lockdown. People are confined to their homes, and normal social interaction isn't feasible due to the imposition of social distancing. Therefore, this project app is developed by myself alongside several amazing colleagues, encouraging online social interactions and deterring feelings of isolation. 
                      <br/><br/>The web application consists of features commonly found in other online social platforms such as user registration, login authentication, and profile editing. The main feature of this app is to give friend suggestions between registered users who have the same interest in initiating their connection since people with the same interest are more likely to get along with each other. Users can select the person that they want to interact with through the main friend suggestion page or by a randomised pick that the app makes.
                      <br/><br/>Mutuals was developed using the Django framework which is then deployed on Heroku. At a later stage, this app was extended to a mobile platform using Dart on Flutter framework. Throughout the process, I was responsible for creating some key features including friend suggestions, Heroku deployment, and various other developments in the Django MTV(Model, Template, View) architecture. I cherish this project as this is one of my early learning experiences with collaborative development and the utilisation of Github as a version control software. As well as platform-based development and application deployment.
                      </p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="fourth">
                    <h3>Rocket Telemetry GUI (Graphical User Interface)</h3>
                    <Row className="justify-content-center">
                        {
                          rocketGUI.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <p>
                      Charts and processed data are more comprehensible and appealing to look at compared to raw data. Working together with another colleague as a part of an aerospace robotics team, it was our responsibility to create this software to represent the university in the upcoming CANSAT 2022 competition.
                      <br/><br/>This project provides a desktop application to extract and visualise rocket telemetry data such as altitude, acceleration, and gyro. This data comes from an actual rocket payload coded in an Arduino microcontroller, which will then continuously send CSV data to the ground receiver as input to the application. Furthermore, several control features are also implemented, for instance, the port connection selection, which allows for ease of configuration in connecting the input device. 
                      <br/><br/>This application was built using Windows Presentation Foundation (WPF) .NET comprising C# and XAML. The structure follows conventional WPF application using MVVM (Model-view-viewmodel) architecture. The graph was created using the OxyPlot library and is updated whenever the property value changes. Moreover, a limit was set with a maximum number of points to be displayed on the chart. In case it exceeds the number of points, the chart will only display the most recent points to keep the scale and avoid clutter.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="sixth">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
