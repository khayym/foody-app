import React from 'react'
import { OrderContainer } from './index.styled'

const UserOrder = () => {
    return (
        <OrderContainer>
            <h1>Your Orders</h1>
            <div className="orders_content">
                <h2> Səbinə order tablesin bu divin içində yarad (<i>h2 -ni silersen</i>)</h2>
            </div>
        </OrderContainer>
    )
}

export default UserOrder