import React, { useEffect } from 'react'
import Link from 'next/link';
import { Users, Basket, ClipboardList, Checkbox, Logout } from 'tabler-icons-react';
import { useRouter } from 'next/router';
import { useAuth } from '../../../../../src/context/AuthContext';
import { CustomLinkContainer, Items } from './Sidebar.Styled';


const SidebarUser = () => {
    const { query: { page }, push, pathname } = useRouter();

    const activeColors = "rgba(214, 54, 38, 0.3)";
    const { logout } = useAuth();

    useEffect(() => {
        pathname === '/user' && push('/user?page=profile')
    }, [pathname])

    return (
        <CustomLinkContainer>
            <Link href={'/user?page=profile'}>
                <a>
                    <Items activeTab={page === 'profile' ? activeColors : null}>
                        <Users
                            size={22}
                            strokeWidth={1.5}

                        />
                        <p>Profil</p>
                    </Items>
                </a>
            </Link>

            <Link href={'/user?page=basket'}>
                <a>
                    <Items activeTab={page === 'basket' ? activeColors : null}>
                        <Basket
                            size={22}
                            strokeWidth={1.5}

                        />
                        <p>Your basket</p>
                    </Items>
                </a>
            </Link>

            <Link href={'/user?page=orders'}>
                <a>
                    <Items activeTab={page === 'orders' ? activeColors : null}>
                        <ClipboardList
                            size={22}
                            strokeWidth={1.5}

                        />
                        <p>Your orders</p>
                    </Items>
                </a>
            </Link>

            <Link href={'/user?page=checkout'}>
                <a>
                    <Items activeTab={page === 'checkout' ? activeColors : null}>
                        <Checkbox
                            size={22}
                            strokeWidth={1.5}
                        />
                        <p>Checkout</p>
                    </Items>
                </a>
            </Link>
            <Items onClick={logout}>
                <Logout
                    size={22}
                    strokeWidth={1.5}
                />
                <p>Logout</p>
            </Items>
        </CustomLinkContainer >


    )
}

export default SidebarUser



