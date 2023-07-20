import { useState } from "react";
import { Card,Button, Container,Row } from "react-bootstrap"
import { Link } from "react-router-dom";

const MyCard=(props)=>{
const [skilID,setSkillId]=useState(props.id);

    return(
        <Container>
            <Row>
        <Card  style={{ width: '18rem'}}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
       {skilID}
<Link  to={`/skill/${skilID}`} className="btn btn-primary" >know more</Link>

      </Card.Body>
    </Card>
            </Row>
        </Container>
    )
}


export default MyCard;