import Image from 'next/image'
import { AppContext } from '../../pages/_app'
import { useContext } from 'react'
import Script from 'next/script'

const Footer = () => {
    const { navigation } = useContext(AppContext)

    return (
        <footer>
            <div className = "container">
                <div className = "row">
                    <div className = "col-12 col-md-5 d-flex flex-column align-items-center align-items-md-start">
                        <h2>
                            Master <span>sport</span>
                        </h2>
                        <h3 className = "text-center text-md-start">
                            Get Access to our latest product announcements ,
                            training protocols , deals & more !
                        </h3>

                        <form action="#" method="post">
                            <input
                                type="email"
                                placeholder="E - mail"
                                name="email"
                            />
                            <button></button>
                        </form>
                    </div>

                    <div className = "col-12 col-md-7 d-flex flex-column align-items-center align-items-md-end">
                        <ul className = "d-flex footer-nav flex-column flex-md-row">
                            <li>
                                <a href=""> For your facility </a>
                                <a href=""> For your facility </a>
                            </li>

                            <li>
                                <a href=""> For your home </a>
                                <a href=""> For your home </a>
                            </li>

                            <li>
                                <a href=""> About as </a>
                                <a href=""> About as </a>
                            </li>

                            <li>
                                <a href=""> Contact </a>
                                <a href=""> Contact </a>
                            </li>
                        </ul>

                        <div className = "d-block d-md-none line"></div>

                        <address className = "d-flex flex-column align-items-center align-items-md-end">
                            <p className = "text-center text-md-end">
                                Georgia,Tbilisi Nino Abashidze - Orbleiani #55
                            </p>
                            <p>+995 555 66 87</p>
                            <p>web@mastersport.ge</p>
                        </address>

                        <div className = "socials d-flex align-items-center">
                            <ul className = "d-flex align-items-center">
                                <li className = "ms-0">
                                    <a href="">
                                        <img
                                            src="/socials/fb-dark.svg"
                                            alt="facebook"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a href="">
                                        <img
                                            src="/socials/tw-dark.svg"
                                            alt="twitter"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a href="" className = "p-0">
                                        <img
                                            src="/socials/insta-dark.svg"
                                            alt="instagram"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <ul className = "d-flex terms p-0 d-block d-md-none">
                            <li>
                                <a href=""> TERMS OF GEORGIA </a>
                            </li>
                            <li>
                                <a href=""> PRIVACY POLICY </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className = "container-fluid btm-part">
                <div className = "container">
                    <div className = "row">
                        <div className = "col-12 col-md-6">
                            <p className = "copy-rights text-center text-md-start">
                                ©2023 ALL RIGHTS RESERVED
                            </p>
                        </div>

                        <div className = "col-6 d-none d-md-block">
                            <ul className = "d-flex justify-content-end terms">
                                <li>
                                    <a href=""> TERMS OF GEORGIA </a>
                                </li>
                                <li>
                                    <a href=""> PRIVACY POLICY </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        // <footer id='footer'>
        //     <a href="#" className="policy">© 2022 | Privacy Policy.</a>
        //     <Image
        //                         src={navigation?.footer_logo}
        //                         alt="Footer Logo"
        //                         width="94"
        //                         height="94"
        //                         className="footer_logo"
        //                     />

        //     <a href="https://lemons.ge">Created By Lemons</a>

        // <Script src="https://www.googletagmanager.com/gtag/js?id=G-FQW1BK1JEC" />
        //   <Script id="google-analytics">
        //     {`
        //       window.dataLayer = window.dataLayer || [];
        //       function gtag(){dataLayer.push(arguments);}
        //       gtag('js', new Date());

        //       gtag('config', 'G-FQW1BK1JEC');
        //     `}
        //   </Script>

        // </footer>
    )
}

export default Footer
