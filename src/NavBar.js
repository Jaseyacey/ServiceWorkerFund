import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/AboutPage">About Page</Link>
            </li>
            <li>
                <Link to="/DonatePage">Donate Page</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;  
