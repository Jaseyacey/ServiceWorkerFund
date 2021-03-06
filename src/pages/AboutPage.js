import React from 'react';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import * as firebase from 'firebase';

const AboutPage = () => (
    <>
<Container fluid className = " headerAbout ">
  <Jumbotron flair>
      <h1>About Us</h1>
  </Jumbotron>
</Container>
<Container className= " aboutBodyHeader ">
  <Row>
    <Col></Col>
    <Col xs={6}>
      <h1> Why?</h1>
      <h6>The service industry has been hit the hardest by this pandemic.<br></br>
        Many workers are out of jobs and struggling to pay bills. <br></br>
        There are many ways in which the Government is helping, for example they are paying 80% of their salaries up to £2500. 
        Which is why I have decided to try and help top their wages up by 20% with this site. This is a top up and not a new salary
      </h6>
      <h1>How?</h1>
      <h6>A donation is made through the donation page. Then an application is made through the application page, by people who have been made redundant
        The stipulations of an applicant being able to be eligible for a donation are as below: 
        <br></br>
        <ul>
          <li>
            <p>Currently unemployed</p>
          </li>
          <li>
            <p>Able to recieve the government help as stipulated by their guidelines. </p>
          </li>
        </ul>
      </h6>
    </Col>
    <Col></Col>
  </Row>
  
</Container>
    </>
)
export default AboutPage; 