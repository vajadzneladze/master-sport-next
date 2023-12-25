import React from 'react'
import PartnersSection from '@/components/Partners/PartnersSection'
import PerfonmanceBox from '@/components/Products/PerfonmanceBox'
import ProductsSection from '@/components/Products/ProductsSection'
import SuperChargeSection from '@/components/SuperCharge/SuperChargeSection'

const productsArray = [
    {
        id: 1,
        title: 'Adjustable Dumbbell Set',
        description: 'A set of adjustable dumbbells for versatile workouts.',
        imgUrl: [
            'https://source.unsplash.com/4XChUCCKA8c/800x600',
            'https://source.unsplash.com/9iVfBwafP2o/800x600',
        ],
        price: 149.99,
        newPrice: 129.99,
        isSale: true,
        isNew: false,
        endTime: '2023-12-31T23:59:59', // Sale ends at the end of the year
    },
    {
        id: 2,
        title: 'High-Performance Treadmill',
        description: 'A high-performance treadmill for indoor running.',
        imgUrl: [
            'https://source.unsplash.com/5ybAx8XpH9U/800x600',
            'https://source.unsplash.com/LWZaekkABAY/800x600',
        ],
        price: 799.99,
        isSale: false,
        isNew: true,
    },
    {
        id: 3,
        title: 'Resistance Bands Set',
        description: 'A set of resistance bands for strength training.',
        imgUrl: [
            'https://source.unsplash.com/gqlRFspfi3E/800x600',
            'https://source.unsplash.com/6rPJaP8KXZA/800x600',
        ],
        price: 29.99,
        newPrice: 24.99,
        isSale: true,
        isNew: false,
        endTime: '2023-12-31T23:59:59', // Sale ends at the end of the year
    },
    {
        id: 4,
        title: 'Indoor Cycling Bike',
        description: 'An indoor cycling bike for intense cardio workouts.',
        imgUrl: [
            'https://source.unsplash.com/cBvl13eRd3Q/800x600',
            'https://source.unsplash.com/K2ShEL2xuhA/800x600',
        ],
        price: 499.99,
        isSale: true,
        newPrice: 449.99,
        isNew: false,
        endTime: '2024-11-30T23:59:59', // Sale ends at the end of November
    },
    {
        id: 5,
        title: 'Weight Bench',
        description: 'A sturdy weight bench for various strength exercises.',
        imgUrl: [
            'https://source.unsplash.com/2sNL6bjWu_Y/800x600',
            'https://source.unsplash.com/wnM_fI6fMXM/800x600',
        ],
        price: 89.99,
        isSale: false,
        isNew: true,
    },
    {
        id: 6,
        title: 'Kettlebell Set',
        description: 'A set of kettlebells for functional strength training.',
        imgUrl: [
            'https://source.unsplash.com/fJ8aDGa_9XU/800x600',
            'https://source.unsplash.com/VTrv0AR0z5g/800x600',
        ],
        price: 69.99,
        isSale: true,
        newPrice: 59.99,
        isNew: false,
        endTime: '2024-12-15T23:59:59', // Sale ends on December 15th
    },
    {
        id: 7,
        title: 'Fitness Tracker Watch',
        description:
            'A smart fitness tracker watch for monitoring your workouts.',
        imgUrl: [
            'https://source.unsplash.com/SfL_v_ZZvL8/800x600',
            'https://source.unsplash.com/RiwcU4Rp_xY/800x600',
        ],
        price: 129.99,
        isSale: false,
        isNew: true,
    },
    {
        id: 8,
        title: 'Yoga Mat',
        description:
            'A comfortable and non-slip yoga mat for yoga and stretching.',
        imgUrl: [
            'https://source.unsplash.com/Rz8OGP4hC-0/800x600',
            'https://source.unsplash.com/GHGuQXrs-zU/800x600',
        ],
        price: 19.99,
        newPrice: 15.99,
        isSale: true,
        isNew: false,
        endTime: '2024-12-10T23:59:59', // Sale ends on December 10th
    },
    {
        id: 9,
        title: 'Jump Rope',
        description: 'A durable jump rope for cardiovascular workouts.',
        imgUrl: [
            'https://source.unsplash.com/4xRNx5yLRwI/800x600',
            'https://source.unsplash.com/D5f6vZ8tD4A/800x600',
        ],
        price: 9.99,
        isSale: false,
        isNew: true,
    },
    {
        id: 10,
        title: 'Foam Roller',
        description:
            'A foam roller for self-myofascial release and muscle recovery.',
        imgUrl: [
            'https://source.unsplash.com/4RZM_6p55gE/800x600',
            'https://source.unsplash.com/n8WcvBUZq8w/800x600',
        ],
        price: 24.99,
        isSale: false,
        isNew: true,
    },
]

