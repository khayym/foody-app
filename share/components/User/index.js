import { Grid } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import SidebarUser from './components/sidebar'

export const UserLayout = ({ children }) => {
    return (
        <UserContainer container>
            <Grid item xs={3} style={{ maxWidth: '325px', height: '515px', backgroundColor: '#F3F4F6' }} className="sidebar">
                <SidebarUser />
            </Grid>
            <UserPageContent item xs>
                {children}
            </UserPageContent>
        </UserContainer >

    )
}


const UserContainer = styled(Grid)`
    border: 1px solid #000;
    width:100% !important;
    margin: 1rem 0 !important;
    gap:1rem;

    .sidebar{
        @media(max-width:900px){
            display:none;
        }
    }
`

const UserPageContent = styled(Grid)`
    border: 1px solid red;
    background-color:${({ theme }) => theme.colors.whiteLight1};

    @media(max-width:756px){
        background-color:#fff;
    }
`