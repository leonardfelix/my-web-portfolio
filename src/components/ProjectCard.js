import { useState, SyntheticEvent } from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, imageCredit = "" }) => {
  const [vertical, setVertical] = useState(false)

  const handeImageLoad = (event: SyntheticEvent) =>{
    const { naturalWidth, naturalHeight } = event.target;
    setVertical(naturalHeight > naturalWidth);
  }

  if (imageCredit){
    description = <p>{description}<br/><br/>{imageCredit}</p>
  } else{
    description = <p>{description}</p>
  }

  return (
    <Col size={12} xs={vertical? 8:11} md={vertical? 3: 6} className="projectcard">
      <div className="proj-imgbx">
        <img src={imgUrl} onLoad={handeImageLoad} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          {description}
        </div>
      </div>
    </Col>
  )
}
