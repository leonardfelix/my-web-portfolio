import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Media (4).jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  // text typing time
  const period = 100;
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(period);
  const toRotate = [ "Machine Learning Engineer", "Software Developer", "Composer?"  ];


  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(2000);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(period);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row>
          <Col xs={8} md={8} xl={8}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <section className="align-element">
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hello! I'm Felix, a `}<br /><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Machine Learning Engineer", "Software Developer", "Composer?" ]'><span className="wrap">{text}</span></span></h1>
                    <p>Welcome to my website! Showcased here is a museum of my porfolio collection on exciting projects that I have done in the past few year ranging from arts to neuroscience.
                      I'm proficient in various programming languages as well as fields in computer science including software engineering, machine learning, DevOps, and presenting those complex terms to general audience.
                      Outside of computer science I'm also interested in marine science, aviation, and engineering. Moreover, I love learning languages and composing music!  
                    </p>
                </section>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={3} md={3} xl={3}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
