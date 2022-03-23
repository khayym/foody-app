import { AppBar } from "@mui/material";
import styled from "styled-components";
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mantine/core';


export const AppBarStyled = styled(AppBar)`
height:7.625rem;
box-shadow:none !important;
background-color:${({ theme, location }) => location !== '/login' && location !== '/register' ? theme.colors.whiteLight1 : theme.colors.lightRed} !important;
display:flex;
align-items:center;

    ul{
        display:${({ location }) => (location === '/login' || location === '/register') && 'none'}
    }


    @media(max-width:756px){
        height:3.25rem;
    }

    .MuiSvgIcon-root{
        color:#000;
    }
`

export const ContainerStyled = styled(Toolbar)`
    display:flex;
    align-items:center;
    height:100%;
    width:100%;
`

export const ToolBarStyled = styled(ContainerStyled)`

.user-side{

    .avatar-root{
        background-color:#EB5757 !important;
        color:red !important;
    }

    .main-avatar{
        background-color:#F178B6 !important;
        color:#fff !important;
    }

   button{
       /* width:2.5rem; */
       font-size:1rem;
       height:2.5rem;
       border-radius: 30px;
       width:115px;
       background-color:${({ theme }) => theme.colors.mainRed}
   }

   display:flex;
   gap:1rem;
}
`

export const Ul = styled.ul`
display:flex;
flex-direction:row;
color:${({ theme }) => theme.colors.grayText1};
list-style-type: none;
gap:1rem;
    li{
    font-size:18px;
    font-weight:500;
    }
`

export const SingInButton = styled(Button)`
display:${({ pathname }) => (pathname === '/register' || pathname === '/login') ? 'none' : 'block'};
`