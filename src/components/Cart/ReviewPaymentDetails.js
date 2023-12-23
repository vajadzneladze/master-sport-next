const ReviewPaymentDetails = ({ address, paymentMethod }) => {
    return (
        <div className="payment-info pb-5 pt-0">
            <h2 className="shipping-details-heading">Payment Details</h2>

            <div className="shipping d-flex justify-content-between">
                <div className="address">
                    <h3>Pay in full with</h3>
                    <ul className="ps-0 cards">
                        <li className="d-flex align-item-center">
                            <img src={paymentMethod.img || '/tbc-bank.svg'} />
                            <span>**** 1607 </span>
                        </li>
                    </ul>
                </div>
                <div className="contact">
                    <h3>Billing address</h3>
                    <p>
                        {`${address?.country || ''}  ${
                            address?.address || ''
                        }  ${address?.phone || ''}`}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ReviewPaymentDetails
