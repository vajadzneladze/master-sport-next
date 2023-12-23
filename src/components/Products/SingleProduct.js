import React from 'react'
import ProductTimer from './ProductTimer'
import Link from 'next/link'

import SingleProductSlider from './SingleProductSlider'

const SingleProduct = ({
    classes = '',
    productType = '',
    withTimer = false,
    swipe = false,
    rediretUrl = '/products/view/1', 
}) => {

    const productTypeClass = productType // sale , new
    const timer = withTimer // has timers
    const endTime = new Date('2024-01-01T12:00:00').getTime() // timout date ( case : sale  )

    return (
        <div className={classes + ' product'}>
            <div className="row align-items-center justify-content-between">
                <div className={`col-5 ${productTypeClass || 'opacity-0'}`}>
                    <span>
                        {productTypeClass === 'sale' && `Save %40`}
                        {productTypeClass === 'new' && `New`}
                    </span>
                </div>

                <div className="col-7 timeout">
                    {timer && <ProductTimer endTime={endTime} />}
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <SingleProductSlider swipe={swipe} />
                </div>
            </div>

            <div className="d-flex flex-column product-info">
                <h4 className="title">
                    <Link href={rediretUrl}> Magnum Standing Arm Curl </Link>
                </h4>
                <p className="description">
                    Ideal for exercises focusing on the upper body
                </p>
                <div className="d-flex justify-content-between">
                    <p
                        className={`prices  ${
                            productTypeClass === 'sale' && 'item-sale'
                        }`}>
                        $223.00
                        {productTypeClass === 'sale' && <del>$119.00</del>}
                    </p>
                    <div className="to-cart">
                        <img src="/product-hover-cart.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
