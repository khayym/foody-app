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
                    <Avatar alt="Remy Sharp" />
                </IconButton>
                <h2>{user.displayName}</h2>
            </UserInterface>
        )
    )
}

export default UserProfileDisplay

