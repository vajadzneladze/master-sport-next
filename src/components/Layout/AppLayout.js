import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useEffect, useState } from 'react'
import Preload from '../Preload/Preload'
import FormModal from '../Shared/FormModal'
import Cart from '../Shared/Cart'
import DesktopNav from '../Shared/DesktopNav'
import MobNav from '../Shared/MobNav'
import Search from '../Shared/Search'

export default function AppLayout({ children }) {
    const [modalType, setModalType] = useState(null) // login / registration / forgot password
    const [showCart, setShowCart] = useState(false)
    const [showDesktopSizeNav, setDesktopSizeNav] = useState(null) // each nav item
    const [showMobNav, setShowMobNav] = useState(null)
    const [showSearch, setShowSearch] = useState(false)

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <>
            <FormModal type={modalType} showModal={setModalType} />

            {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
            {showSearch && (
                <Search showModal={showSearch} setShowModal={setShowSearch} />
            )}
            {showDesktopSizeNav && (
                <DesktopNav
                    showNav={showDesktopSizeNav}
                    setShowNav={setDesktopSizeNav}
                />
            )}

            <Preload isLoaded={isLoaded} />

            <MobNav showNav={showMobNav} setShowNav={setShowMobNav} />

            <div
                id="landing-page"
                className={`loading-animation-page${
                    isLoaded && '-end'
                } overflow-hidden `}>
                <Header
                    showModal={setModalType}
                    showCart={setShowCart}
                    showSearch={setShowSearch}
                    isDark={showSearch}
                    showDeskNav={setDesktopSizeNav}
                    setMobNav={setShowMobNav}
                />

                {children}

                <Footer />
            </div>
        </>
    )
}
