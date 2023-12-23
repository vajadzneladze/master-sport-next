import BagItem from '@/components/Cart/BagItem'
import DeliveryAddressContainer from '@/components/Cart/DeliveryAddressContainer'
import DeliveryForm from '@/components/Cart/DeliveryForm'
import DeliveryShippingSpeed from '@/components/Cart/DeliveryShippingSpeed'
import DeliveryType from '@/components/Cart/DeliveryType'
import PaymentMethod from '@/components/Cart/PaymentMethod'
import PaymentMethods from '@/components/Cart/PaymentMethods'
import ReviewPaymentDetails from '@/components/Cart/ReviewPaymentDetails'
import ReviewShippingDetails from '@/components/Cart/ReviewShippingDetails'
import ShippingDetails from '@/components/Cart/ShippingDetails'
import StoreContainer from '@/components/Cart/StoreContainer'
import Summary from '@/components/Cart/Summary'
import { useState } from 'react'

const shippingSpeedData = [
    {
        id: 1,
        title: 'Free No Rush Shipping',
        description: 'Arrives by Mon, Nov 20',
    },
    {
        id: 2,
        title: 'Free Shipping',
        description: 'Arrives by Fri, Nov 17',
    },

    {
        id: 3,
        title: '$15.00 Shipping',
        description: 'Arrives by Wed, Nov 15',
    },
]

const pickUpLocation = [
    {
        id: 1,
        title: 'Tbilisi, Didi dighomi Nino Abashidze-Orbeliani #55 ',
    },
    {
        id: 2,
        title: 'Kutaisi,  Nino Abashidze-Orbeliani #55',
    },
    {
        id: 3,
        title: 'Batumi,  Nino Abashidze-Orbeliani #55',
    },
]

const paymentMethods = [
    {
        id: 1,
        title: 'Apple Pay',
        img: '/apple-pay.svg',
    },
    {
        id: 2,
        title: 'Credit or Debit Card',
        img: '/tbc-bank.svg',
    },
    {
        id: 3,
        title: 'Installment',
        img: '/tbc-bank.svg',
    },
    {
        id: 4,
        title: 'Credit or Debit Card ',
        img: '/bog.svg',
    },
    {
        id: 5,
        title: 'Installment',
        img: '/bog.svg',
    },
]

const bagItems = [
    {
        id: 1,
        title: 'Performance Plus Treadmill',
        description: 'WITH TOUCH XL CONSOLE',
        img: '/product-1.png',
        price: '203.40',
        newPrice: null,
        sale: false,
        count: 1,
    },
    // {
    //     id: 2,
    //     title: 'Performance Plus Treadmill',
    //     description: 'WITH TOUCH XL CONSOLE',
    //     img: '/product-2.png',
    //     price: '203.00',
    //     newPrice: '169.49',
    //     sale: true,
    //     count: 1,
    // },
    // {
    //     id: 3,
    //     title: 'Performance Plus Treadmill',
    //     description: 'WITH TOUCH XL CONSOLE',
    //     img: '/product-3.png',
    //     price: '203.00',
    //     newPrice: null,
    //     sale: false,
    //     count: 1,
    // },
]

