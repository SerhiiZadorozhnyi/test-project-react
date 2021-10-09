import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAuthenticated } from 'redux/auth/auth-selectors';

import { UserMenu } from '../components/UserMenu/UserMenu'


function Navigation() {
    const isLoading = useSelector(getIsAuthenticated);

    return (
        // <div>
            <nav>
                <NavLink className="navLink" to="/" exact>
                    Home
                </NavLink>
                {isLoading && (
                    <NavLink className="navLink" to="/contacts" exact>
                        Contacts
                    </NavLink>
                )}
                {/* <UserMenu /> */}
            </nav>
        // </div>
    );
}

export default Navigation;