
import { ImEnvelop,ImPhone,ImLocation2 ,ImFacebook2,ImLinkedin,ImGithub,ImYoutube} from "react-icons/im";
import 'bootstrap/dist/css/bootstrap.min.css' ;
import { Row,Container ,Col} from "react-bootstrap";
import React from "react";


function Footer() {
  
    return (
        
      <Container  style={{backgroundColor: '#baf7c7'}}  fluid="true "> 
        <Row className="p-4">
          <Col className='col-md-3 col-sm-6 '>
            <h4>Connect us</h4>         
            <pre><ImPhone /> Phone: 05526797864                   </pre>
            <pre><ImEnvelop/> Email: sarahqezan@stu.aydin.edu.tr  </pre>
            <pre><ImLocation2/> location: Gökevler Mah, Adnan Kahveci </pre>
         </Col>
         <Col className='col-md-3 col-sm-6'>
            <h4>Social Media</h4>
            <a href="https://github.com/SarahQezan" ><ImGithub size={50} className="p-2 m-1" /></a>
            <a href="https://www.linkedin.com/in/sarah-mohammed-qezan-6575b9257/"><ImLinkedin className="p-2"size={50}/></a>
            <a href="https://ar-ar.facebook.com/sarah.gazan.1/"><ImFacebook2 className="p-2" size={50}/></a>
            <a href="https://www.youtube.com/results?search_query=learn+node+js"><ImYoutube className="p-2" size={60}/></a>
          </Col>
          <Col className='col-md-3 col-sm-6'>
            <h4>test</h4>
            <ul className='list-unstyled'>
              <li>test1</li>
              <li>test1</li>
              <li>test1</li>
              <li>test1</li>
            </ul>
          </Col>
          
          <Col className='col-md-3 col-sm-6'>
            <h4>test</h4>
            <ul className='list-unstyled'>
              <li>test1</li>
              <li>test1</li>
              <li>test1</li>
              <li>test1</li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Footer;
  

  