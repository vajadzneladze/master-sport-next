import React, { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const NextArrow = props => (
    <div {...props} className="custom-next-arrow">
        <img src="/right-arrow-blue.svg" alt="Next Arrow" />
    </div>
)

const PrevArrow = props => (
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

            <div className="wrap d-none d-md-block">

                <div className="d-flex gap-3">
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
                            onClick={() => changeSlide(3)}
                        />
                    </div>


                    <div className="img">
                        <img
                            src="/shop-view-1.svg"
                            onClick={() => changeSlide(3)}
                        />
                    </div>


                    <div className="img">
                        <img
                            src="/shop-view-1.svg"
                            onClick={() => changeSlide(3)}
                        />
                    </div>


                    <div className="img">
                        <img
                            src="/shop-view-1.svg"
                            onClick={() => changeSlide(3)}
                        />
                    </div>

                    <div className="img">
                        <img
                            src="/shop-view-1.svg"
                            onClick={() => changeSlide(3)}
                        />
                    </div>


                    <div className="img">
                        <img
                            src="/shop-view-1.svg"
                            onClick={() => changeSlide(3)}
                        />
                    </div>


                    <div className="img">
                        <img
                            src="/shop-view-1.svg"
                            //onClick={() => changeSlide(3)}
                        />
                    </div>


                    <div className="img">
                        <img
                            src="/shop-view-1.svg"
                            //onClick={() => changeSlide(3)}
                        />
                    </div>

                    <div className="img">
                        <img
                            src="/shop-view-1.svg"
                            //onClick={() => changeSlide(3)}
                        />
                    </div>


                    <div className="img">
                        <img
                            src="/shop-view-1.svg"
                            //onClick={() => changeSlide(3)}
                        />
                    </div>


                    <div className="img">
                        <img
                            src="/shop-view-1.svg"
                            //onClick={() => changeSlide(3)}
                        />
                    </div>

                    <div className="img">
                        <img
                            src="/shop-view-1.svg"
                            //onClick={() => changeSlide(3)}
                        />
                    </div>
                  
                </div>
            </div>
        </>
    )
}

export default ProductViewGallery
