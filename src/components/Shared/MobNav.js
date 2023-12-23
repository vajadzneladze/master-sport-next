import { useEffect, useState } from 'react'

const MobNav = ({ showNav, setShowNav }) => {
    const [step, setStep] = useState(1)

    useEffect(() => {
        window.addEventListener('click', closeModalHandler)

        return () => {
            window.removeEventListener('click', closeModalHandler)
        }
    }, [])

    const closeModalHandler = e => {
        const content = document.querySelector('#mobile-nav')

        if (content === e.target) {
            setShowNav(null)
        }
    }

    const clickHandler = (e, navItem) => {
        e.preventDefault()

        // if navItem have child categories  change step
        setStep(2)

        // else simple redirect
    }

    return (
        <div
            id="mobile-nav"
            className={`d-flex d-lg-none ${showNav ? 'show' : ''}`}>
            <div className="wrapper">
                <div className="d-flex justify-content-between actions">
                    <div
                        className={`prev-btn ${step === 1 && 'opacity-0'}`}
                        onClick={() => setStep(1)}>
                        All
                    </div>
                    <button
                        className={`close-btn ${step === 2 && 'opacity-0'}`}
                        onClick={() => {
                            setShowNav(false)
                        }}></button>
                </div>

                <h2 className={step === 1 && 'd-none'}>
                    <a href=""> For your facility </a>
                </h2>

                {step === 1 && (
                    <ul className="d-flex flex-column top-nav">
                        <li>
                            <a href="" onClick={e => clickHandler(e, '')}>
                                {' '}
                                Hi George{' '}
                            </a>
                        </li>
                        <li>
                            <a href=""> For your facility </a>
                        </li>
                        <li>
                            <a href=""> For your home </a>
                        </li>
                        <li>
                            <a href="about"> About Us </a>
                        </li>
                        <li>
                            <a href=""> Contact </a>
                        </li>
                    </ul>
                )}

                {step === 2 && (
                    <ul className="d-flex flex-column top-nav step-2 ">
                        <li className="no-child">
                            <a href=""> Cardio </a>
                        </li>
                        <li>
                            <a href=""> Connected solution </a>
                        </li>
                        <li>
                            <a href=""> Education program </a>
                        </li>
                        <li className="no-child">
                            <a href=""> Strength</a>
                        </li>
                        <li>
                            <a href=""> Support </a>
                        </li>
                        <li>
                            <a href=""> Consoles </a>
                        </li>
                        <li>
                            <a href=""> Functional & Group Training </a>
                        </li>
                    </ul>
                )}

                {step === 1 && (
                    <>
                        <ul className="d-flex flex-column bottom-nav ms-0 ps-0">
                            <li className="d-flex align-items-center justify-content-start">
                                <img src="/cart-icon-dark.svg" />
                                <a href=""> Cart </a>
                            </li>
                            <li className="d-flex align-items-center justify-content-start">
                                <img src="/cart-icon-dark.svg" />
                                <a href=""> Orders and returns </a>
                            </li>
                            <li className="d-flex align-items-center justify-content-start">
                                <img src="/location-dark.svg" />
                                <a href=""> Addresses </a>
                            </li>
                            <li className="d-flex align-items-center justify-content-start">
                                <img src="/langs/en.svg" />
                                <a href=""> Language </a>
                                <img src="/arrow-bottom.svg" />
                            </li>
                        </ul>

                        <div className="mobile-nav-footer d-flex flex-column">
                            <p className="m-0 text-left">TERMS OF GEORGIA</p>
                            <p className="m-0 text-left">PRIVACY POLICY</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default MobNav
