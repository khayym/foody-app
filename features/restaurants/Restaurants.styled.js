import { Stack } from '@mui/material';
import styled from 'styled-components';


export const Containers = styled.div`
padding: 0px 0px 70px ;
`

export const ItemCardWrapper = styled(Stack).attrs(() => ({
    direction: "row",
}))`
display: flex;
flex-wrap: wrap;
width:100%;
/* justify-content:space-between; */

/* height: 720px;
overflow: auto; */

@media(max-width:900px){
    justify-content:center;
    }

`