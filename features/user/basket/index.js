import React from 'react'
import { Basket } from 'tabler-icons-react';
import { Divider } from '@mui/material';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { BasketContainer, BasketFooter, OrderCount } from './basket.styled';


const UserBasket = () => {
    const products = [
        {
            name: 'Papa Jons Pizza',
            prize: '15',
            img: 'https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?k=20&m=1192094401&s=612x612&w=0&h=jesvXuPyvqM36GQ5QEvJrL3QZjK6YKsziUUF3ZbW0gw='
        },
        {
            name: 'MC Burger',
            prize: '10',
            img: 'https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?k=20&m=1192094401&s=612x612&w=0&h=jesvXuPyvqM36GQ5QEvJrL3QZjK6YKsziUUF3ZbW0gw='
        },
        {
            name: 'MC Burger',
            prize: '10',
            img: 'https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?k=20&m=1192094401&s=612x612&w=0&h=jesvXuPyvqM36GQ5QEvJrL3QZjK6YKsziUUF3ZbW0gw='
        },
        {
            name: 'MC Burger',
            prize: '10',
            img: 'https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?k=20&m=1192094401&s=612x612&w=0&h=jesvXuPyvqM36GQ5QEvJrL3QZjK6YKsziUUF3ZbW0gw='
        },
        {
            name: 'MC Burger',
            prize: '10',
            img: 'https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?k=20&m=1192094401&s=612x612&w=0&h=jesvXuPyvqM36GQ5QEvJrL3QZjK6YKsziUUF3ZbW0gw='
        },
        {
            name: 'Lavasda Doner',
            prize: '5',
            img: 'https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?k=20&m=1192094401&s=612x612&w=0&h=jesvXuPyvqM36GQ5QEvJrL3QZjK6YKsziUUF3ZbW0gw='
        },
        {
            name: 'Lavasda Doner',
            prize: '5',
            img: 'https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?k=20&m=1192094401&s=612x612&w=0&h=jesvXuPyvqM36GQ5QEvJrL3QZjK6YKsziUUF3ZbW0gw='
        },
        {
            name: 'Lavasda Doner',
            prize: '5',
            img: 'https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?k=20&m=1192094401&s=612x612&w=0&h=jesvXuPyvqM36GQ5QEvJrL3QZjK6YKsziUUF3ZbW0gw='
        },
    ]

    return (
        <BasketContainer>
            <div>
                <h1>Your Basket</h1>
                <div className="user_basket_header"> <Basket size={22} strokeWidth={1.5} /> <div>3 items</div></div>
                <Divider />
            </div>
            <div className="main">
                {
                    products.map(product => (
                        <>
                            <div className="user_basket_main">
                                <div className="img_conatiner">
                                    <img src={product.img} alt="img" />
                                </div>
                                <div className='basket_conetent'>
                                    <div>
                                        <h2>{product.name}</h2>
                                        <h5>${product.prize}</h5>
                                    </div>
                                    <OrderCount>
                                        <div className='order_buttons_group'>
                                            <button>+</button>
                                            <div>2</div>
                                            <button>-</button>
                                        </div>
                                    </OrderCount>
                                </div>
                                <DeleteSweepIcon className='delete_icon' />
                            </div>
                            <Divider />
                        </>
                    ))
                }
            </div>
            <BasketFooter className="basket_footer">
                <div>Checkout</div>
                <div className="prize">
                    $37.90
                </div>
            </BasketFooter>
        </BasketContainer>
    )
}

export default UserBasket
