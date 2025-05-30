import { Container, Row, Col } from "react-bootstrap";
import navIconLinkedin from '../assets/img/linkedin.svg';
import navIconGithub from '../assets/img/github.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <h1>Leonard Felix Sadewa Siahilan</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIconLinkedin} alt="Icon" /></a>
              <a href="#"><img src={navIconGithub} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
