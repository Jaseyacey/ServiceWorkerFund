import React from 'react';
import Form from 'react-bootstrap/Form'
import { Jumbotron } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import '../App.css';

const ContactMe  = () => (
<>

<Jumbotron>
    <h1>Contact Me</h1>
</Jumbotron>
        <Container>
            <Col xs={6} className="contactMeForm">
                <Form>
                <Form.Group controlId="submitForm">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Label>First Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter First Name" id="firstName" />
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Last Name" id="lastName"/>
                <Form.Group controlId="formBasicPassword" >
                <Form.Label>Ask Us Anything</Form.Label>
                    <Form.Control as="textarea" rows="3"/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="contactMeForm" id="submitForm" onClick = {console.log("Message Sent")} >
                    Submit
                </Button>
                </Form>
            </Col>
        </Container>
</> 
)

export default ContactMe;