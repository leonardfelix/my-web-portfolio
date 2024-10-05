import { Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';


// import figures for project
import publishRecipe from "../assets/img/projects/dish/publish recipe.png";
import dishSearch from "../assets/img/projects/dish/dish search.png";
import pizzaRecipe from "../assets/img/projects/dish/pizza recipe.png";



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

    const buttonPress = () => {
      document.getElementById("marineButton").onclick = function () {
        window.location.href = "www.google.com";
    }
    };
    
  
    return (
      <Tab.Container id="projects-tabs" defaultActiveKey="first">
        <Nav variant="pills" className="nav-pills-custom mb-5 justify-content-center align-items-center" id="pills-tab">
          <Nav.Item>
            <Nav.Link eventKey="first">DISH</Nav.Link>
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
          <h3>Database</h3>

            <p>
            </p>
          </Tab.Pane>

          <Tab.Pane eventKey="secondlast">
          <h3>Marine Animal Tracking</h3>
         
            <p>
            </p>
            <Row className="justify-content-center">
            <button onClick={() => window.location.href = "https://drive.google.com/file/d/1yawMkKo9ZE79OSIYKcory8AzzDGe7G1I/view?usp=sharing"}>See Proposal <ArrowRightCircle size={25} /></button>
            </Row>
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