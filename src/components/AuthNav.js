import React from 'react';
import { NavLink } from 'react-router-dom';


const AuthNav = () => (
    <div>
        <NavLink to="/register" exact className="navLink">
            Sign Up
        </NavLink>
        <NavLink to="/login" exact className="navLink">
            Sign In
        </NavLink>
    </div>
);

export default AuthNav;