const TrainingView = () => {
    return (
        <>
            <section className="container-fluid  vh-100 " id="training-view">
                <div className="container d-flex justify-content-center align-items-center">
                    <img src="/product-1.svg" />
                </div>
            </section>

            <section
                id="training-info"
                className="  container d-flex   align-items-center flex-column text-center">
                <h1> Lifestyle Cycle </h1>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32. The standard chunk of Lorem Ipsum used since the
                    1500s is reproduced below for those interested. Sections
                    1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                    Cicero are also reproduced in their exact original form,
                    accompanied by English versions from the 1914 translation by
                    H. Rackham. Contrary to popular belief, Lorem Ipsum is not
                    simply random text. It has roots in a piece of classical
                    Latin literature from 45 BC, making it over 2000 years old.
                    Richard McClintock, a Latin professor at Hampden-Sydney
                    College in Virginia, looked up one of the more obscure Latin
                    words, consectetur, from a Lorem Ipsum passage, and going
                    through the cites of the word in classical literature,
                    discovered the undoubtable source. Lorem Ipsum comes from
                    sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                    Malorum" (The Extremes of Good and Evil) by Cicero, written
                    in 45 BC. This book is a treatise on the theory of ethics,
                    very popular during the Renaissance. The first line of Lorem
                    Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                    section 1.10.32. The standard chunk of Lorem Ipsum used
                    since the 1500s is reproduced below for those interested.
                    Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
                    Malorum" by Cicero are also reproduced in their exact
                    original form, accompanied by English versions from the 1914
                    translation by H. Rackham.
                </p>
            </section>

            <section id="product-info-grid" className="training">
                <div className="grid-container">
                    <div className="grid-item grid-item-3 position-relative">
                        <div className="content position-absolute w-100 h-100">
                            <div className=""></div>
                        </div>
                        <video autoPlay loop playsInline muted className="bg">
                            <source
                                src="/videos/training.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="grid-item grid-item-4 position-relative">
                        <div className="content position-absolute w-100 h-100">
                            <div className="box">
                                <h3>Wireless Charging</h3>
                                <p>
                                    Wireless charging allows members to charge
                                    their personal devices while keeping their
                                    screens in view.
                                </p>
                            </div>
                        </div>
                        <img src="/produc-grid-4.svg" className="bg" />
                    </div>

                    <div className="grid-item grid-item-5 position-relative">
                        <div className="content position-absolute w-100 h-100">
                            <div className="">
                                <h3>Connects to Apple Watch</h3>
                                <p>
                                    Connects to Apple Watch for more accurate
                                    workout tracking and consolidated user data
                                    when you add optional touch-free RFID login.
                                </p>
                            </div>
                        </div>
                        <img src="/produc-grid-5.svg" className="bg" />
                    </div>

                    <div className="grid-item grid-item-6 position-relative">
                        <div className="content position-absolute w-100 h-100">
                            <div className="">
                                <h3>Sprint 8</h3>
                                <p>
                                    An immersive version of our exclusive Sprint
                                    8 sprint-intensity program stimulates
                                    natural human growth hormone to burn more
                                    fat and build lean muscle in short 20-minute
                                    workouts.
                                </p>
                            </div>
                        </div>
                        <img src="/produc-grid-6.svg" className="bg" />
                    </div>
                </div>
            </section>

            <ProductsSection
                title="You Might Also Like"
                description="To bulletproof your body"
                module="product-view"
                data={productsArray}
            />

            <PartnersSection classes="d-block d-md-none" />
        </>
    )
}

export default TrainingView
