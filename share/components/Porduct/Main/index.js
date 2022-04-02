import React, { useState } from 'react'
import UserBasket from '../../../../features/user/basket'
import { Grid } from '@mantine/core';
import Image from 'next/image';
import { CustomGrid, ProductDiv } from './Main.Styled';
import RestaurantListMobile from '../../List/List'
import ProductListMobile from '../../Swipable';
import { BasketFooter } from '../../Swipable/Swiple.Styled';
import { bottomDrawer } from '../../../store/slices/drawer/drawerSlices';
import { useDispatch, useSelector } from 'react-redux';
import { fillBasket, addbasket } from '../../../store/slices/basket/basketSlice';
// import { ProductBottomSlider } from '../../Swipable/Swiple.Styled';

const ProductContainer = ({ containerJson: { ProductData: { product } } }) => {
    const dispatch = useDispatch()
    const basket = useSelector(state => state.basket.basket)
    const increment = (data) => {
        let productInBasket = basket?.find(item => item.productId === data.productId)
        let productsData = JSON.parse(localStorage.getItem("basket")) || []
        let totalPrice = (productInBasket?.count || 1) * data.price


        if (productsData.length && productsData.some(product => product.productId === data.productId)) {
            productsData.map(product => {
                if (product.productId === data.productId) {
                    product.count += 1
                    product.totalPrice = totalPrice
                }
                return product
            })

            dispatch(fillBasket(productsData))
            localStorage.setItem("basket", JSON.stringify(productsData))
            return
        }

        let product = { ...data, count: 1, totalPrice: data.price }

        dispatch(addbasket(product))
        localStorage.setItem("basket",
            JSON.stringify([...productsData, product]))
    }

    return (
        <ProductDiv>
            <CustomGrid columns={24} grow style={{ gap: '50px' }}>
                <Grid.Col span={15} className={'product-list'}>
                    <ul>

                        {
                            product && product.map(item => (
                                <li className={'product-list-item'} key={item.productId}>
                                    <div className={'product-img-list'}>
                                        <div className='img-div'>
                                            <Image src={item?.imgUrl[0]} alt={item.name} layout='fill' objectFit='cover' />
                                        </div>
                                        <div className='item-des'>
                                            <p>{item.name}</p>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                    <div className='item-price'>
                                        <p><span>From</span>  ${item.price}</p>
                                        <button onClick={() => increment(item)}>+</button>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <BasketFooter className="basket_footer" onClick={() => dispatch(bottomDrawer())}>
                        <div>Checkout</div>
                        <div className="prize">
                            $37.90
                        </div>
                    </BasketFooter>
                </Grid.Col>
                <Grid.Col span={8} className={'basket-side'}>
                    <UserBasket />
                </Grid.Col>
            </CustomGrid>
            <ProductListMobile />
        </ProductDiv>
    )
}

export default ProductContainer
