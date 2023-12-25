import { useCart } from '@/context/CartContext'
import { useRouter } from 'next/router'
import { calculateSubtotal, calculateTax, calculateTotal } from '@/lib/calc'

const Summary = ({ step = 1, setStep }) => {
    const router = useRouter()

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

    return (
        <div className="col-12 col-lg-4 summary cart-summary">
            <div className="top d-flex  justify-content-between">
                <h2 className="mb-0">In Your Bag</h2>

                {step !== 1 && <span onClick={() => setStep(1)}>Edit</span>}
            </div>

            <div className="price-details">
                <div className="d-flex justify-content-between">
                    <h3>Subtotal</h3>
                    <p>${subTotal}</p>
                </div>

                <div className="d-flex justify-content-between">
                    <h3>Estimated Shipping & Handling</h3>
                    <p>${shippingCost}</p>
                </div>

                <div className="d-flex justify-content-between">
                    <h3>Estimated Tax</h3>
                    <p>${tax}</p>
                </div>

                {step !== 3 && (
                    <div className="price-sum d-flex justify-content-between">
                        <h3 className="mb-0 ">Total</h3>
                        <p className="price mb-0">${total}</p>
                    </div>
                )}
            </div>

            {step === 3 && (
                <>
                    <div className="price-sum d-flex justify-content-between">
                        <h3>Total</h3>
                        <p className={'price '}>
                            ${total}
                        </p>
                    </div>

                    <button
                        onClick={() => {
                            router.push('/account/latest')
                        }}>
                        Place Your Order
                    </button>
                </>
            )}

            {step != 3 && (
                <div className="order-items">
                    {cartItems.map((item, index) => {
                        return (
                            <div className="item d-flex" key = { item.id }>
                                <div className="image">
                                    <img src={item?.imgUrl  && item?.imgUrl.length > 0 ? item.imgUrl[0] : ''} />
                                </div>

                                <div className="order-info">
                                    <h3>{item?.title || '' }</h3>
                                    <p>{item?.description || ''}</p>

                                    <div className="bottom d-flex">
                                        <div className="">
                                            <h4>Consoles</h4>
                                            <p>TOUCH XL</p>
                                        </div>

                                        <div className="">
                                            <h4>Quantity</h4>
                                            <p>{item?.quantity || 0}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                   
                </div>
            )}

            {/* <!-- <button>Checkout</button> --> */}
        </div>
    )
}

export default Summary
