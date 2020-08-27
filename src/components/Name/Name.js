import React from 'react';
import {Card,Button,CardBody,CardTitle,CardSubtitle,CardText,CardImg,} from 'reactstrap';
import './Name.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPlusCircle,faClock } from '@fortawesome/free-solid-svg-icons';

const Name = (props) => {
  console.log(props);
  const {name,image,price,description,offer}=props.course;
  return (
    <div className="col-md-4 col-lg-3">
      <Card >
        <CardImg top width="100%" src={image} alt="" />
        <CardBody>
       <CardTitle>{name}</CardTitle>
       <CardSubtitle> <small>{description}</small></CardSubtitle>
        <CardText> ${price} <br/>
        <p style={{color:"green"}}> <small><FontAwesomeIcon icon={faClock} /> {offer} days  left at this price!</small></p>
        </CardText>

          <Button color="primary"className="main-button" onClick={()=>props.handleAddCourse(props.course)}> <FontAwesomeIcon icon={faPlusCircle} /> Add to cart</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Name;