import { useContext, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCart } from '@/context/CartContext'
import CartItem from '../Cart/CartItem'
import { calculateSubtotal, calculateTax, calculateTotal } from '@/lib/calc'

const Cart = ({ showCart, setShowCart }) => {
    const router = useRouter()
    const { cartItems, removeFromCart } = useCart()

    const subTotal = calculateSubtotal(cartItems)
    const tax = calculateTax(subTotal, 0.1) // Example: 10% tax rate
    const shippingCost = 5.99 // Example: Flat rate shipping cost
    const total = calculateTotal(subTotal, tax, shippingCost)

    const handleRemove = itemId => {
        removeFromCart(itemId)
    }

    useEffect(() => {
        window.addEventListener('click', closeModalHandler)

        return () => {
            window.removeEventListener('click', closeModalHandler)
        }
    }, [])

    const closeModalHandler = e => {
        const content = document.querySelector('#cart-modal')

        if (content === e.target) {
            setShowCart(false)
        }
    }

    return (
        <div
            className={`modal fade ${showCart && 'show d-block'}`}
            id="cart-modal"
            tabIndex="-1"
            aria-labelledby="cart-modal"
            aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content cart">
                    <div className="modal-body">
                        <div className="top d-flex justify-content-between justify-content-md-start align-items-center">
                            <p className="mb-0">
                                Your Bag ({cartItems ? cartItems.length : 0}{' '}
                                Item)
                            </p>
                            <button
                                className="border-0 bg-white d-block d-md-none"
                                data-bs-dismiss="modal"
                                onClick={() => setShowCart(null)}>
                                <img src="/nav-close-btn.svg" />
                            </button>
                        </div>

                        <div className="items">
                            {cartItems &&
                                cartItems.map(item => {
                                    return (
                                        <CartItem
                                            key={item.id}
                                            data={item}
                                            deleteItem={handleRemove}
                                        />
                                    )
                                })}
                        </div>

                        <div className="bottom">
                            <div className="d-flex justify-content-between">
                                <p>
                                    Estimated Subtotal (
                                    {cartItems ? cartItems.length : 0} Item):
                                </p>

                                <span>${subTotal || '0.00'}</span>
                            </div>

                            <button
                                onClick={() => {
                                    router.push('/cart')
                                    setShowCart(false)
                                }}>
                                View Bag & Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
