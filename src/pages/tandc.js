import React from 'react';
import Container from "react-bootstrap/Container";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const tandc = () => (
<>
    <Container>
        <Jumbotron flair>
            <h1>Terms & Conditions</h1>
        </Jumbotron>
    </Container>
    <Container>
    <Row>
        <Col>1 of 3</Col>
        <Col xs={6}>
            <h1>
                What terms you looking for?
            </h1>
        </Col>
        <Col>3 of 3</Col>
    </Row>
    </Container>
    </>
)

export default tandc;