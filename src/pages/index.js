import Head from 'next/head'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import useTranslation from 'next-translate/useTranslation'
import axios from '../lib/axios'
import { CSSTransition } from 'react-transition-group'
import { useEffect, useRef, useState } from 'react'
import ReceiveCall from '../components/Shared/ReceiveCall'
import Preload from '@/components/Preload/Preload'
import FormModal from '@/components/Shared/FormModal'
import ProductsSection from '@/components/Products/ProductsSection'
import GymSection from '@/components/Gym/GymSection'
import SuperChargeSection from '@/components/SuperCharge/SuperChargeSection'
import BannerSection from '@/components/Banner/BannerSection'
import QuestionsSection from '@/components/Questions/QuestionsSection'
import PartnersSection from '@/components/Partners/PartnersSection'

export default function Home(home) {
    return (
        <>
            <section id="home">
                <div className="content text-center text-md-start position-absolute container">
                    <h2>ENHANCING THE WORKOUT EXPERIENCE</h2>

                    <p>
                        We are a complete ecosystem of high-quality fitness
                        solutions. We offer high standard equipment and a
                        variety of services to set up your gym from scratch.
                    </p>

                    <button>
                        <Link href="/products">Shop now</Link>
                    </button>
                </div>

                <div className="footer position-absolute container d-none d-lg-block">
                    <div className="row">
                        <div className="col-5"></div>
                        <div className="col-2 slider-loading">
                            <div className="vertical-line"></div>
                        </div>
                        <div className="col-5 socials d-flex align-items-center justify-content-end">
                            <ul className="d-flex align-items-center">
                                <li>
                                    <Link href="" target="_blank">
                                        <img
                                            src="/socials/fb.svg"
                                            alt="facebook"
                                        />
                                    </Link>
                                </li>

                                <li>
                                    <Link href="" target="_blank">
                                        <img
                                            src="/socials/tw.svg"
                                            alt="twitter"
                                        />
                                    </Link>
                                </li>

                                <li>
                                    <Link href="" target="_blank">
                                        <img
                                            src="/socials/insta.svg"
                                            alt="instagram"
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="top-bg-grad"></div>
                <div className="left-bg-grad"></div>

                <video autoPlay loop playsInline muted>
                    <source src="../../videos/v-2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>

            {/* everything you need */}
            <ProductsSection
                title="Everything you need "
                description="To bulletproof your body"
                module="needed-products"
            />

            {/* Gym Equipment  */}
            <GymSection />

            {/*  Supercharge your training   */}
            <SuperChargeSection
                title="Supercharge your training "
                description="To BulletProof Your Body"
            />
            {/*  Slide Banner  */}
            <BannerSection />

            {/* whats new ? */}
            <ProductsSection
                title="What is new? "
                description="To bulletproof your body"
                module="what-is-new"
            />

            {/* Any Question ?  */}
            <QuestionsSection
                title="Any Questions ?"
                description="Frequently Asked Questions "
            />

            {/* Partners Section */}
            <PartnersSection />
        </>
    )
}


