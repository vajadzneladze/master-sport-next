import { useEffect, useRef, useState } from 'react'
import SingleProduct from './SingleProduct'

import Slider from 'react-slick'

const ProductsSection = ({ title = ' ', description = '', module = '' }) => {
    const sliderRef = useRef(null)

    const moveProductsHandler = str => {
        if (str === 'next') {
            sliderRef.current.slickNext()
        } else {
            sliderRef.current.slickPrev()
        }
    }

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false, // Disable swipe with the mouse
        variableWidth: true, // Allow variable width slides
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    swipe: true, // Disable swipe with the mouse
                },
            },
        ],
    }

    return (
        <section className={`container everything-you-need ${module}`}>
            <div className="row">
                <div className="titles col-8">
                    <h3>{title}</h3>
                    <h4>{description}</h4>
                </div>

                <div className="arrow-buttons col-2 offset-2 d-flex align-items-end justify-content-end d-none d-lg-flex">
                    <button
                        className="left-arrow"
                        onClick={() => moveProductsHandler('prev')}>
                        <img src="/left-arrow-blue.svg" />
                    </button>
                    <button
                        className="right-arrow"
                        onClick={() => moveProductsHandler('next')}>
                        <img src="/right-arrow-blue.svg" />
                    </button>
                </div>
            </div>

            <div className="vw-100">
                <div className="row products  mx-0 px-0 ">
                    <Slider ref={sliderRef} {...sliderSettings} className="p-0">
                        <SingleProduct
                            classes="col-12 col-sm-6 col-md-3 col-lg-3 me-4"
                            productType={
                                module === 'needed-products' ? 'sale' : 'new'
                            }
                            withTimer={
                                module === 'needed-products' ? true : false
                            }
                        />

                        <SingleProduct
                            classes="col-12 col-sm-6 col-md-3 col-lg-3 me-4"
                            productType={
                                module === 'needed-products' ? 'sale' : 'new'
                            }
                            withTimer={
                                module === 'needed-products' ? true : false
                            }
                        />

                        <SingleProduct
                            classes="col-12 col-sm-6 col-md-3 col-lg-3 me-4"
                            productType={
                                module === 'needed-products' ? 'sale' : 'new'
                            }
                            withTimer={
                                module === 'needed-products' ? true : false
                            }
                        />

                        <SingleProduct
                            classes="col-12 col-sm-6 col-md-3 col-lg-3 me-4"
                            productType={
                                module === 'needed-products' ? 'sale' : 'new'
                            }
                            withTimer={
                                module === 'needed-products' ? true : false
                            }
                        />

                        <SingleProduct
                            classes="col-12 col-sm-6 col-md-3 col-lg-3 me-4"
                            productType={
                                module === 'needed-products' ? 'sale' : 'new'
                            }
                            withTimer={
                                module === 'needed-products' ? true : false
                            }
                        />

                        <SingleProduct
                            classes="col-12 col-sm-6 col-md-3 col-lg-3 me-4"
                            productType={
                                module === 'needed-products' ? 'sale' : 'new'
                            }
                            withTimer={
                                module === 'needed-products' ? true : false
                            }
                        />
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default ProductsSection
