import Link from 'next/link'
import { useEffect, useState } from 'react'

const Search = ({ showModal, setShowModal }) => {
    const [keyword, setKeyWord] = useState()

    useEffect(() => {
        window.addEventListener('click', closeModalHandler)

        return () => {
            window.removeEventListener('click', closeModalHandler)
        }
    }, [])

    const closeModalHandler = e => {
        const content = document.querySelector('#search-modal')

        if (content === e.target) {
            setShowModal(null)
        }
    }

    return (
        <div
            id="search-modal"
            className={`container-fluid   ${showModal && 'show'}`}>
            <div className="container ">
                <div className="d-flex flex-column  search-section">
                    <div className ="search-input">
                        <form>
                            <img
                                src="/search.svg"
                                className ="search-icon position-absolute"
                            />
                            <input
                                type="text"
                                name="keyword"
                                value = {keyword}
                                onChange = { e => setKeyWord(e.target.value)}
                                placeholder="What are you looking for ?"
                            />
                            <img
                                className ="clear position-absolute"
                                src="/search-close.svg"
                                onClick={() => setShowModal(null)}
                            />
                        </form>
                    </div>

                    <div className ="search-result">
                        <Link href="/products/view/1" className ="d-flex" onClick = {() => setShowModal(false)}>
                            <img src="/product-1.png" alt="" />

                            <div className ="info">
                                <h3>Magnum Standing Arm Curl</h3>
                                <p>
                                    Ideal for exercises focusing on the upper
                                    body
                                </p>
                            </div>
                        </Link>

                        <Link href="products/view/1" className ="d-flex">
                            <img src="/product-1.png" alt="" />

                            <div className ="info">
                                <h3>Magnum Standing Arm Curl</h3>
                                <p>
                                    Ideal for exercises focusing on the upper
                                    body
                                </p>
                            </div>
                        </Link>

                        <Link href="products/view/1" className ="d-flex">
                            <img src="/product-1.png" alt="" />

                            <div className ="info">
                                <h3>Magnum Standing Arm Curl</h3>
                                <p>
                                    Ideal for exercises focusing on the upper
                                    body
                                </p>
                            </div>
                        </Link>

                        <Link href="products/view/1" className ="d-flex">
                            <img src="/product-1.png" alt="" />

                            <div className ="info">
                                <h3>Magnum Standing Arm Curl</h3>
                                <p>
                                    Ideal for exercises focusing on the upper
                                    body
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
