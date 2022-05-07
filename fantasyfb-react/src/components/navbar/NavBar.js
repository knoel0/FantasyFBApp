import React from 'react';
import { useAuth } from '../../context/auth/AuthProvider';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export default function NavBar() {

    const { user, onSignOut } = useAuth();
    
    return (
        <>
            <AppBar position="fixed">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>
                        KFFL
                    </Typography>
                    {user && (
                        <IconButton size="large" edge="start" aria-label="menu" onClick={onSignOut} sx={{ mr: 2, color: "#ffffff" }}>
                            <LogoutIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
}