import { Stack } from '@mui/material';
import List from '@mui/material/List';
import styled from 'styled-components';

export const ListWrapper = styled(List)`
background-color: ${({ theme }) => theme.colors.whiteLight1};
height: 898px; 
overflow-y:auto;
`
export const ItemCardWrapper = styled(Stack).attrs(()=>({
    direction: "row",
}))`
display: flex;
flex-wrap: wrap;
width:100%;
justify-content:center;
`