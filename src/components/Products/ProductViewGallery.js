import React, { useRef } from 'react'
import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
    <div {...props} className="custom-next-arrow">
        <img src="/right-arrow-blue.svg" alt="Next Arrow" />
    </div>
)

const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
    <div {...props} className="custom-prev-arrow">
        <img src="/left-arrow-blue.svg" alt="Prev Arrow" />
    </div>
)

const ProductViewGallery = () => {
    const sliderRef = useRef(null)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

        responsive: [
            {
                breakpoint: 768, // Adjust the breakpoint based on your mobile screen size
                settings: {
                    arrows: true, // Show arrows on mobile
                },
            },
        ],
    }

    const changeSlide = index => {
        // Use the slickGoTo method to change the slide
        sliderRef.current.slickGoTo(index)
    }

    const carouselSetting = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        swipe: true,
        variableWidth: true, // Remove or set to false
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <>
            <Slider ref={sliderRef} className="img-wrapper" {...settings}>
                <div>
                    <img
                        src="/shop-view-1.svg"
                        alt="Product Image 1"
                        className="product-image-displayed"
                    />
                </div>
                <div>
                    <img
                        src="/shop-view-2.svg"
                        alt="Product Image 2"
                        className="product-image-displayed"
                    />
                </div>
            </Slider>

            <div className="wrap d-none d-md-flex">
                <div className="">
                    <Slider {...carouselSetting}>
                        <div className="img">
                            <img
                                src="/shop-view-1.svg"
                                onClick={() => changeSlide(0)}
                            />
                        </div>

                        <div className="img">
                            <img
                                src="/shop-view-2.svg"
                                onClick={() => changeSlide(1)}
                            />
                        </div>

                        <div className="img">
                            <img
                                src="/shop-view-1.svg"
                                onClick={() => changeSlide(0)}
                            />
                        </div>

                        <div className="img">
                            <img
                                src="/shop-view-2.svg"
                                onClick={() => changeSlide(1)}
                            />
                        </div>

                        <div className="img">
                            <img
                                src="/shop-view-1.svg"
                                onClick={() => changeSlide(0)}
                            />
                        </div>

                        <div className="img">
                            <img
                                src="/shop-view-2.svg"
                                onClick={() => changeSlide(1)}
                            />
                        </div>

                        <div className="img">
                            <img
                                src="/shop-view-1.svg"
                                onClick={() => changeSlide(0)}
                            />
                        </div>

                        <div className="img">
                            <img
                                src="/shop-view-2.svg"
                                onClick={() => changeSlide(1)}
                            />
                        </div>

                        <div className="img">
                            <img
                                src="/shop-view-1.svg"
                                onClick={() => changeSlide(0)}
                            />
                        </div>

                        <div className="img">
                            <img
                                src="/shop-view-2.svg"
                                onClick={() => changeSlide(1)}
                            />
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default ProductViewGallery
