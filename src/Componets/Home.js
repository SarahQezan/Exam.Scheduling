import Carousel from 'react-bootstrap/Carousel';
import images1 from "./Image/images1.jpg";
import images2 from "./Image/images2.webp";
import images3 from "./Image/images3.webp";
import React from "react";
import Hader from './Hader';
import Footer from './Footer';

function Home() {  

  return (
    <>
    <Hader/>
    <Carousel fade   >
          <Carousel.Item>
            <img 
            style={{height:'600px'}}
            className="d-block w-100  "
            src={images1}
            alt="First slide"
            />
            <Carousel.Caption style={{color:'black',textShadow: '0 0 3px #baf7c7', borderStyle: 'solid', borderWidth: '20px 5px' }}>
                <h3 >First slide label</h3>
                <p >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{height:'600px'}}
            className="d-block w-100"
            src={images2}
            alt="Second slide"
            />
            <Carousel.Caption style={{color:'black'}}>
                <h3 >Second slide label</h3>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{height:'600px'}}
            className="d-block w-100"
            src={images3}
            alt="Third slide"
            />
            <Carousel.Caption style={{color:'black'}}>
                <h3 >Third slide label</h3>
                <p >Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Footer/>
        </>
  );
}

export default Home;