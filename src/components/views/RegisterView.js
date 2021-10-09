import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

import './ViewPage.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


function RegisterWiew() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    
    const handleChange = ({ target }) => {
        const { name, value } = target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(register({ name, email, password }));
        reset();
    };

    const reset = () => {
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <Container component="main" maxWidth="xs">
            <div className="container__login">
                <div className="avatar__class">
                    <Avatar>
                        <LockOutlinedIcon />
                    </Avatar>
                </div>

                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="input__reg">
                        <TextField
                            type="text"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Name"
                            name="name"
                            value={name}
                            autoComplete="fname"
                            autoFocus
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input__reg">
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            label="Email Address"
                            name="email"
                            value={email}
                            autoComplete="email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input__reg">
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            label="Password"
                            name="password"
                            type="password"
                            value={password}
                            autoComplete="current-password"
                            onChange={handleChange}
                        />
                    </div>

                    <Button type="submit" fullWidth variant="contained" color="primary">
                        Sign Up
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default RegisterWiew;