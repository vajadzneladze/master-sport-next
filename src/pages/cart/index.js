import BagItem from '@/components/Cart/BagItem'
import ProductsSection from '@/components/Products/ProductsSection'
import { useCart } from '@/context/CartContext'
import { useRouter } from 'next/router'
import { useContext, useEffect, useMemo, useState } from 'react'
import { calculateSubtotal, calculateTax, calculateTotal } from '@/lib/calc'

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

const CartPage = () => {
    const router = useRouter()
    const [promo, setPromo] = useState('')
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        applyPromoCode,
        promoCode,
    } = useCart()

    const subTotal = calculateSubtotal(cartItems)
    const tax = calculateTax(subTotal, 0.1) // Example: 10% tax rate
    const shippingCost = subTotal > 0 ? 5.99 : 0 // Example: Flat rate shipping cost
    const total = calculateTotal(subTotal, tax, shippingCost, promoCode)

    const handleApplyPromoCode = e => {
        e.preventDefault()

        if (promo && promo.length > 4) {
            applyPromoCode(100)
        } else {
            applyPromoCode(null)
        }
    }

    return (
        <>
            <section id="cart-page" className="container-fluid overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 pe-0 pe-lg-5">
                            <h2 className="text-center cart-items-count d-block d-lg-none">
                                Cart <span> / 3 Item </span>
                            </h2>

                            <div className="adds">
                                <h2>
                                    Members get free shipping on orders $50+
                                </h2>
                                <p>
                                    Become a Master Sport Member for fast free
                                    shipping on orders $50+
                                    <span className="login"> Log in </span>
                                    <strong className="d-none d-lg-inline">
                                        {' '}
                                        or{' '}
                                    </strong>
                                    <span className="registration">
                                        {' '}
                                        Sign-in{' '}
                                    </span>
                                </p>
                            </div>

                            <div className="products">
                                <h3 className="d-none d-lg-block">
                                    Your Bag ( {cartItems.length} Item )
                                </h3>

                                <div className="items">
                                    {cartItems.map((item, index) => {
                                        return (
                                            <BagItem
                                                {...item}
                                                key={item.id}
                                                deleteHandler={removeFromCart}
                                                setCountHandler={updateQuantity}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 summary">
                            <div className="top">
                                <h2>Summary</h2>
                                <p>Do you have a Promo Code?</p>
                            </div>
                            <form
                                className="d-flex promo-form justify-content-between"
                                onSubmit={e => handleApplyPromoCode(e)}>
                                <input
                                    type="text"
                                    name="promo"
                                    value={promo}
                                    onChange={e => setPromo(e.target.value)}
                                />
                                <button>Apply</button>
                            </form>

                            <div className="price-details">
                                <div className="d-flex justify-content-between">
                                    <h3>Subtotal</h3>
                                    <p>${subTotal}</p>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <h3>Estimated Shipping & Handling</h3>
                                    <p>${subTotal > 0 ? shippingCost : 0}</p>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <h3>Estimated Tax</h3>
                                    <p>${tax}</p>
                                </div>
                            </div>

                            <div className="price-sum d-flex justify-content-between">
                                <h3>Total</h3>
                                <p className={'price'}>
                                    ${total >= 0 ? total : 0}
                                </p>
                            </div>

                            <button
                                onClick={() => router.push('/cart/delivery')}>
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <ProductsSection
                title="You Might Also Like"
                description="You Might Also Like"
                data={productsArray}
            />
        </>
    )
}

export default CartPage
