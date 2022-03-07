import styled from 'styled-components';
import { Stack, Pagination } from '@mui/material';

export const CustomStack = styled(Stack).attrs(() => ({
    direction: "row",
    justifyContent: "center"
}))``;

export const PaginationCustom = styled(Pagination).attrs(() => ({

}))`
   & button{
    width:64px;
    height:64px;
    font-size: 18px;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.mainRed} ;
    border:1px solid ${({ theme }) => theme.colors.mainRed}; 
   }
   & .Mui-selected{
        background-color:${({ theme }) => theme.colors.mainRed} !important;
        color:${({ theme }) => theme.colors.white} !important;
    }
    @media (max-width:650px){
        & button{
            width:44px;
     height:44px;
     font-size: 14px;
        }
    }
`