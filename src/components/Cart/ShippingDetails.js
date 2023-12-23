const ShippingDetails = ({ address, shippingSpeed }) => {
    return (
        <div className="shipping-details">
            <div className="">
                <h3>Shipping Address</h3>
                <address>
                    {`${address?.country  || ''}  ${address?.city || ''} ${address?.address || ' '} ${address?.phone || ''} `}
                </address>
            </div>

            <div className="">
                <h3>Shipping Speed</h3>
                <p>{` ${shippingSpeed?.title}   ${shippingSpeed?.description}`}</p>
            </div>
        </div>
    )
}

export default ShippingDetails
