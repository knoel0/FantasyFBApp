import React, { useState } from 'react';
import { useAuth } from '../../context/auth/AuthProvider';
import { Button, Box, Container, CssBaseline, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function SignIn() {

    const { onSignIn } = useAuth();

    const [showPassword, setShowPassword] = useState(false);

    function handleClickShowPassword() {
        setShowPassword(!showPassword);
    }
    
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{ marginTop: 30, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography component="h1" variant="h5" style={{ fontWeight: "bold" }}>
                    Sign In
                </Typography>
                <Box component="form" onSubmit={onSignIn} noValidate sx={{ mt: 1}}>
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
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
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
                        >Sign In
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}