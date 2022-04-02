import React from 'react'
import { Order, Tables } from './index.styled'
import { Divider } from '@mui/material';


const Orders = (props) => {
    let productsData = JSON.parse(localStorage.getItem("basket")) || []

    const sum = productsData?.reduce((accumulator, object) => {
        return accumulator + object.totalPrice;
    }, 0);

    const rows = productsData.map((element) => (
        <tr key={element.productId}>
            <td className='count-element'>{element.count}</td>
            <td className='x-element'>{'x'}</td>
            <td className='name-element'>{element.name}</td>
            <td className='prize-element'>${element.price}</td>
        </tr>
    ));

    return (
        <Order>
            <h2>Your Orders</h2>
            <div style={{ height: '200px', overflow: 'auto' }}>
                <Tables captionSide="bottom">
                    <tbody>{rows}</tbody>
                </Tables>
            </div>
            <Divider style={{ margin: '1.8rem 0 1rem 0' }} />
            <Tables captionSide="bottom">
                <tbody>
                    <tr className="total">
                        <td>Total</td>
                        <td>${sum?.toString().slice(0, 5)}</td>
                    </tr>
                </tbody>
            </Tables>
        </Order>
    )
}

export default Orders