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
                                <SingleProduct
                                    classes="col-12 col-md-6 col-lg-3"
                                    productType="new"
                                    swipe={true}
                                    rediretUrl={'/products/view/1'}
                                />

                                <SingleProduct
                                    classes="col-12 col-md-6 col-lg-3"
                                    productType="sale"
                                    withTimer={true}
                                    swipe={true}
                                    rediretUrl={'/products/view/2'}
                                />

                                <SingleProduct
                                    classes="col-12 col-md-6 col-lg-3"
                                    swipe={true}
                                    rediretUrl={'/products/view/3'}
                                />

                                <SingleProduct
                                    classes="col-12 col-md-6 col-lg-3"
                                    swipe={true}
                                    rediretUrl={'/products/view/4'}
                                />

                                <SingleProduct
                                    classes="col-12 col-md-6 col-lg-3"
                                    productType="sale"
                                    withTimer={true}
                                    swipe={true}
                                    rediretUrl={'/products/view/5'}
                                />

                                <SingleProduct
                                    classes="col-12 col-md-6 col-lg-3"
                                    productType="new"
                                    swipe={true}
                                    rediretUrl={'/products/view/6'}
                                />
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
