import AccountHeading from '@/components/Account/AccountHeading'
import AddressContent from '@/components/Account/AddressContent'
import OrdersContent from '@/components/Account/OrdersContent'
import PersonalContent from '@/components/Account/PersonalContent'
import SideBar from '@/components/Account/SideBar'
import UpdatesContent from '@/components/Account/UpdatesContent'
import DeliveryForm from '@/components/Cart/DeliveryForm'
import { useRouter } from 'next/router'
import { useState } from 'react'

const pages = {
    latest: {
        title: '👋 Hello George!',
        description: `Welcome to your account. Here you can manage your orders and
            returns, personal data and other account information.`,
        data: {},
    },
    order: {
        title: '👋 Hello George!',
        description: `Here are your orders`,
        data: {},
    },
    personal: {
        title: 'Personal data',
        description: `Here you can view and change your personal data, e-mail address and password.`,
        data: {},
    },
    address: {
        title: 'Addresses',
        description: `Here you can add or change your addresses.`,
        data: {},
    },
}

const Account = () => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <section id="account" className="container-fluid overflow-hidden">
            <div className="container">
                <div className="row">
                    <SideBar current={slug} />

                    <div className="col-12 col-md-9 order-1 order-md-2 right">
                        <AccountHeading
                            title={pages[slug]?.title}
                            description={pages[slug]?.description}
                        />

                        {slug === 'latest' && <UpdatesContent />}
                        {slug === 'order' && <OrdersContent />}
                        {slug === 'personal' && <PersonalContent />}
                        {slug === 'address' && <AddressContent />}

                        {/* <div id = "cart-page">
                            <div className="order-form">
                                <DeliveryForm
                                    onSubmit={() => {}}
                                    onChange={e => {}}
                                    data={{}}
                                />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Account
