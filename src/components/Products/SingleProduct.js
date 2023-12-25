import React from 'react'
import ProductTimer from './ProductTimer'
import Link from 'next/link'

import SingleProductSlider from './SingleProductSlider'
import { useCart } from '@/context/CartContext'

const SingleProduct = ({ classes = '', data = {} }) => {
    const {
        id,
        title,
        description,
        imgUrl,
        price,
        newPrice,
        isSale,
        isNew,
        endTime,
    } = data

    const time = endTime ? new Date(endTime).getTime() : null
    const badgeClass = isSale ? 'sale' : isNew ? 'new' : ''

    const { addToCart } = useCart()

    const handleAddToCart = () => {
        addToCart({
            ...data,
            count: 1,
        })
    }

    return (
        <div className={classes + ' product'}>
            <div className="row align-items-center justify-content-between">
                <div
                    className={`col-5    ${
                        badgeClass ? badgeClass : 'opacity-0'
                    }`}>
                    <span>
                        {isSale && `Save %40`}
                        {isNew && `New`}
                    </span>
                </div>

                <div className="col-7 timeout">
                    {isSale && time  ?  <ProductTimer endTime={time} />  : ''}
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <SingleProductSlider
                        imgs={[
                            '/product-1.png',
                            '/product-2.png',
                            '/product-3.png',
                        ]}
                    />
                </div>
            </div>

            <div className="d-flex flex-column product-info">
                <h4 className="title">
                    <Link href={`/products/view/${id}`}>{title}</Link>
                </h4>
                <p className="description">{description}</p>
                <div className="d-flex justify-content-between">
                    <p className={`prices  ${isSale ? 'item-sale' : ''}`}>
                        ${isSale ? newPrice : price}
                        {isSale && <del>${price}</del>}
                    </p>
                    <div className="to-cart" onClick={handleAddToCart}>
                        <img src="/product-hover-cart.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
