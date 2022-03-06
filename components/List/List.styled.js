import List from '@mui/material/List';
import styled from 'styled-components';
import { css } from "styled-components";

export const ListWrapper = styled(List)`
background-color: ${({ theme }) => theme.colors.whiteLight1};
height: 898px; 
overflow-y:auto;
${({ big }) => css`
        @media (max-width: 899.9px) {
            display:${big ? 'none' : 'block'} !important;
            max-width: 100%;
            overflow-y: hidden;
            background-color: ${({ theme }) => theme.colors.white};
        }
    `}
`