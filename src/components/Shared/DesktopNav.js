import { useEffect } from 'react'
import Link from 'next/link'

const DesktopNav = ({ showNav, setShowNav }) => {
    useEffect(() => {
        window.addEventListener('click', closeModalHandler)

        return () => {
            window.removeEventListener('click', closeModalHandler)
        }
    }, [])

    const closeModalHandler = e => {
        const content = document.querySelector('#desktop-nav-modal')

        if (content === e.target) {
            setShowNav(null)
        }
    }

    return (
        <div
            className={`container-fluid d-none  d-lg-block ${
                showNav && 'show'
            }`}
            id="desktop-nav-modal">
            <div className="container bg-white">
                <div className="">
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-3 col-xxl-4 left">
                                <img src="/desktop-nav-shop-now.svg" />

                                <h3>Nike Joyride</h3>
                                <p>Men's Road Running Shoes</p>

                                <Link href=""> Shop now - 30 %</Link>
                            </div>

                            <div className="col-9 col-xxl-8 right">
                                <div className="row">
                                    <div
                                        className={`col-4 col-xl-3 ${
                                            showNav === 'clothing' && 'd-none'
                                        } `}>
                                        <h3>Cardio</h3>
                                        <ul>
                                            <li>
                                                <Link
                                                    href="/products"
                                                    onClick={() =>
                                                        setShowNav(false)
                                                    }>
                                                    {' '}
                                                    Treadmills{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    Ascent Trainers{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    Ellipticals{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    ClimbMills{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href=""> Steppers </Link>
                                            </li>
                                            <li>
                                                <Link href=""> Cycles </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div
                                        className={`col-4 col-xl-3 ${
                                            showNav === 'clothing' && 'd-none'
                                        } `}>
                                        <h3>Connected solution</h3>
                                        <ul>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    Treadmills{' '}
                                                </Link>
                                            </li>
                                            <li className="active">
                                                <Link href="">
                                                    {' '}
                                                    Ascent Trainers{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    Ellipticals{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    ClimbMills{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href=""> Steppers </Link>
                                            </li>
                                            <li>
                                                <Link href=""> Cycles </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-4 col-xl-3">
                                        <h3>Education prog.</h3>
                                        <ul>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    Matrix Ride{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href=""> MX4 </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    MX4 Active{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    Sprint 8 GX{' '}
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-4 col-xl-3">
                                        <h3>Strenght</h3>
                                        <ul>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    Single-Station{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    Multi-Station{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    Free Weights{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    Plate-Loaded{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    Racks & Platforms{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    Browse All Strength Products{' '}
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div
                                        className={`col-4 col-xl-3 ${
                                            showNav === 'home' && 'd-none'
                                        } `}>
                                        <h3>Support</h3>
                                        <ul>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    Treadmills{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    Ascent Trainers{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    Ellipticals{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    ClimbMills{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href=""> Steppers </Link>
                                            </li>
                                            <li>
                                                <Link href=""> Cycles </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div
                                        className={`col-4 col-xl-3 ${
                                            showNav === 'home' && 'd-none'
                                        } `}>
                                        <h3>Consoles</h3>
                                        <ul>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    Treadmills{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    Ascent Trainers{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    Ellipticals{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    ClimbMills{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href=""> Steppers </Link>
                                            </li>
                                            <li>
                                                <Link href=""> Cycles </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div
                                        className={`col-4 col-xl-3 ${
                                            showNav === 'home' && 'd-none'
                                        } `}>
                                        <h3>Functional & Group traninng</h3>
                                        <ul>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    Treadmills{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    Ascent Trainers{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    Ellipticals{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    {' '}
                                                    ClimbMills{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href=""> Steppers </Link>
                                            </li>
                                            <li>
                                                <Link href=""> Cycles </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesktopNav
