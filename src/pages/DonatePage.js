import React, { useState, useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import PayPalBtn from '../common/PayPalBtn'


const DonatePage = () => {
    const [donationReady, setDonationReady] = useState(false);
    const [amount, setAmount] = useState(0);

    let styles = {
        width: '100px',
        margin: '5px',
        inputWidth: '200px'
    }
    /**
    <Button className="button" value="continue" onClick={this.saveAndContinue}> Continue </Button>
  saveAndContinue = (e) => {
       e.preventDefault();
       console.log(e.target.value); //will give you the value continue
       this.props.nextStep();
  }
    */

    const setAmountHandler = (e) => {
        //console.log(e.target.value);
        let amountSubmitted = e.target.value;
        let finalAmount = amountSubmitted;

        if (amountSubmitted.indexOf('.') !== -1) {
            console.log("DECIMAL!!");
            let amountArr = amountSubmitted.split('.');
            console.log(amountArr);
            finalAmount = amountArr[0];
        }

        if (amountSubmitted.indexOf('-') !== -1) {
            console.log("Negative!!");
            finalAmount = amountSubmitted.replace('-', '');
        }

        setAmount(finalAmount);
    }

    const setDonationReadyHandler = () => {
        setDonationReady(true);
    }

    useEffect(() => {
        console.log("useEffect: " + amount);
    }, [amount])



    return (
        <>
            <Container fluid>
                <Jumbotron fluid>

                    <h1>Donate Page</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
            </p>
                </Jumbotron>
            </Container>

            <Container>

                {donationReady ? (
                    <>
                        <Row className="justify-content-center mt-5" xs={12} sm={12} md="auto" lg="auto" xl="auto">
                            <Col>
                                <h3>Donation amount: ${amount}</h3>
                            </Col>
                        </Row>
                        <Row className="justify-content-center mt-5" xs={12} sm={12} md="auto" lg="auto" xl="auto">
                            <Col>

                                <PayPalBtn donationAmount={amount} />
                            </Col>
                        </Row>
                    </>
                ) : (
                        <>


                            <h3>Please choose a donation amount:</h3>
                            <Row className="justify-content-center mt-5" xs={12} sm={12} md="auto" lg="auto" xl="auto">
                                <Col>
                                    <Button variant="outline-primary" value="1" type="button" id="oneBtn" size="lg" style={{ width: styles.width, margin: styles.margin }} onClick={setAmountHandler}>$1</Button>
                                    <Button variant="outline-primary" value="5" type="button" size="lg" style={{ width: styles.width, margin: styles.margin }} onClick={setAmountHandler}>$5</Button>
                                </Col>
                            </Row>
                            <Row className="justify-content-center" xs={12} sm={12} md="auto" lg="auto" xl="auto">
                                <Col>
                                    <Button variant="outline-primary" value="10" type="button" size="lg" style={{ width: styles.width, margin: styles.margin }} onClick={setAmountHandler}>$10</Button>
                                    <Button variant="outline-primary" value="100" type="button" size="lg" style={{ width: styles.width, margin: styles.margin }} onClick={setAmountHandler}>$100</Button>
                                </Col>
                            </Row>
                            <Row className="justify-content-center mt-3" xs={12} sm={12} md="auto" lg="auto" xl="auto">
                                <Col>
                                    <Form.Group as={Col} md={{ span: 4, offset: 4 }} sm={{ span: 8 }} xs={{ span: 8, offset: 2 }}>
                                        <Form.Control type="number" placeholder="please enter other amount" onChange={setAmountHandler}></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="justify-content-center mt-3" xs={12} sm={12} md="auto" lg="auto" xl="auto">
                                <Col>

                                    <Button variant="primary" style={{ width: styles.inputWidth }} onClick={setDonationReadyHandler}>Proceed to Donation</Button>

                                </Col>
                            </Row>

                        </>
                    )}
            </Container>
        </>
    )
};

export default DonatePage;