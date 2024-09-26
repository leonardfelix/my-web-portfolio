import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import figures for project
import hybridIllustration from "../assets/img/projects/neuroscience/hybrid illustration.png";
import sweep from "../assets/img/projects/neuroscience/sweep.png"
import mobile from "../assets/img/projects/mutuals/mobile.jpg"
import register from "../assets/img/projects/mutuals/register.png"
import recommendation from "../assets/img/projects/mutuals/recommended.png"

export const Projects = () => {

  const neuroscience = [
    {
      title: "An Illustration of The Hybrid Model Tracking Perfomance",
      description: "This figure shows the keypoints tracked (green dots) on a larval zebrafish using the developed Hybrid model on an 8-frame interval.",
      imgUrl: hybridIllustration,
    },
    {
      title: "The Hyperparameter Tuning Process Visualised on Weights and Biases",
      description: "Represented in this picture is the stage of the Hybrid model hyperparameter tuning, done through the Weights and Biases platform using the Bayesian sweep feature. Seven models are trained with various hyperparameter values shown on the bottom chart, with their correlation to the model's accuracy depicted in the two charts above.",
      imgUrl: sweep,
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
                      This computer vision project with the full title of "Self-supervised Pose Estimation of Larval Zebrafish for Behavioural Quantification in Neuroscience" was my Honours research project completed while studying at The Australian National University.
                      <br/><br/>Together with 2 of my supervisors, we focus on developing a pipeline to track semantically meaningful keypoints from a larval zebrafish, since quantifying their behaviour can give us insights into the biological computation happening in the brain. Traditional approaches and manual labelling are tedious and are susceptible to error. The rise of AI and computer vision allows us to automate this process with popular software packages using a supervised approach as a method to quantify animal movements. However, this still requires a large amount of annotated dataset and doesn't generalise well between animal species. Therefore, this project developed a self-supervised pose estimation model that requires minimal user annotation. We named it the Hybrid model since it is inspired by and uses techniques from several well-established human and animal pose estimations.
                      <br/><br/>The main tools used for this pose estimation project include Pytorch for creating CNN(Convolutional Neural Network); Torchvision for image transformation; and Weights and Biases to monitor and visualise the model output as it trains. Due to the high computing resources needed to train this model, code is developed and executed on a Linux-based HPC(High-Performance Computing) environment on a computing cluster that uses Sylabs singularity containerisation.  This environment is accessed and utilised using SSH and Slurm scripts.
                    </p>
                     
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
