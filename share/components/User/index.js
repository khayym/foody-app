import { Grid } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import SidebarUser from './components/sidebar'

export const UserLayout = ({ children }) => {
    return (
        <UserContainer container>
            <Grid item xs={3} style={{ maxWidth: '325px', height: '515px', backgroundColor: '#F3F4F6' }}>
                <SidebarUser />
            </Grid>
            <Grid item xs style={{ border: '1px solid yellow' }}>
                {children}
            </Grid>
        </UserContainer >

    )
}


const UserContainer = styled(Grid)`
    border: 1px solid #000;
    margin-top:1rem !important;
    margin-left:0px !important;
    width:100% !important;
    margin-bottom:17rem;
`
