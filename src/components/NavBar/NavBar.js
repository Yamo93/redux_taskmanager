import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.scss';

const navBar = (props) => {
    return (
        <nav className="navbar">
            <ul>
                
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/auth">Login</NavLink></li>
                <li><NavLink to="/signup">Sign Up</NavLink></li>
            </ul>
        </nav>
    );
};

export default navBar;