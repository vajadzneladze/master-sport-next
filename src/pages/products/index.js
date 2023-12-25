import ProductsCategories from '@/components/Products/ProductsCategories'
import SingleProduct from '@/components/Products/SingleProduct'
import React, { useState } from 'react'

const catData = [
    {
        title: 'Filter',
        cats: [
            'Cardio',
            'Connected solution',
            'Education program',
            'Strength',
            'Support',
            'Functional & Group Traninng',
        ],
    },
    {
        title: 'Console Technology',
        cats: ['All Consoles', 'Touch XL', 'Touch', 'Premium LED'],
    },
    {
        title: 'Filter',
        cats: [
            'Cardio',
            'Connected solution',
            'Education program',
            'Strength',
            'Support',
            'Functional & Group Traninng',
        ],
    },
    {
        title: 'Console Technology',
        cats: ['All Consoles', 'Touch XL', 'Touch', 'Premium LED'],
    },
]

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

const products = () => {
    const [filtered, setFiltered] = useState([])
    const [showFilter, setShowFilter] = useState(false)

    return (
        <>
            <section id="shop">
                <div className="content container">
                    <div className="row">
                        <div
                            className={`col-12 col-md-3 sidebar-filter ${
                                showFilter && 'show'
                            }`}>
                            <div className="d-flex top justify-content-between d-md-none">
                                <div>Filter</div>
                                <button
                                    className="close-btn"
                                    onClick={() =>
                                        setShowFilter(false)
                                    }></button>
                            </div>

                            <div className="filter-btns d-flex justify-content-between d-md-none">
                                <button
                                    className="clear"
                                    onClick={() => setFiltered([])}>
                                    Clear ({filtered.length})
                                </button>
                                <button className="apply">Apply</button>
                            </div>

                            <div className="overflow-y-scroll wrapper">
                                <ProductsCategories
                                    filtered={filtered}
                                    setFiltered={setFiltered}
                                    data={catData}
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-9 shop-content">
                            <div className="row shop-nav d-block d-md-none">
                                <h2>For your facility, Connected solution</h2>

                                <div className="overflow-x-scroll">
                                    <ul className="d-flex">
                                        <li>
                                            <a href=""> Digital Solutions </a>
                                        </li>
                                        <li className="active">
                                            <a href=""> Engage 360 </a>
                                        </li>
                                        <li>
                                            <a href=""> Community 360 </a>
                                        </li>
                                        <li>
                                            <a href=""> Asset Management </a>
                                        </li>
                                        <li>
                                            <a href=""> Digital Solutions </a>
                                        </li>
                                        <li>
                                            <a href=""> Engage 360 </a>
                                        </li>
                                        <li>
                                            <a href=""> Community 360 </a>
                                        </li>
                                        <li>
                                            <a href=""> Asset Management </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="row header">
                                <div className="col-5">
                                    <p>(369 Items)</p>
                                </div>

                                <div className="offset-2 col-5 d-flex align-items-center justify-content-end">
                                    <button
                                        className="d-block d-md-none filter-btn"
                                        onClick={() => setShowFilter(true)}>
                                        <span>Filter</span>
                                        <img src="filter-icon-dark.svg" />
                                    </button>

                                    <p className="d-none d-md-block">Sort</p>
                                    <form className="d-none d-md-block">
                                        <select
                                            className="form-select sort-select"
                                            aria-label="Default select example"
                                            defaultValue={0}>
                                            <option value="0">
                                                New trading
                                            </option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </form>
                                </div>
                            </div>

                            <div className="row products justify-content-center justify-content-sm-end ps-2 ps-sm-0">
                                {
                                    productsArray &&
                                        productsArray.length > 0 &&
                                        productsArray.map(item => {
                                            return (
                                                <SingleProduct
                                                    key={item.id}
                                                    classes="col-12 col-md-6 col-lg-3"
                                                    data={item}
                                                    swipe = {true}
                                                />
                                            )
                                        })

                                    // <ProductsSection
                                    //     data={productsArray}
                                    //     productClasses="col-12 col-md-6 col-lg-3"
                                    // />
                                }
                            </div>

                            <div className="row pagination d-none d-md-flex">
                                <div className="col-4 d-flex align-items-center gap-4">
                                    <button
                                        className="animated-btn animation-to-right"
                                        onClick={() => {}}>
                                        <span> </span>
                                    </button>
                                    Previous
                                </div>
                                <div className="col-4 gap-4 d-flex justify-content-center align-items-center">
                                    <form>
                                        <select
                                            className="form-select sort-select"
                                            defaultValue={0}>
                                            <option value="0">1</option>
                                            <option value="1">2</option>
                                            <option value="2">3</option>
                                            <option value="3">44</option>
                                        </select>
                                    </form>

                                    <p className="p-0 m-0">of 16 pages</p>
                                </div>
                                <div className="col-4 d-flex align-items-center gap-4 justify-content-end">
                                    Next
                                    <button className="animated-btn animation-to-left">
                                        <span> </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default products
