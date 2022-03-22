import React from 'react'
import { Menu, Divider } from '@mantine/core';
import { Avatar } from '@mantine/core';
import { useAuth } from '../../../../../src/context/AuthContext';
import { NextLink } from '@mantine/next';

const UserMenu = () => {
    const { logout } = useAuth();
    return (
        <Menu control={<Avatar radius="xl" size='md'
            style={{ cursor: 'pointer' }}
            classNames={{
                placeholder: 'main-avatar',
            }}>MK</Avatar>}>
            <Menu.Item component={NextLink} href="/user?page=profile">Profile</Menu.Item>
            <Menu.Item component={NextLink} href="/user?page=basket" >Your Basket</Menu.Item>
            <Menu.Item component={NextLink} href="/user?page=orders" >Your Orders</Menu.Item>
            <Menu.Item component={NextLink} href="/user?page=checkout" >Checkout</Menu.Item>
            <Divider />
            <Menu.Label>User</Menu.Label>
            <Menu.Item color="red" onClick={logout}>Logout</Menu.Item>
        </Menu>
    );
}

export default UserMenu