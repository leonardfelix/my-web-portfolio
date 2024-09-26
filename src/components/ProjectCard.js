import { useState, SyntheticEvent } from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  const [vertical, setVertical] = useState(false)

  const handeImageLoad = (event: SyntheticEvent) =>{
    const { naturalWidth, naturalHeight } = event.target;
    setVertical(naturalHeight > naturalWidth);
  }

  return (
    <Col size={12} sm={vertical? 4:6} md={vertical? 3: 6} className="projectcard">
      <div className="proj-imgbx">
        <img src={imgUrl} onLoad={handeImageLoad} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  )
}
