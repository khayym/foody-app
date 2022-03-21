import styled from 'styled-components'
import { Table } from '@mantine/core';

export const Order = styled.div`
    h2{
        font-size:18px;
        text-align:center;
    }

    .total{
        display:flex;
        justify-content:space-between;
        font-size:18px;
    }
`

export const Tables = styled(Table)`
color:${({ theme }) => theme.colors.grayText1};


    td{
        border:none !important;
        padding: 7px 2px !important;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 100px;
    }

    

    tr td:first-child {
        font-size:18px;
        font-weight:500;
        
        /* letter-spacing: 0.03em; */
    }

    .x-element{
       
    }

    .name-elementm {
        font-size:1rem;
}
    .prize-element{
        font-size:1rem;
    }

`