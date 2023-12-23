import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Cart = ({ showCart, setShowCart }) => {
    const router = useRouter()

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
                            <p className="mb-0">Your Bag (1 Item)</p>
                            <button
                                className="border-0 bg-white d-block d-md-none"
                                data-bs-dismiss="modal"
                                onClick={() => setShowCart(null)}>
                                <img src="/nav-close-btn.svg" />
                            </button>
                        </div>

                        <div className="items">
                            <div className="item">
                                <div className="block">
                                    <div className="img">
                                        <img src="/cart-1.svg" />
                                    </div>

                                    <div className="info">
                                        <h3>Performance Plus Treadmill</h3>
                                        <p>WITH TOUCH XL CONOSLE</p>

                                        <h3>Consoles</h3>
                                        <p>TOUCH XL</p>
                                    </div>
                                </div>

                                <div className="price">
                                    <button>Remove</button>

                                    <p>
                                        $119.00 <del>$149.00</del>
                                    </p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="block">
                                    <div className="img">
                                        <img src="/cart-1.svg" />
                                    </div>

                                    <div className="info">
                                        <h3>Performance Plus Treadmill</h3>
                                        <p>WITH TOUCH XL CONOSLE</p>

                                        <h3>Consoles</h3>
                                        <p>TOUCH XL</p>
                                    </div>
                                </div>

                                <div className="price">
                                    <button>Remove</button>

                                    <p>
                                        $119.00 <del>$149.00</del>
                                    </p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="block">
                                    <div className="img">
                                        <img src="/cart-1.svg" />
                                    </div>

                                    <div className="info">
                                        <h3>Performance Plus Treadmill</h3>
                                        <p>WITH TOUCH XL CONOSLE</p>

                                        <h3>Consoles</h3>
                                        <p>TOUCH XL</p>
                                    </div>
                                </div>

                                <div className="price">
                                    <button>Remove</button>

                                    <p>
                                        $119.00 <del>$149.00</del>
                                    </p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="block">
                                    <div className="img">
                                        <img src="/cart-1.svg" />
                                    </div>

                                    <div className="info">
                                        <h3>Performance Plus Treadmill</h3>
                                        <p>WITH TOUCH XL CONOSLE</p>

                                        <h3>Consoles</h3>
                                        <p>TOUCH XL</p>
                                    </div>
                                </div>

                                <div className="price">
                                    <button>Remove</button>

                                    <p>
                                        $119.00 <del>$149.00</del>
                                    </p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="block">
                                    <div className="img">
                                        <img src="/cart-1.svg" />
                                    </div>

                                    <div className="info">
                                        <h3>Performance Plus Treadmill</h3>
                                        <p>WITH TOUCH XL CONOSLE</p>

                                        <h3>Consoles</h3>
                                        <p>TOUCH XL</p>
                                    </div>
                                </div>

                                <div className="price">
                                    <button>Remove</button>

                                    <p>
                                        $119.00 <del>$149.00</del>
                                    </p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="block">
                                    <div className="img">
                                        <img src="/cart-1.svg" />
                                    </div>

                                    <div className="info">
                                        <h3>Performance Plus Treadmill</h3>
                                        <p>WITH TOUCH XL CONOSLE</p>

                                        <h3>Consoles</h3>
                                        <p>TOUCH XL</p>
                                    </div>
                                </div>

                                <div className="price">
                                    <button>Remove</button>

                                    <p>
                                        $119.00 <del>$149.00</del>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bottom">
                            <div className="d-flex justify-content-between">
                                <p>Estimated Subtotal (1 Item):</p>

                                <span>$119.00</span>
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
