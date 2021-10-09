import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from 'redux/auth/auth-selectors';

function PrivateRoute({ redirectTo, children, ...routeProps }) {
    const isLoggedIn = useSelector(getIsAuthenticated);

    return (
        <Route {...routeProps}>
            {isLoggedIn ? children : <Redirect to={redirectTo} />}
        </Route>
    );
}

export default PrivateRoute;
