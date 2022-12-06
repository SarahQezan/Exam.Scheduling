import { Container,Form,Nav,Navbar,NavDropdown, NavLink} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import { CiSearch } from "react-icons/ci";

function Hader() {
  return (
    <Navbar style={{backgroundColor: '#baf7c7'}}  fixed='top'>
     <Container >
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Nav >
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"> Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">  Separated link</NavDropdown.Item>
            </NavDropdown>
        </Nav>   
        <Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              style = {{borderRadius: '48px'}}
            />
          </Form>
          <NavLink style = {{borderRadius: '148px', padding:'0', position: 'absolute',  right: '108px', top:'3px'}}>
            <CiSearch color='dark' size={55}  />
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Hader;