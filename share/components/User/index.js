import { Grid } from '@mui/material'
import React from 'react'
import SidebarUser from './components/sidebar'
import { UserContainer, UserPageContent } from './User.Styled'
import { useRouter } from 'next/router'
export const UserLayout = ({ children }) => {
    let { query: { page } } = useRouter()

    return (
        <UserContainer container>
            <Grid item xs={3} style={{ maxWidth: '325px', height: '515px', backgroundColor: '#F3F4F6', borderRadius: '5px' }} className="sidebar">
                <SidebarUser />
            </Grid>
            <UserPageContent item xs page={page}>
                {children}
            </UserPageContent>
        </UserContainer >

    )
}


