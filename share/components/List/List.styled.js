import List from '@mui/material/List';
import styled from 'styled-components';
import { css } from "styled-components";

export const ListWrapper = styled(List)`
background-color: ${({ theme }) => theme.colors.whiteLight1} !important; 
height: 90vh; 
overflow-y:auto;
${({ big }) => css`
        @media (max-width: 899.9px) {
            display:${big ? 'none' : 'block'} !important;
            max-width: 100%;
            max-height: 100% !important;  
            background-color: ${({ theme }) => theme.colors.white};
        }
    `}
`