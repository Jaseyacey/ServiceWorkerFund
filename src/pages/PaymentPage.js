import React from 'react';
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col' 
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';

const PaymentPage = () => (
    <>
      <Jumbotron>
        <h1>Application Page</h1>
      </Jumbotron>
      <Col xs={6} className="contactMeForm">
        <h1>Application Form</h1>
          <h6>Have you lost your job?</h6>
      </Col>
      
    </>
);

export default PaymentPage;