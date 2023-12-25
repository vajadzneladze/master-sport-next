import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import Slider from 'react-slick' // Import the Slider component from 'react-slick'

const SingleProductSlider = ({ swipe = false, imgs = [] }) => {
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

            {imgs.map((url, index) => {
                return (
                    <div key={index}>
                        <Image
                            src={url}
                            alt="Product Image"
                            className="product-image-displayed"
                            layout="responsive"
                            width={269}
                            height={200}
                        />
                    </div>
                )
            })}
        </Slider>
    )
}

export default SingleProductSlider
