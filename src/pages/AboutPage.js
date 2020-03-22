import React from 'react';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

const AboutPage = () => (
    <>
<Container fluid className = " headerAbout ">
  <Jumbotron flair>
    <header>
      About Us
    </header>
  </Jumbotron>
</Container>
<Container className= " aboutBodyHeader ">
  <Row>
    <Col></Col>
    <Col xs={6}>
      <h1 className = " aboutBody "> Why?</h1>
      <h6>The service industry has been hit the hardest by this pandemic.<br></br>
        Many workers are out of jobs and struggling to pay bills. <br></br>
        There are many ways in which the Government is helping, for example they are paying 80% of their salaries up to £2500. 
        Which is why I have decided to try and help top their wages up by 20% with this site.
      </h6>
      <h1>How></h1>
    </Col>
    <Col></Col>
  </Row>
  
</Container>
    </>
)

export default AboutPage; 