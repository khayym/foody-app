import React from 'react'
import Image from 'next/image';
import { ImageWrapper } from './Header.Styled';

const ProductHeader = ({ restaurant: { ProductData: { restaurant } } }) => {
    console.log('ssss', restaurant)
    return (
        <ImageWrapper>
            <div className='img-div'>
                <Image src={restaurant.imgUrl} alt={restaurant.slug} layout='fill' objectFit='cover' />
            </div>
            <div className='information-container'>
                <div className='header-info'>
                    <p className='name'>{restaurant.name}</p>
                    <p className='address'>{restaurant.address}</p>
                </div>
                <div className='left-side'>
                    <div className='cuisine-div'>
                        <p>Cuisine</p>
                        <div>
                            {restaurant.cuisine.map((i, index) => (
                                <p key={index}>{i}</p>
                            ))}
                        </div>
                    </div>

                    <div className="button-group">
                        <button className="btn-out ownbtns"> <span>${restaurant.price}</span> <span>Delivery</span>  </button>
                        <button className="btn-filled ownbtns">Go back</button>
                    </div>
                </div>
            </div>
        </ImageWrapper>
    )
}

export default ProductHeader
