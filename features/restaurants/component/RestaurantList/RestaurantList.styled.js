import List from '@mui/material/List';
import styled from 'styled-components';

export const ListWrapper = styled(List)`
background-color: ${({ theme }) => theme.colors.whiteLight1};
height: 898px; 
overflow-y:auto;
    @media(max-width:899.9px){
        display: none;
    }
`