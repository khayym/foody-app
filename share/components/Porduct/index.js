import React from 'react'
import ProductHeader from './Header'
import ProductContainer from './Main'

const Product = (ProductData) => {
    return (
        <div>
            <ProductHeader restaurant={ProductData} />
            <ProductContainer containerJson={ProductData} />
        </div>
    )
}

export default Product

