import React from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <div>
      <h3>Course e Learning</h3>
      <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About Us</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button> 
    </Form>
    <FontAwesomeIcon icon={faCartPlus} style={{color:"yellowgreen"}} />
  </Navbar>

      
    </div>
  );
};

export default Header;