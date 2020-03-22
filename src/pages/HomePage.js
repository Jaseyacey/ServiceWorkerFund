import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage = () => (
    <>
    <Jumbotron fluid>
        <h1>ServiceFund for service industry workers</h1>
        <h6>A site for those service industry workers dealing with lost income from COVID-19</h6>
    </Jumbotron>
    <Container>
    <Row class="homeBody">
    <Col>1 of 3</Col>
    <Col xs={6} class="covidHeader">
        <h6>Lets help the poor folks who have lost their jobs due to COVID-19</h6>
        <h6>Money donation process:</h6>
        <ul>
            <li>
                <p>1. Donations are recieved through PayPal on the <a href="./pages/DonationPage">Donation Page</a></p>
            </li>
            <li>
                <p>2. Service industry workers apply through the <a href="./pages/PaymentPage">Payment Page</a></p>
            </li>
            <li>
                <p>3. We analyse each case and donate 20% of their monthly earnings, this is established by them submitting their monthly payslips.</p>
            </li>
        </ul>
    </Col>
    <Col>3 of 3</Col>
  </Row>
    </Container>
    </>
);

export default HomePage;