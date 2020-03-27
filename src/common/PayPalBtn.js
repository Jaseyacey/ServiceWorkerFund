/* eslint-disable */
import React, { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';

const PayPalButton = props => {
    const [divCreated, createDivForPayPal] = useState(false);
    const [paymentComplete, setPaymentComplete] = useState(false);
    const [paymentData, setPaymentData] = useState({});

    const findDiv = () => {
        let div = document.getElementById('paypal-button-container');
        if (!div) {
            createDivForPayPal(false);
        } else {
            createDivForPayPal(true);
        }
    }

    const renderPayPal = (props) => {
        paypal.Buttons({
            createOrder: async (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: props.donationAmount
                        }
                    }]
                })
            },
            onApprove: async (data, actions) => {
                return actions.order.capture().then(details => {
                    setPaymentComplete(true);
                    setPaymentData(details);
                })
            },
            onError: async (err) => {
                console.log(err);
                document.getElementById('paypal-err').innerHTML = "An error has occured, please attempt your donation again!"
            }

        }).render('#paypal-button-container');
    }

    useEffect(() => {
        (paymentComplete) ? document.getElementById('paypal-button-container').innerHTML = '' : null
    }, [paymentComplete])

    useEffect(() => {
        (divCreated) ? renderPayPal(props) : findDiv();
    }, [divCreated])

    useEffect(() => {
        if (Object.keys(paymentData).length !== 0) {
            document.getElementById("payerName").innerHTML = `${paymentData.payer.name.given_name}!`;
        }
    }, [paymentData]);

    const ThankYou = () => {

        return (
            <>
                <Row className="justify-content-center mt-3" xs={12} sm={12} md="auto" lg="auto" xl="auto">
                    <Col>
                        <h6>Thank you for your donation <span id="payerName"></span></h6>
                        <p>--Additional thank you message needed--</p>
                        <p id="dataOutputSample"></p>

                    </Col>
                </Row>
                <Row className="justify-content-center mt-5 mb-5" xs={12} sm={12} md="auto" lg="auto" xl="auto">
                    <Col>
                        <Link to="/">Return to home</Link>
                    </Col>
                </Row>
            </>
        )
    }

    return (
        <>
            <div id="paypal-button-container" style={{ width: '250px', marginLeft: 'auto', marginRight: 'auto' }}></div>
            {paymentComplete ? <ThankYou /> : null}
            <div id="paypal-err"></div>
        </>
    )

}

export default PayPalButton;
