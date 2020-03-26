import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import '../App.css';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <>
        <Jumbotron fluid>
            <h1>ServiceFund for service industry workers</h1>
            <h6>A site for those service industry workers dealing with lost income from COVID-19</h6>
        </Jumbotron>
        <Container>
            <Row class="homeBody">
                <Col />
                <Col xs={6} className="covidHeader">
                    <h4>Lets help the poor folks who have lost their jobs due to COVID-19</h4>
                    <Container fluid>
                        <Row>
                            <Col></Col>
                        </Row>
                    </Container>
                    <h3>Money donation process:</h3>
                    <ListGroup>
                        <ListGroup.Item as="li">
                            <p>Donations are recieved through PayPal on the <Link to="/DonatePage">Donation Page</Link></p>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <p>Service industry workers apply through the <a href="./pages/PaymentPage">Application Page</a></p>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <p>We analyse each case and donate 20% of their monthly earnings, this is established by them submitting their monthly payslips.</p>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <p>Each case is dealt with on its merit.</p>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    </>
);

export default HomePage;