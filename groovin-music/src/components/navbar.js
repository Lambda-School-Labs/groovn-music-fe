import React from 'react';
import { NavLink } from 'react-router-dom';
import '../navbar.css';

const Navbar = () => {
        <nav className="navbar">
            <NavLink
                exact
                activeClassName="navbar_link--active"
                className="navbar_link"
                to="/"
            >
            Home
            </NavLink>
            <NavLink
                activeClassName="navbar_link--active"
                className="navbar_link"
                to="/Sign-Up"
            >
            Sign-Up
            </NavLink>
            <NavLink
                activeClassName="navbar_link--active"
                className="navbar_link"
                to="/Log-In"
            >
            Log-In
            </NavLink>
        </nav>

};

export default Navbar;