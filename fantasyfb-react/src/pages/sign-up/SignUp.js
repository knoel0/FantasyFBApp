import React from 'react';
import { useAuth } from '../../context/auth/AuthProvider';
import { Button, Box, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SignUp() {

    const { onSignUp } = useAuth();
    
    return (
        <Box style={{ marginTop: 30, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Typography component="h1" variant="h5" style={{ fontWeight: "bold" }}>
                Sign Up
            </Typography>
            <Box component="form" onSubmit={onSignUp} noValidate sx={{ mt: 1}}>
                <TextField
                    label="Email"
                    type="text"
                    name="email"
                    id="email"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    autoFocus
                />
                <TextField
                    label="Password"
                    type="text"
                    name="password"
                    id="password"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                />
                <TextField
                    label="Confirm Password"
                    type="text"
                    name="confirm password"
                    id="confirm password"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                />
                <Button type="submit" variant="contained" fullWidth sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "#ffae00",
                    opacity: 0.8,
                    '&hover': {
                        backgroundColor: "#ffae00",
                        opacity: 1
                    }
                }}
                    >Sign Up
                </Button>
            </Box>
            <span>
                Already have an account?
                <Link to='/signin'>Sign In</Link>
            </span>
        </Box>
    );
}