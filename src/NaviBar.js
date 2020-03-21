import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/AboutPage">About Us</Link>
            </li>
            <li>
                <Link to="/DonatePage">Donation Page</Link>
            </li>
            <li>
                <Link to="PaymentPage">Payment Page</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;
