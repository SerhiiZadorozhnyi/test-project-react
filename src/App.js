import { Switch } from 'react-router-dom';
import AppBar from 'components/AppBar';
import RegisterWiew from 'components/views/RegisterView';
import LoginWiew from 'components/views/LoginView';
import ContactView from 'components/views/ContactView';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import HomePage from 'components/views/HomePage';
import ContactEdit from 'components/ContactList/ContactEdit';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from 'redux/auth/auth-operations';

import './App.css';


function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getCurrentUser()), [dispatch]);

  return (
    <div className="Container">
      <AppBar />

      <Switch>
        <PublicRoute exact path="/">
          <HomePage />
        </PublicRoute>

        <PublicRoute path="/register" redirectTo="/contacts" restricted>
          <RegisterWiew />
        </PublicRoute>

        <PublicRoute path="/login" redirectTo="/contacts" restricted>
          <LoginWiew />
        </PublicRoute>

        <PrivateRoute exact path="/contacts" redirectTo="/login">
          <ContactView />
        </PrivateRoute>

        <PrivateRoute path="/contacts/:contactId" redirectTo="/login">
          <ContactEdit />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;