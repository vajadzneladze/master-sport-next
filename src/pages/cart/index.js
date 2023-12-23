import BagItem from '@/components/Cart/BagItem'
import ProductsSection from '@/components/Products/ProductsSection'
import { useRouter } from 'next/router'
import { useContext, useEffect, useMemo, useState } from 'react'

const CartPage = () => {
    const [bagItems, setBagItems] = useState([
        {
            id: 1,
            title: 'Performance Plus Treadmill',
            description: 'WITH TOUCH XL CONSOLE',
            img: '/product-1.png',
            price: '203.40',
            newPrice: null,
            sale: false,
            count: 1,
        },
        {
            id: 2,
            title: 'Performance Plus Treadmill',
            description: 'WITH TOUCH XL CONSOLE',
            img: '/product-2.png',
            price: '203.00',
            newPrice: '169.49',
            sale: true,
            count: 1,
        },
        {
            id: 3,
            title: 'Performance Plus Treadmill',
            description: 'WITH TOUCH XL CONSOLE',
            img: '/product-3.png',
            price: '203.00',
            newPrice: null,
            sale: false,
            count: 1,
        },
    ])

    const router = useRouter()

    const [promoDiscount, setPromoDiscount] = useState(0)
    const [promo, setPromo] = useState('')

    const tax = bagItems.length > 0 ? 3.75 : 0.0
    const shipping = bagItems.length > 0 ? 15 : 0.0

    const setCountHandler = (id, count) => {
        if (parseInt(count) === 0) {
            deleteHandler(id)
        } else {
            const updatedArray = bagItems.map(item => {
                return id === item.id
                    ? {
                          ...item,
                          count: parseInt(count),
                      }
                    : item
            })

            setBagItems(updatedArray)
        }
    }

    const deleteHandler = id => {
        const updatedArray = bagItems.filter(item => item.id != id)

        setBagItems(updatedArray)
    }

    const sumGenerator = () => {
        let subTotal = 0
        let sum = 0

        /** sum items */
        bagItems.forEach(item => {
            const price = item.sale ? item.newPrice : item.price

            subTotal += parseInt(item.count) * price
        })

        /** Minus Discount **/
        if (promoDiscount > 0) {
            subTotal = subTotal - promoDiscount
        }

        sum = subTotal

        /** Add Shipping */
        if (parseFloat(shipping) > 0) {
            sum = sum + parseFloat(shipping)
        }

        /** Add Tax **/
        if (parseFloat(tax) > 0) {
            sum = sum + parseFloat(tax)
        }

        return {
            subtotal: subTotal,
            total: sum,
            oldPrice: sum + promoDiscount,
        }
    }

    const promoSubmitHandler = e => {
        e.preventDefault()

        if (promo.length != '') {
            setPromoDiscount(100)
        } else {
            setPromoDiscount(0)
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
                                    Your Bag ( {bagItems.length} Item )
                                </h3>

                                <div className="items">
                                    {bagItems.map((item, index) => {
                                        return (
                                            <BagItem
                                                {...item}
                                                key={item.id}
                                                deleteHandler={deleteHandler}
                                                setCountHandler={
                                                    setCountHandler
                                                }
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 summary">
                            <div className = 'top'>
                                <h2>Summary</h2>
                                <p>Do you have a Promo Code?</p>
                            </div>
                            <form
                                className="d-flex promo-form justify-content-between"
                                onSubmit={promoSubmitHandler}>
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
                                    <p>${sumGenerator().subtotal}</p>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <h3>Estimated Shipping & Handling</h3>
                                    <p>${shipping}</p>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <h3>Estimated Tax</h3>
                                    <p>${tax}</p>
                                </div>
                            </div>

                            <div className="price-sum d-flex justify-content-between">
                                <h3>Total</h3>
                                <p
                                    className={
                                        'price' +
                                        (promoDiscount &&
                                            parseFloat(promoDiscount) > 0)
                                            ? 'sale'
                                            : ' '
                                    }>
                                    ${sumGenerator().total}
                                    {parseFloat(promoDiscount) > 0 && (
                                        <del> ${sumGenerator().oldPrice} </del>
                                    )}
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
            />
        </>
    )
}

export default CartPage
