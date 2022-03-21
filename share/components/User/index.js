import { Grid } from '@mui/material'
import React from 'react'
import SidebarUser from './components/sidebar'
import { UserContainer, UserPageContent } from './User.Styled'

export const UserLayout = ({ children }) => {
    return (
        <UserContainer container>
            <Grid item xs={3} style={{ maxWidth: '325px', height: '515px', backgroundColor: '#F3F4F6', borderRadius: '5px' }} className="sidebar">
                <SidebarUser />
            </Grid>
            <UserPageContent item xs>
                {children}
            </UserPageContent>
        </UserContainer >

    )
}


