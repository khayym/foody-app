import React from 'react'
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { useAuth } from '../../../src/context/AuthContext';
import { UserInterface } from './userProfileDisplay.Styled';


const UserProfileDisplay = () => {

    const { user } = useAuth();

    return (
        user && (
            <UserInterface>
                <IconButton sx={{ p: 1 }}>
                    {/* <AddButton /> */}
                    <Avatar alt="Remy Sharp" src="https://ca.slack-edge.com/T02JE9BKJ2V-U02J1LWQBB4-c0da48f24153-72" />
                </IconButton>
                <h2>{user.displayName}</h2>
            </UserInterface>
        )
    )
}

export default UserProfileDisplay

