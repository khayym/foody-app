import React from 'react'
import { Order, Tables } from './index.styled'
import { Divider } from '@mui/material';


const Orders = (props) => {

    const elements = [
        {
            name: 'Papa John’s Pizza Restaurant',
            price: '8.6',
            count: "2"
        },
        {
            name: 'Papa John’s Pizza Restaurant',
            price: '8.6',
            count: "2"
        },
        {
            name: 'Papa John’s Pizza Restaurant',
            price: '8.6',
            count: "2"
        },
        {
            name: 'Papa John’s Pizza Restaurant',
            price: '8.6',
            count: "2"
        },
        {
            name: 'Papa John’s Pizza Restaurant',
            price: '8.6',
            count: "2"
        },
        {
            name: 'Papa John’s Pizza Restaurant',
            price: '8.6',
            count: "2"
        },
        {
            name: 'Papa Coffee',
            price: '3.6',
            count: "1"
        },
        {
            name: 'Coca Cola',
            price: '8',
            count: "2"
        },
        {
            name: 'Papa John’s Pizza',
            price: '4',
            count: "4"
        },
        {
            name: 'Papa John’s Pizza Restaurant',
            price: '8.6',
            count: "2"
        },
        {
            name: 'Papa John’s Pizza Restaurant',
            price: '8.6',
            count: "2"
        },
    ]

    const rows = elements.map((element) => (
        <tr key={element.name}>
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
                        <td>$55.00</td>
                    </tr>
                </tbody>
            </Tables>
        </Order>
    )
}

export default Orders