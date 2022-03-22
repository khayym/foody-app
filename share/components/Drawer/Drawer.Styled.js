import Drawer from '@mui/material/Drawer';
import styled from "styled-components"
import Link from 'next/link';

export const DrawerStyled = styled(Drawer)`
    .MuiDrawer-paperAnchorLeft{
    width:80vw;
    height:100%;
    background-color:#fff;

    }
    button{
        background-color:transparent;
        border:1px solid transparent;
        display:flex;
        margin: 1.5rem 1rem;
        align-items:center; 
        svg{
            color:#fff !important;
            font-size:2rem;
        }
    }
`

export const UL = styled.ul`
    display:flex;
    width: 100%;
    padding:0 1.5rem;
    flex-direction: column;
    list-style-type: none;
    background-color:transparent;
`

export const LinkStyled = styled(Link)`
    transition:all 0.2s;
    display:flex;
    align-items: center;
    text-decoration: none;
    color:#ffffffe2;
    width:100%;
    padding:0.4rem;

    h2{
        margin-left:1.688rem;
        font-size:2rem;
        font-weight:500;

    }
    span{
        font-size:2rem;
    }
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
        background-color:#a84ec436;
    }
`

export const Li = styled.li`
    height:2.5rem;
    display:flex;
    /* align-items:center; */
    /* justify-content:center; */
    color:${({ theme }) => theme.colors.grayText1};
    .active{
        border-radius: 1rem;
        background-color:#ffffff2f;
    }

   
`

export const LogOutButton = styled(Li)`
    margin-top:2rem;
`


export const SingButton = styled.button`
    width:8.125rem; 
    height: 3rem;
    background-color:${({ theme }) => theme.colors.mainRed} !important;
    border-radius:1.875rem;
    color:#fff;
    font-size:18px;
    text-align:center !important;
    display:flex !important;
    align-items:center !important;
    margin: 0 auto !important;

    a{
        margin:0 auto;
    }
`