const Delivery = () => {
    const [deliveryType, setDeliveryType] = useState('ship') // ship / pick
    const [addressId, setAddressId] = useState(null) // selected Address Id
    const [storeId, setStoreId] = useState(null) // selected Store Location Id
    const [addresses, setAddresses] = useState([]) // existing addresses
    const [selectedSpeedId, setSelectedSpeedId] = useState(1) // Shipping speed id
    const [selectedMethod, setSelectedMethod] = useState(1)
    const [showForm, setShowForm] = useState('add') //add / edit / null  (address form options)
    const [step, setStep] = useState(1)
    const [form, setForm] = useState({
        country: '',
        city: '',
        address: '',
        email: '',
        phone: '',
    }) // address form  ( add new /  update existing  form )

    /** Address form inputs value change handler */
    const inputChangeHandler = e => {
        e.preventDefault()
        setForm(prevData => {
            return {
                ...prevData,
                [e.target.name]: e.target.value,
            }
        })
    }

    /** submit addres form */
    const addAddress = async e => {
        e.preventDefault()

        let formData = new FormData()
        formData.append('name', form.name)
        formData.append('phone', form.phone)
        formData.append('email', form.email)
        formData.append('address', form.address)

        if (form.id) {
            const newAddresses = addresses.map(item => {
                if (item.id !== form.id) {
                    return item
                } else {
                    return form
                }
            })

            setAddresses(newAddresses)
        } else {
            setAddressId(addresses.length + 1)
            setAddresses([
                ...addresses,
                {
                    ...form,
                    id: addresses.length + 1,
                },
            ])
        }

        setShowForm(null)
        setForm({
            country: '',
            city: '',
            address: '',
            email: '',
            phone: '',
        })
    }

    /** Show address form with existing record */
    const showEditForm = id => {
        const form = addresses.find(item => item.id == id)
        setForm(form)
        setShowForm('edit')
    }

    return (
        <section id="cart-page" className="container-fluid overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8 pe-0 pe-lg-5 products">
                        <h1>
                            {step === 3 ? `Order Review` : `Delivery Options`}
                        </h1>

                        {step === 3 && (
                            <div className="items">
                                {bagItems.map((item, index) => {
                                    return <BagItem {...item} key={item.id} module = { 'order-review' }/>
                                })}
                            </div>
                        )}

                        <div
                            className={`order-form ${
                                step === 3 ? 'pt-0 mt-0' : ' '
                            }`}>
                            {step !== 3 && (
                                <DeliveryType
                                    type={deliveryType}
                                    setType={setDeliveryType}
                                />
                            )}

                            {step === 1 &&
                                deliveryType === 'ship' &&
                                addresses.length > 0 && (
                                    <DeliveryAddressContainer
                                        data={addresses}
                                        selectedId={addressId}
                                        selectAddress={setAddressId}
                                        editForm={showEditForm}
                                        addingForm={() => {
                                            setForm({
                                                country: '',
                                                city: '',
                                                address: '',
                                                email: '',
                                                phone: '',
                                            })

                                            if (showForm === 'add') {
                                                setShowForm(null)
                                            } else {
                                                setShowForm('add')
                                            }
                                        }}
                                    />
                                )}

                            {step === 1 &&
                                deliveryType === 'ship' &&
                                showForm && (
                                    <DeliveryForm
                                        onSubmit={addAddress}
                                        data={form}
                                        onChange={inputChangeHandler}
                                        action={showForm}
                                    />
                                )}

                            {step === 1 &&
                                deliveryType === 'ship' &&
                                addresses.length > 0 && (
                                    <DeliveryShippingSpeed
                                        data={shippingSpeedData}
                                        selectedSpeedId={selectedSpeedId}
                                        selectSpeed={setSelectedSpeedId}
                                        toPayment={() => setStep(2)}
                                    />
                                )}

                            {step === 1 && deliveryType === 'pick' && (
                                <StoreContainer
                                    data={pickUpLocation}
                                    selectedId={storeId}
                                    selectLocId={setStoreId}
                                    toPayment={() => setStep(2)}
                                />
                            )}

                            {step === 2 && deliveryType === 'ship' && (
                                <ShippingDetails
                                    address={addresses.find(
                                        item => item.id === addressId,
                                    )}
                                    shippingSpeed={shippingSpeedData.find(
                                        item => item.id === selectedSpeedId,
                                    )}
                                />
                            )}

                            <div
                                className={`payment-info ${
                                    step === 3 ? 'border-0 pt-0 mt-0' : ''
                                }`}>
                                {step === 3 && (
                                    <ReviewShippingDetails
                                        data={
                                            addressId
                                                ? addresses.find(
                                                      item =>
                                                          item.id === addressId,
                                                  )
                                                : {}
                                        }
                                    />
                                )}

                                {step === 1 && (
                                    <div className="row">
                                        <h2>Payment</h2>
                                    </div>
                                )}

                                {step === 2 && (
                                    <PaymentMethods
                                        title={'Select payment method'}
                                        data={paymentMethods}
                                        selectMethod={setSelectedMethod}
                                        selectedId={selectedMethod}
                                        toPayment={() => setStep(3)}
                                    />
                                )}
                            </div>

                            {step === 3 && (
                                <ReviewPaymentDetails
                                    address={
                                        addressId
                                            ? addresses.find(
                                                  item => item.id === addressId,
                                              )
                                            : {}
                                    }
                                    paymentMethod={
                                        selectedMethod
                                            ? paymentMethods.find(
                                                  item =>
                                                      item.id ===
                                                      selectedMethod,
                                              )
                                            : {}
                                    }
                                />
                            )}

                            {step !== 3 && (
                                <div className={`review-info `}>
                                    <div className="row">
                                        <h2>Order Review</h2>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <Summary step={step} setStep={setStep} />
                </div>
            </div>
        </section>
    )
}

export default Delivery
