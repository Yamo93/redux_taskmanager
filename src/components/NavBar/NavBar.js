import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.scss';

const navBar = (props) => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
    <li>{props.signedin ? <NavLink to="/logout">Logout</NavLink> : <NavLink to="/login">Login</NavLink>}</li>
                {!props.signedin ? <li><NavLink to="/signup">Sign Up</NavLink></li> : null}
            </ul>
        </nav>
    );
};

export default navBar;