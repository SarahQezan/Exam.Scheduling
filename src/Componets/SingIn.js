import React from "react";
import {Form, Button,Image,Container,Col,Row} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Hader from "./Hader";
import img from "./Image/img.webp";

function SingIn  ()  {
  const navigate = useNavigate();

  const  SingUpMethod = () => {
    navigate('/SingUp');
  };
  const  SingInMethod = () => {
    navigate('/');
  };

  return (
  <Container fluid ='true'  >
    <Hader/>
    <Row   style={{ paddingTop:'50PX'}}>
    <Col xs={6}>
     <div style={{ paddingTop:'55PX', paddingLeft:'90px'}} >
      <Form className="square border  rounded p-3"  >
          <Row>
          <Col xs={6}>
          <Button onClick={SingInMethod} style={{backgroundColor:'#03fc7b', border:'#03fc7b',width:'250px' ,boxShadow:"none"}} > Sing in</Button>
          </Col>
          <Col xs={6}>
          <Button onClick={SingUpMethod} style={{backgroundColor:'#189655 ', border:'#03fc7b',width:'250px'}} >
            Sing up
          </Button>
          </Col>
          </Row>
       <br/>
          <Form.Label style={{fontSize:'50px',color:'#03fc7b'}}>Login Form</Form.Label>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter your name</Form.Label>
              <Form.Control type="name" placeholder="Enter your name" required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword" >
              <Form.Label>Enter your password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password"required />
          </Form.Group>
          
          <br/>
          <Button style={{backgroundColor:'#03fc7b', border:'#03fc7b'}} type="submit">Submit</Button>
      </Form>
      </div>
    </Col>
    
      < Col xs={6}>
         <Image src={img}  className="mx-auto d-block w-75" /> 
      </Col>
    </Row> 
    <Footer />    
</Container >
);
  };

export default SingIn;

