import { AppBar } from "@mui/material";
import styled from "styled-components";
import Toolbar from '@mui/material/Toolbar';

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
`

export const ContainerStyled = styled(Toolbar)`
    display:flex;
    align-items:center;
    height:100%;
    width:100%;
`

export const ToolBarStyled = styled(ContainerStyled)`
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
