import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick' // Import the Slider component from 'react-slick'

const SingleProductSlider = ({ swipe = false }) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipe: swipe,
    }

    return (
        <Slider className="img-switcher" {...sliderSettings}>
            {/* Add your slider content here */}
            <div>
                <img
                    src="/product-4.png"
                    alt="Product Image 1"
                    className="product-image-displayed"
                />
            </div>
            <div>
                <img
                    src="/product-1.png"
                    alt="Product Image 2"
                    className="product-image-displayed"
                />
            </div>
            <div>
                <img
                    src="/product-2.png"
                    alt="Product Image 2"
                    className="product-image-displayed"
                />
            </div>
            {/* Add more slides as needed */}
        </Slider>
    )
}

export default SingleProductSlider
