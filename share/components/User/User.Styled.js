import styled from 'styled-components'
import { Grid } from '@mui/material'

export const UserContainer = styled(Grid)`
    /* border: 1px solid #000; */
    width:100% !important;
    margin: 1rem 0 !important;
    gap:1rem;

    .sidebar{
        @media(max-width:900px){
            display:none;
        }
    }
`

export const UserPageContent = styled(Grid)`
    /* border: 1px solid red; */
    background-color:${({ theme }) => theme.colors.whiteLight1};
    overflow: hidden;
    border-radius:5px;

    @media(max-width:756px){
        background-color:#fff;
    }
`