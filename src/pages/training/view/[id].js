import React from 'react'
import PartnersSection from '@/components/Partners/PartnersSection'
import PerfonmanceBox from '@/components/Products/PerfonmanceBox'
import ProductsSection from '@/components/Products/ProductsSection'
import SuperChargeSection from '@/components/SuperCharge/SuperChargeSection'

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

            <section id="product-info-grid" className ="training">
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
            />

            <PartnersSection classes="d-block d-md-none" />
        </>
    )
}

export default TrainingView
