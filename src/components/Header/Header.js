import Image from 'next/image'
import Link from 'next/link'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useRouter } from 'next/router'
import Loader from '../Loader'
import { useContext, useEffect, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import ReceiveCall from '../Shared/ReceiveCall'
import { AppContext } from '../../pages/_app'
import Head from 'next/head'

const withBgPageRoutes = [
    '/products',
    '/training',
    '/about',
    '/contact',
    '/cart',
    '/account'
]

const Header = ({
    showModal,
    showCart,
    showDeskNav,
    setMobNav,
    showSearch,
    isDark,
}) => {
    const { t } = useTranslation('common')
    const { navigation } = useContext(AppContext)
    const router = useRouter()
    const [MobileMenu, setMobileMenu] = useState(false)
    const { locales, locale: activeLocale } = router
    const otherLocales = locales?.filter(locale => locale != activeLocale)

    const showModalHandler = (e, str) => {
        showModal(str)
    }

    const withBg =
        withBgPageRoutes.find(item => router.asPath.includes(item)) && !isDark

    return (
        <>
            <nav
                className={`navbar navbar-expand-lg position-absolute w-100  ${
                    withBg && 'with-bg'
                }`}>
                <div className="container">
                    <div className="navbar-brand">
                        <Link href="/">
                            {' '}
                            Master <span>sport </span>{' '}
                        </Link>
                    </div>

                    <div
                        className="collapse overflow-hidden navbar-collapse d-none d-lg-flex justify-content-end"
                        id="navbarNav">
                        <ul className="navbar-nav">
                            <li
                                className="nav-item"
                                onClick={() => showDeskNav('facality')}>
                                <span className="nav-link">
                                    For your facility
                                </span>
                                <span className="nav-link">
                                    For your facility
                                </span>
                            </li>
                            <li
                                className="nav-item"
                                onClick={() => showDeskNav('home')}>
                                <span className="nav-link" href="#">
                                    For your home
                                </span>
                                <span className="nav-link" href="#">
                                    For your home
                                </span>
                            </li>
                            <li
                                className="nav-item"
                                onClick={() => showDeskNav('clothing')}>
                                <span className="nav-link" href="#">
                                    Clothing and accessories
                                </span>
                                <span className="nav-link" href="#">
                                    Clothing and accessories
                                </span>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/about">
                                    About us
                                </Link>
                                <Link className="nav-link" href="/about">
                                    About us
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" href="/contact">
                                    Contact
                                </Link>
                                <Link className="nav-link" href="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="ms-auto actions d-flex align-items-center">
                        <img
                            src={withBg ? '/search-dark.svg' : '/search.svg'}
                            alt=" "
                            className="search-btn"
                            onClick={() => {
                                showSearch(true)
                            }}
                        />
                        <button
                            className="btn login-btn d-none d-lg-flex"
                            data-bs-toggle="modal"
                            disabled={isDark}
                            data-bs-target="#auth-modal"
                            onClick={e => showModalHandler(e, 'login')}>
                            Log in
                        </button>
                        <button
                            data-bs-toggle="modal"
                            disabled={isDark}
                            data-bs-target="#auth-modal"
                            className="btn sign-up-btn d-none d-lg-flex"
                            onClick={e => showModalHandler(e, 'registration')}>
                            <span>Sign up</span>
                        </button>
                        <button
                            className="btn cart-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#cart-modal"
                            disabled={isDark}
                            onClick={() => showCart(true)}>
                            <img
                                src={
                                    withBg ? '/cart-dark.svg' : '/cart-icon.svg'
                                }
                            />
                        </button>

                        <img
                            onClick = { () => router.push('/account/personal')}
                            src={
                                withBg
                                    ? '/profile-icon-dark.svg'
                                    : '/profile-icon.svg'
                            }
                            className="search-btn d-block d-lg-none"
                        />

                        <button
                            className="nav-toggler d-block d-lg-none"
                            onClick={() => setMobNav(true)}>
                            <img
                                src={
                                    withBg
                                        ? '/menu-toggle-dark.svg'
                                        : '/menu-toggle-white.svg'
                                }
                                alt=""
                            />
                        </button>
                        <button className="btn lang-btn d-none d-lg-flex">
                            <img src="/langs/en.svg" />
                            En
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
