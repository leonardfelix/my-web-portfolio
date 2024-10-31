import { Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ArrowRightCircle } from 'react-bootstrap-icons';


// import figures for project
import publishRecipe from "../assets/img/projects/dish/publish recipe.png";
import dishSearch from "../assets/img/projects/dish/dish search.png";
import pizzaRecipe from "../assets/img/projects/dish/pizza recipe.png";

import dataDiagram from "../assets/img/projects/database/database diagram.png";
import vaccineDat from "../assets/img/projects/database/vaccine data.png";
import distribution from "../assets/img/projects/database/distribution details.png";

import coverPageDeepLearning from "../assets/img/projects/syntheticClassification/deep learning first page.png";

import coverPage from "../assets/img/projects/marineTracking/cover page.jpg";

import music from "../assets/img/projects/music/treble clef.svg";




export const ProjectSecondPage = () => {
    const dish = [
      {
        title: "The Recipe Publisher Page",
        description: "The illustration shows the page where a user can publish a recipe on the application. In this instance, a user is planning to publish their pizza recipe by inputting fields such as recipe name, description, servings, ingredients, and instructions. ",
        imgUrl: publishRecipe,
      },
      {
        title: "The Recipe Collection Page",
        description: "This illustrates the home page of the recipe collection on a desktop computer. Various enticing recipes published by all users can be viewed in this window such as risotto and fish and chips. User can learn more about a recipe by clicking on them.",
        imgUrl: dishSearch,
      },
      {
        title: "A Published Pizza Recipe",
        description: "The figure shows a published pizza recipe on the application. Details shown include the publisher's name (James in this example), recipe ingredients and instructions, and reviews posted by another user about their thoughts on the recipe.",
        imgUrl: pizzaRecipe,
      },
    ];

    const database = [
      {
        title: "The Vaccine Instances",
        description: "This figure details one of the database tables titled 'Vaccine'. As shown there are 5 distinct vaccines in this instance with their unique primary key and attributes such as name and producer. Approved admin users can also make changes to the data in this table.",
        imgUrl: vaccineDat,
      },
      {
        title: "A Distribution Record Example",
        description: "The image shows a data record on the distribution table. This contains attributes such as code, distribution date, and fee. Note that the distribution table is connected to both the vaccine and schedule table with a foreign key. Therefore, schedule data and vaccine type are also shown and could be determined from the distribution.",
        imgUrl: distribution,
      },
      {
        title: "The Relational Mapping",
        description: "This diagram depicts the relationship between each of the dataset tables, also known as relational mapping. Each table has its distinct attributes with some of them underlined and bolded representing the primary keys that are unique for every data record. Arrows from one table to another represent the relation of an attribute to a record in another table connected by foreign keys.",
        imgUrl: dataDiagram,
      },
    ];

    const vehicleClassification = [
      {
        title: "The Three Method Comparison Cover Page",
        description: "This image presents the cover page for the second version of the report titled 'Classifying Synthetic Vehicle: A Comparative Study of Deep Neural Networks'",
        imgUrl: coverPageDeepLearning,
      },
    ]

    const marineTracking = [
      {
        title: "The Research Proposal Cover Page",
        description: "This figure shows the cover and first page of the five page proposal document.",
        imgUrl: coverPage,
      },
    ]


    
  
    return (
      <Tab.Container id="projects-tabs" defaultActiveKey="first">
        <Nav variant="pills" className="nav-pills-custom mb-5 justify-content-center align-items-center" id="pills-tab">
          <Nav.Item>
            <Nav.Link eventKey="first">DISH</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">COVID-19 Database</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third">Synthetic Vehicle Classification</Nav.Link>
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
          <h3>DISH</h3>
            <Row className="justify-content-center">
                {
                  dish.map((project, index) => {
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
          Managing recipes can sometimes be a tedious process, DISH allows the organisation of countless recipes made by you or the wider culinary enthusiast community. Along with a few talented and dedicated colleagues, we made this idea into a tangible project application. The application includes user account registration and authentication; recipe publications and repositories which can be accessed by all users; and recipe review posting. 
          <br /><br />The Spring Boot framework along with the Thymeleaf base is used as the base for building this web application. The model such as user, recipe, and review is stored using the PostgreSQL database. The application is then deployed using Heroku to reach a wider audience. 
          <br /><br />A few optimisation tools are also utilised in this project such as SonarQube which allows ease of code smell refactorisation. Moreover, Prometheus and Grafana are also used for the application performance analysis.
          </p>
          
          </Tab.Pane>
          <Tab.Pane eventKey="second">
          <h3>COVID-19 Database</h3>
          <Row className="justify-content-center">
                {
                  database.map((project, index) => {
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
            A database management project that was developed with a few of my colleagues during university times. This database revolves around a simulation of COVID-19 vaccination tracking which encompasses aspects such as vaccination schedules, health facilities, and vaccination cards. 
            <br /><br />Using PostgreSQL as a relational database, we're able to model relationships across different data tables. Primary keys allow each record to be uniquely identified and foreign keys to link 2 related records from other tables, both of these are implemented in the database management system (DBMS). As a result, I'm familiar with working using pgAdmin for database management and SQL queries.
            <br /><br />An application using the Django framework was later developed as an interface to access the DBMS. The app is then deployed to Heroku allowing a web interface that can be accessed by general users.
            </p>
          </Tab.Pane>

          <Tab.Pane eventKey="third">
          <h3>Synthetic Vehicle Classification</h3>
          <Row className="justify-content-center">
                {
                  vehicleClassification.map((project, index) => {
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
            Road vehicles. They are all around us in this modern age, transporting goods and commuters alike. The demand for visual vehicle recognition has risen for applications such as accident detection and traffic surveillance. Unfortunately, due to myriads of traffic, vehicle occlusion occurs frequently and same-vehicle reidentification becomes a crucial task for tracking. Images of real vehicles with variations in light, angle, and distance are sometimes challenging to obtain. Thus synthetic images offer a solution in combination with real datasets as they allow unlimited training data and better model generalisation.
            <br />< br />Written across two papers are the findings of the best-performing methods of these synthetic vehicle classifications. This small research project details the comparison of three approaches including maximum likelihood classification, simple 2-layer perceptron, and deep learning. The process includes initial dataset analysis and preprocessing such as normalisation, and hyperparameter tuning for deep learning. More detailed explanations and findings can be found in the report encompassing results, discussions, and future work.
            <br />< br />This project uses Python including libraries popular for data analytics and machine learning such as Numpy, Sklearn, Pandas, and Pytorch. The report itself was written in LaTeX.
            </p>
            <Row className="justify-content-center">
            <button onClick={() => window.location.href = "https://drive.google.com/drive/folders/1pnmzniw6Q0slUdRiGN7JwdDFdcjYAI1l?usp=sharing"}>See Work <ArrowRightCircle size={25} /></button>
            </Row>
          </Tab.Pane>

          <Tab.Pane eventKey="secondlast">
          <h3>Marine Animal Tracking</h3>
          <Row className="justify-content-center">
                {
                  marineTracking.map((project, index) => {
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
            The ocean depth is breathtaking but also holds countless mysteries. From an early age, I've been captivated by this charming environment and it is one of my lifetime goals to help us understand more about what lies beyond the waves.
            <br /><br />This research proposal titled "Semi-supervised Vision Based Multiple Objects Tracking on Marine Animals" elaborates on the problem of observing marine animal behaviour, known as focal animal sampling can be tedious and challenging if done manually, especially in rough ocean conditions. Automated tracking with computer vision onboard an autonomous underwater vehicle (AUV) eliminates the risk of human involvement and allows us to explore these harsh environments further. In particular, this research proposes the use of semi-supervised learning that can simply be used by drawing a bounding box around the target without the need for prior labelled training of every marine animal species. This proposed research also focused on social or multiple object tracking to analyse social marine animals such as dolphins and schools of fish.
            <br /><br />The project proposal was developed during my time at university and was used to propose my Honours project. This allows me to demonstrate my curiosity and scientific research skills in the fields of computer vision, robotics, and marine exploration. 
            </p>
            <Row className="justify-content-center">
            <button onClick={() => window.location.href = "https://drive.google.com/file/d/1yawMkKo9ZE79OSIYKcory8AzzDGe7G1I/view?usp=sharing"}>See Proposal <ArrowRightCircle size={25} /></button>
            </Row>
          </Tab.Pane>

          <Tab.Pane eventKey="last">
          <h3>Symphony No. 1, Op. 1</h3>
          <div style={{ display: "flex", justifyContent: "center"}}>
            <img src={music} alt="Treble clef" style={{ width: "20vh" }} />
          </div>
            <h4>
            <br /><br />Something musical is coming soon.
            </h4>
          </Tab.Pane>

        </Tab.Content>
      </Tab.Container>
    )
}