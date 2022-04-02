import React from 'react'
import { Basket } from 'tabler-icons-react';
import { Divider } from '@mui/material';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { BasketContainer, BasketFooter, OrderCount } from './basket.styled';
import Image from 'next/image'
import { useDispatch } from 'react-redux';
import { fillBasket } from '../../../share/store/slices/basket/basketSlice'
const UserBasket = () => {

    const dispatch = useDispatch()

    const basketData = JSON.parse(localStorage.getItem("basket"))
    const sum = basketData?.reduce((accumulator, object) => {
        return accumulator + object.totalPrice;
    }, 0);

    const deleteProductBasket = (id) => {
        let productsData = JSON.parse(localStorage.getItem("basket")) || []
        if (productsData.length && productsData.some(product => product.productId === id)) {
            productsData = productsData.filter(product => product.productId !== id)
            dispatch(fillBasket(productsData))
            localStorage.setItem("basket", JSON.stringify(productsData))
            return
        }
    }


    return (
        <BasketContainer>
            <div>
                <h1>Your Basket</h1>
                <div className="user_basket_header"> <Basket size={22} strokeWidth={1.5} /> <div>{basketData?.length} items</div></div>
                <Divider />
            </div>
            <div className="main">
                {
                    basketData?.map(product => (
                        <div key={product.productId}>
                            <div className="user_basket_main">
                                <div className="img_conatiner">
                                    <Image src={product?.imgUrl[0]} alt="img" width="96" height="96" />
                                </div>
                                <div className='basket_conetent'>
                                    <div>
                                        <h2>{product.name}</h2>
                                        <h5>${product.price}</h5>
                                    </div>
                                    <OrderCount>
                                        <div className='order_buttons_group'>
                                            <button>+</button>
                                            <div>{product.count}</div>
                                            <button>-</button>
                                        </div>
                                    </OrderCount>
                                </div>
                                <DeleteSweepIcon className='delete_icon' onClick={() => deleteProductBasket(product.productId)} />
                            </div>
                            <Divider />
                        </div>
                    ))
                }
            </div>
            <BasketFooter className="basket_footer">
                <div>Checkout</div>
                <div className="prize">
                    ${sum.toString().slice(0, 5)}
                </div>
            </BasketFooter>
        </BasketContainer>
    )
}

export default UserBasket
