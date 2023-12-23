import PartnersSection from '@/components/Partners/PartnersSection'
import PerfonmanceBox from '@/components/Products/PerfonmanceBox'
import ProductTimer from '@/components/Products/ProductTimer'
import ProductViewGallery from '@/components/Products/ProductViewGallery'
import ProductsSection from '@/components/Products/ProductsSection'
import SuperChargeSection from '@/components/SuperCharge/SuperChargeSection'
import React, { useState } from 'react'

const consoles = [
    {
        id: 1,
        img: '/option-1.svg',
    },
    {
        id: 2,
        img: '/option-1.svg',
    },
    {
        id: 3,
        img: '/option-1.svg',
    },
]

const ProductView = () => {
    const [selected, setSelected] = useState({
        quantity: 2,
        console: 3,
    })

    const productTypeClass = '' // sale , new
    const timer = true //  true / false
    const endTime = new Date('2024-01-01T12:00:00').getTime() // timout date ( case : sale  )

    const onSelectHandler = (key, val) => {
        setSelected(prev => ({ ...prev, [key]: val }))
    }

    return (
        <>
            <section className="container" id="shop-view">
                <div className="row">
                    <div className="info col-12 col-md-6 d-block d-md-none">
                        <div className="d-flex flex-column product-info-top  ">
                            <h2>Performance Plus Treadmill</h2>
                            <p>WITH TOUCH XL CONSOLE</p>

                            <div className="d-flex justify-content-between">
                                <div className={`price  ${productTypeClass}`}>
                                    $119.00
                                    <del> $149.00</del>
                                </div>

                                <div className="timeout">
                                    {productTypeClass === 'sale' && timer && (
                                        <ProductTimer endTime={endTime} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="gallery col-12 col-md-6">
                        <div className="imgs w-100 position-relative overflow-hidden">
                            <ProductViewGallery />
                        </div>
                    </div>


                    <div className="info col-12 col-md-6">
                        <div className="d-flex flex-column product-info-top  d-none d-md-block">
                            <h2>Performance Plus Treadmill</h2>
                            <p>WITH TOUCH XL CONSOLE</p>

                            <div className="d-flex justify-content-between">
                                <div className={`price  ${productTypeClass}`}>
                                    $119.00
                                    <del> $149.00</del>
                                </div>

                                <div className="timeout">
                                    {productTypeClass === 'sale' && timer && (
                                        <ProductTimer endTime={endTime} />
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-column product-info-bottom">
                            <div className="order-3 order-md-1 details">
                                <h3 className="d-block d-md-none">Details</h3>
                                <p>
                                    Our exceptional treadmill sets a new
                                    standard with a shock-absorbing slat-belt
                                    and a powerful drive system thatmake even
                                    the most intense runs feel comfortable,
                                    solid and smooth, lasting up to 160,000 km /
                                    100,000 mi in the most intense environments.
                                </p>
                            </div>

                            <form className="order-2 order-md-2">
                                <label>Quantity</label>
                                <select
                                    className="form-select sort-select"
                                    defaultValue={selected.quantity || 0}
                                    onChange={e =>
                                        onSelectHandler(
                                            'quantity',
                                            e.target.value,
                                        )
                                    }>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </form>

                            <div className="choose-option  order-1 order-md-3">
                                <h3>Available Consoles</h3>

                                <div className="d-flex flex-wrap">
                                    {consoles.map((item, index) => {
                                        return (
                                            <div
                                                key={item.id}
                                                onClick={() =>
                                                    onSelectHandler(
                                                        'console',
                                                        item.id,
                                                    )
                                                }
                                                className={`option ${
                                                    selected.console &&
                                                    selected.console === item.id
                                                        ? 'active'
                                                        : ' '
                                                }`}>
                                                <img src={item.img} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <button className="order-4">
                                In the shopping cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="product-info-grid">
                <div className="grid-container">
                    <div className="grid-item grid-item-1">
                        <div className="content container">
                            <div className="row">
                                <div className="col-12 col-lg-6 order-2 order-lg-1">
                                    <span className="d-none d-lg-block">
                                        Details
                                    </span>
                                    <h3>Touch Console</h3>
                                    <p>
                                        WiFi-enabled Touch Console features an
                                        app-based interface that mirrors
                                        familiar smartphone and tablet operating
                                        systems, making it easy for members to
                                        connect to the content that keeps them
                                        moving. Note: Products with Touch
                                        Console must be connected to a power
                                        source.
                                    </p>

                                    <div className="d-flex flex-column flex-xl-row justify-content-between headers">
                                        <h4 className="w-50">
                                            16“ <span> TOUCHSCREEN LCD</span>
                                        </h4>
                                        <h4 className="w-50">
                                            16 <span> WORKOUT PROGRAMS</span>
                                        </h4>
                                    </div>

                                    <ul className="d-flex flex-column flex-xl-row px-0 align-items-start align-items-xl-center">
                                        <li>
                                            <img src="/heart-icon.svg" /> Heart
                                            Rate
                                        </li>
                                        <li>
                                            <img src="/bluetooth-icon.svg" />{' '}
                                            BlueToooth
                                        </li>
                                        <li>
                                            <img src="/wifi-icon.svg" /> Wifi
                                        </li>
                                        <li>
                                            <img src="/engage-icon.svg" />{' '}
                                            Engage 360
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-12 col-lg-6 order-1 order-lg-2 d-flex justify-content-center align-items-center">
                                    <img src="/produc-grid-1.svg" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item grid-item-2 position-relative">
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
                        <img src="/produc-grid-2.svg" className="bg" />
                    </div>

                    <div className="grid-item grid-item-3 position-relative">
                        <div className="content position-absolute w-100 h-100">
                            <div className="">
                                <h3>WiFi</h3>
                                <p>
                                    Included WiFi compatibility lets you connect
                                    in the way that works best for your
                                    facility, supports automatic software
                                    updates at no charge to your facility, helps
                                    members track workouts and makes it easy for
                                    you to monitor equipment status.
                                </p>
                            </div>
                        </div>
                        <img src="/produc-grid-3.svg" className="bg" />
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

                    <div className="grid-item grid-item-7 d-flex align-items-center position-relative overflow-hidden">
                        <div className="content position-absolute w-100">
                            <div className="row align-item-center">
                                <div className="col-12 col-md-8 order-2 order-md-1 d-flex align-items-center justify-content-center justify-content-md-end">
                                    <img src="/grid-item7.svg" />
                                </div>

                                <div className="col-12 col-md-4 order-1 order-md-2 d-flex justify-content-center justify-content-md-start align-items-center">
                                    <PerfonmanceBox />
                                </div>
                            </div>
                        </div>
                        <img src="/ms-bg.svg" className="bg" />
                    </div>
                </div>
            </section>

            <SuperChargeSection
                title="Supercharge Your Training"
                description="To bulletproof your body"
                module="product-view-module"
            />

            <ProductsSection
                title="Same Products"
                description="To bulletproof your body"
                module="product-view"
            />

            <PartnersSection classes="d-block d-md-none" />
        </>
    )
}

export default ProductView
