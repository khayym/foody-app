import React from 'react'
import UserBasket from '../../../../features/user/basket'
import { Grid } from '@mantine/core';
import Image from 'next/image';
import { CustomGrid, ProductDiv } from './Main.Styled';

const ProductContainer = ({ containerJson: { ProductData: { product } } }) => {
    console.log('--', product)
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
                                        <p> <span>From</span>  ${item.price}</p>
                                        <button>+</button>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </Grid.Col>
                <Grid.Col span={8} className={'basket-side'}>
                    <UserBasket />
                </Grid.Col>
            </CustomGrid>
        </ProductDiv>
    )
}

export default ProductContainer
