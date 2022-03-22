import React from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import { useDispatch } from 'react-redux';
import { AppBarStyled, ContainerStyled, ToolBarStyled, Ul } from './Header.Styled'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../../../src/context/AuthContext';
import { CustomDrawer } from '../Drawer/Drawer';
import { drawer } from '../../store/slices/drawer/drawerSlices';

export const ResponsiveAppBar = () => {

    const dispatch = useDispatch();

    const { pathname, push } = useRouter();
    const { logout } = useAuth();

    return (
        <AppBarStyled position="static" className='CustomNavBar' location={pathname}>
            <ContainerStyled>
                <CustomDrawer />
                <ToolBarStyled disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={() => dispatch(drawer())}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <Image src={"/images/logo.svg"} alt="" width="130" height="30" />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {
                            (pathname === '/login' || pathname === '/register') ? <Image src={"/images/whiteLogo.svg"} alt="" width="130" height="30" /> : <Image src={"/images/logo.svg"} alt="" width="130" height="30" />
                        }
                        <Ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/restaurants">
                                    <a>Restaurants</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us">
                                    <a>About us</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/how-it-work">
                                    <a>How it works</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/faqs">
                                    <a>FAQs</a>
                                </Link>
                            </li>
                        </Ul>
                    </Box>

                    <Box sx={{ flexGrow: 0, flexDirection: 'row' }}>
                        {/* <Tooltip title="Open settings"> */}
                        <IconButton sx={{ p: 1 }}>
                            {/* <AddButton /> */}
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                        <IconButton sx={{ p: 1 }}>
                            {/* <AddButton /> */}
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                        {/* </Tooltip> */}
                    </Box>
                </ToolBarStyled>
            </ContainerStyled>
        </AppBarStyled >
    );
};
