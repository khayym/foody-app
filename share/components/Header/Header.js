import React from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { AppBarStyled, ContainerStyled, SingInButton, ToolBarStyled, Ul } from './Header.Styled'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../../../src/context/AuthContext';
import { CustomDrawer } from '../Drawer/Drawer';
import { drawer } from '../../store/slices/drawer/drawerSlices';
import UserMenu from './components/user';
import { Avatar } from '@mantine/core';
import { Basket } from 'tabler-icons-react';

export const ResponsiveAppBar = () => {

    const dispatch = useDispatch();
    const { user } = useAuth();
    const { pathname, replace, push } = useRouter();

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
                            (pathname === '/login' || pathname === '/register') ? <Image src={"/images/whiteLogo.svg"} alt="" width="130" height="30" onClick={() => replace('/')} /> : <Image src={"/images/logo.svg"} alt="" onClick={() => replace('/')} width="130" height="30" />
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

                    <div className='user-side'>

                        {
                            user ? <>

                                <Avatar
                                    style={{ cursor: 'pointer' }}
                                    radius="xl"
                                    classNames={{
                                        placeholder: 'avatar-root',
                                    }} size='md'>
                                    <Basket
                                        size={24}
                                        strokeWidth={2}
                                        color={'#fff'}
                                        onClick={() => push('/user?page=basket')}
                                    />
                                </Avatar >
                                <UserMenu />

                            </> : <SingInButton pathname={pathname} onClick={() => replace('/register')}>Sing up</SingInButton>

                        }


                    </div>
                </ToolBarStyled>
            </ContainerStyled>
        </AppBarStyled >
    );
};
