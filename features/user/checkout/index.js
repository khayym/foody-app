import React from 'react'
import { CheckoutContainer } from './checkout.styled'
import Form from './components/form'
import Orders from './components/orders'
import { Grid } from '@mui/material'


const UserCheckout = () => {
    return (
        <CheckoutContainer container>
            <Grid item xl={8} lg={8} md={12} className="formGrid" >
                <Form />
            </Grid>
            <Grid item xs className="ordersGrid" style={{ backgroundColor: '#F3F4F6' }}>
                <Orders />
            </Grid>
        </CheckoutContainer>
    )
}

export default UserCheckout

