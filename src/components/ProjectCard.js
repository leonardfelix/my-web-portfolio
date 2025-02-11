import { useState, SyntheticEvent } from "react";
import { Col } from "react-bootstrap";
import MediaQuery from "react-responsive";

export const ProjectCard = ({ title, description, imgUrl, imageCredit = "" }) => {
  const [vertical, setVertical] = useState(false)
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)

  const handeImageLoad = (event: SyntheticEvent) =>{
    const { naturalWidth, naturalHeight } = event.target;
    setVertical(naturalHeight > naturalWidth);
    setHeight(naturalHeight);
    setWidth(naturalWidth);
  }

  if (imageCredit){
    description = <p>{description}<br/><br/>{imageCredit}</p>
  } else{
    description = <p>{description}</p>
  }

  return (
    <Col size={12} xs={vertical? 8:11} md={vertical? 6: 8} lg={vertical? 3: 6} className="projectcard">
      <div className="proj-imgbx">
        <img src={imgUrl} onLoad={handeImageLoad} />
        <div className="proj-txtx">
          <h4>{title}</h4>

          <MediaQuery maxWidth={767}>
              <div className="projectcard-description" style={{maxHeight:200*height/width}}>
                {description}
              </div>
          </MediaQuery>

          <MediaQuery minWidth={768}>
              <div className="projectcard-description">
                {description}
              </div>
          </MediaQuery>
          
        </div>
      </div>
    </Col>
  )
}
