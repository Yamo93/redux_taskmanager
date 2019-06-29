import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.scss';

const navBar = (props) => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/auth">Sign Up</NavLink></li>
            </ul>
        </nav>
    );
};

export default navBar;