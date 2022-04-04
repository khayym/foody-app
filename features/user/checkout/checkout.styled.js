import styled from 'styled-components'
import { Grid } from '@mui/material'

export const CheckoutContainer = styled(Grid)`
    min-height: 515px !important;
    gap:1rem;
    color: ${({ theme }) => theme.colors.grayText2};
    @media (max-width:900px){
        flex-direction:column-reverse !important;
        gap:0rem;

    }


    .formGrid{

        padding: 1.2rem 2.75rem;
        background-color:#F3F4F6;
        /* height:515px; */
        border-radius:4px;
        .mantine-TextInput-label{
            color:#4F4F4F;
        }
    }

    .ordersGrid{
        height:23.25rem;
        border-radius:4px;
        padding:1rem 2.375rem;
    }

    .form-sec{
        display:flex;
        flex-direction:column;
    }
`