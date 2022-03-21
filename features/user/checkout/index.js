import React from 'react'
import Form from './components/form'
import Orders from './components/orders'
import styled from 'styled-components'
import { Grid } from '@mui/material'


const UserCheckout = () => {
    return (
        <CheckoutContainer container>
            <Grid item xs className="formGrid">
                <Form />
            </Grid>
            <Grid item xs className="ordersGrid">
                <Orders />
            </Grid>
        </CheckoutContainer>
    )
}

export default UserCheckout

const CheckoutContainer = styled(Grid)`

    gap:1rem;
   
   .formGrid{
       border:1px solid;
   }

   .ordersGrid{
    border:1px solid;
   }
`