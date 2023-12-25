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




const newProducts = [
    {
        id: 2,
        title: 'High-Performance Treadmill',
        description: 'A high-performance treadmill for indoor running.',
        imgUrl: [
            'https://source.unsplash.com/5ybAx8XpH9U/800x600',
            'https://source.unsplash.com/LWZaekkABAY/800x600',
        ],
        price: 799.99,
        isSale: false,
        isNew: true,
    },
    {
        id: 5,
        title: 'Weight Bench',
        description: 'A sturdy weight bench for various strength exercises.',
        imgUrl: [
            'https://source.unsplash.com/2sNL6bjWu_Y/800x600',
            'https://source.unsplash.com/wnM_fI6fMXM/800x600',
        ],
        price: 89.99,
        isSale: false,
        isNew: true,
    },
    {
        id: 7,
        title: 'Fitness Tracker Watch',
        description:
            'A smart fitness tracker watch for monitoring your workouts.',
        imgUrl: [
            'https://source.unsplash.com/SfL_v_ZZvL8/800x600',
            'https://source.unsplash.com/RiwcU4Rp_xY/800x600',
        ],
        price: 129.99,
        isSale: false,
        isNew: true,
    },
    {
        id: 9,
        title: 'Jump Rope',
        description: 'A durable jump rope for cardiovascular workouts.',
        imgUrl: [
            'https://source.unsplash.com/4xRNx5yLRwI/800x600',
            'https://source.unsplash.com/D5f6vZ8tD4A/800x600',
        ],
        price: 9.99,
        isSale: false,
        isNew: true,
    },
    {
        id: 10,
        title: 'Foam Roller',
        description:
            'A foam roller for self-myofascial release and muscle recovery.',
        imgUrl: [
            'https://source.unsplash.com/4RZM_6p55gE/800x600',
            'https://source.unsplash.com/n8WcvBUZq8w/800x600',
        ],
        price: 24.99,
        isSale: false,
        isNew: true,
    },
    // Add more new products as needed
]


const saleProducts = [
    {
        id: 1,
        title: 'Adjustable Dumbbell Set',
        description: 'A set of adjustable dumbbells for versatile workouts.',
        imgUrl: [
            'https://source.unsplash.com/4XChUCCKA8c/800x600',
            'https://source.unsplash.com/9iVfBwafP2o/800x600',
        ],
        price: 149.99,
        newPrice: 129.99,
        isSale: true,
        endTime: '2023-12-31T23:59:59', // Sale ends at the end of the year
    },
    {
        id: 3,
        title: 'Resistance Bands Set',
        description: 'A set of resistance bands for strength training.',
        imgUrl: [
            'https://source.unsplash.com/gqlRFspfi3E/800x600',
            'https://source.unsplash.com/6rPJaP8KXZA/800x600',
        ],
        price: 29.99,
        newPrice: 24.99,
        isSale: true,
        endTime: '2023-12-31T23:59:59', // Sale ends at the end of the year
    },
    {
        id: 4,
        title: 'Indoor Cycling Bike',
        description: 'An indoor cycling bike for intense cardio workouts.',
        imgUrl: [
            'https://source.unsplash.com/cBvl13eRd3Q/800x600',
            'https://source.unsplash.com/K2ShEL2xuhA/800x600',
        ],
        price: 499.99,
        isSale: true,
        newPrice: 449.99,
        endTime: '2023-11-30T23:59:59', // Sale ends at the end of November
    },
    {
        id: 6,
        title: 'Kettlebell Set',
        description: 'A set of kettlebells for functional strength training.',
        imgUrl: [
            'https://source.unsplash.com/fJ8aDGa_9XU/800x600',
            'https://source.unsplash.com/VTrv0AR0z5g/800x600',
        ],
        price: 69.99,
        isSale: true,
        newPrice: 59.99,
        endTime: '2023-12-31T23:59:59', // Sale ends on December 15th
    },
    {
        id: 8,
        title: 'Yoga Mat',
        description:
            'A comfortable and non-slip yoga mat for yoga and stretching.',
        imgUrl: [
            'https://source.unsplash.com/Rz8OGP4hC-0/800x600',
            'https://source.unsplash.com/GHGuQXrs-zU/800x600',
        ],
        price: 19.99,
        newPrice: 15.99,
        isSale: true,
        endTime: '2023-12-31T23:59:59', // Sale ends on December 10th
    },
    // Add more sale products as needed
]




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
                data={saleProducts}
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
                data={newProducts}
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
