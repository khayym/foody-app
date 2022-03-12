import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DrawerStyled, Li, LinkStyled, LogOutButton, SingButton, UL } from './Drawer.Styled';
import { drawer } from '../../store/slices/drawer/drawerSlices';
import Link from 'next/link';
import { useAuth } from '../../../src/context/AuthContext';
import UserProfileDisplay from '../userProfileDisplay/userProfileDisplay';


export const CustomDrawer = () => {

    const { user, logout } = useAuth();
    const dispatch = useDispatch()
    const { status } = useSelector(props => props.drawer);

    return (
        <DrawerStyled
            transitionDuration={500}
            variant="temporary"
            open={status}
            onClose={() => dispatch(drawer())}
        >

            <button className="birinci" onClick={() => dispatch(drawer())} >
                {/* <IoIosArrowBack /> */}
                {/* <Image src={'/images/logo.svg'} width='100' height='50' alt='logo' /> */}
            </button>

            <div className="ikinci">

                {
                    !user ? (
                        <SingButton onClick={() => dispatch(drawer())}>
                            <Link href="/register">
                                <a href="">
                                    Sing up
                                </a>
                            </Link>
                        </SingButton>
                    ) : <UserProfileDisplay />


                }
                <UL>
                    <Li onClick={() => dispatch(drawer())}>
                        {
                            <LinkStyled href="/">
                                <h2>Home</h2>
                            </LinkStyled>
                        }
                    </Li>

                    {
                        user && (
                            <>
                                <Li onClick={() => dispatch(drawer())}>
                                    {
                                        <LinkStyled href='/about-us'>
                                            <h2>Profil</h2>
                                        </LinkStyled>
                                    }
                                </Li>

                                <Li onClick={() => dispatch(drawer())}>
                                    {
                                        <LinkStyled href='/your-order'>
                                            <h2>Your order</h2>
                                        </LinkStyled>
                                    }
                                </Li>
                                <Li onClick={() => dispatch(drawer())}>
                                    {
                                        <LinkStyled href='/your-baskte'>
                                            <h2>Your Basket</h2>
                                        </LinkStyled>
                                    }
                                </Li>
                                <Li onClick={() => dispatch(drawer())}>
                                    {
                                        <LinkStyled href='/checkour'>
                                            <h2>Checkout</h2>
                                        </LinkStyled>
                                    }
                                </Li>
                            </>
                        )
                    }

                    <Li onClick={() => dispatch(drawer())}>
                        {
                            <LinkStyled href='/about-us'>
                                <h2>About us</h2>
                            </LinkStyled>
                        }
                    </Li>

                    <Li onClick={() => dispatch(drawer())}>
                        {
                            <LinkStyled href='/how-it-work'>
                                <h2>How it Works</h2>
                            </LinkStyled>
                        }
                    </Li>
                    <Li onClick={() => dispatch(drawer())}>
                        {
                            <LinkStyled href='/faq'>
                                <h2>FAQs</h2>
                            </LinkStyled>
                        }
                    </Li>

                    {
                        user && <LogOutButton onClick={logout}>
                            {
                                <LinkStyled href='/'>
                                    <h2>Log out</h2>
                                </LinkStyled>
                            }
                        </LogOutButton>
                    }
                </UL>



            </div>


        </DrawerStyled >
    )
}

