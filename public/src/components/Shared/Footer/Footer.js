import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import footer from '../../../images/footer/footer.png'

const Footer = () => {
    return (
        <div>
            <Card  className="bg-dark text-white">
    <Card.Body>
      <Card.Text>
          <Row>
          <Col>
              <h3>Contact Us</h3>
              <h5>66 broklyant, new York 3269 road.</h5>
              <h5>Phone:012 345 678 9101</h5>
              <h5>Email:hopemedical@gmail.com</h5>
          </Col>
          <Col>
              <h3>Useful Link</h3>
              <Link style={{display:"block"}} to="/home">About Us</Link>
              <Link style={{display:"block"}} to="/home">Team</Link>
              <Link style={{display:"block"}} to="/home">Testimonial</Link>
              <Link style={{display:"block"}} to="/home">Services</Link>
          </Col>
          <Col>
              <h3>Recent Post</h3>
              <h5>Bigg Ideas Business branding Info. <br /> December 7, 2021</h5>
              <h5>Bigg Ideas Business branding Info. <br /> December 7, 2021</h5>
          </Col>
          <Col>
              <h3>Services</h3>
              <h5>Emergency</h5>
              <h5>Quality Management in Healthcare</h5>
              <h5>Diagnostic</h5>
              <h5>Therapeutic</h5>
          </Col>
          </Row>
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" className="w-100" src={footer}/>
  </Card>

        </div>
    );
};

export default Footer;