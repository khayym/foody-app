import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../../src/context/AuthContext';
import { useRouter } from 'next/router';

export const Header = () => {
    const { user, logout } = useAuth();
    console.log(user);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigation = useRouter();
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        console.log('isledi');
    }, [user, navigation])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <StyledHeader position="static" nav={navigation.pathname}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Photos
                    </Typography>
                    {user && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={logout}>My account</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </StyledHeader>
        </Box>
    );
}


const StyledHeader = styled(AppBar)`
height:7rem;
background-color: ${({ theme, nav }) => nav === '/login' || nav === '/register' ? theme.colors.lightRed : theme.colors.whiteLight1} !important;
box-shadow:none !important;

@media(max-width:47.25rem) {
    height:3.75rem;
}
`

