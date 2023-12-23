const ReviewShippingDetails = ({ data }) => {
    const maskEmail = email => {
        const atIndex = email.indexOf('@')

        if (atIndex > 1) {
            // Replace characters from the second character until '@' with '*'
            const maskedEmail =
                email.substring(0, 2) +
                '*'.repeat(atIndex - 2) +
                email.substring(atIndex)
            return maskedEmail
        } else {
            return email // Not enough characters to mask
        }
    }

    const maskPhoneNumber = phoneNumber => {
        const visibleDigits = 2

        if (phoneNumber.length >= visibleDigits) {
            // Extract the last two digits of the phone number
            const lastTwoDigits = phoneNumber.slice(-visibleDigits)

            // Mask the rest of the phone number with '*'
            const maskedPhoneNumber =
                '*'.repeat(phoneNumber.length - visibleDigits) + lastTwoDigits

            return maskedPhoneNumber
        } else {
            return phoneNumber // Not enough digits to mask
        }
    }

    return (
        <>
            <h2 className="shipping-details-heading">Shipping Details</h2>

            <div className="shipping d-flex justify-content-between">
                <div className="address">
                    <h3>Delivers To</h3>
                    <p>
                        {` ${data?.country || ''}  ${data?.address || ''} ${
                            data?.phone || ''
                        } `}
                    </p>
                </div>
                <div className="contact">
                    <h3>Contact Information</h3>
                    <p>
                        {`
                            ${data?.email ? maskEmail(data.email) : ''} 
                                   
                               
                            ${
                                data?.phone
                                    ? `     + 995 ` +
                                      maskPhoneNumber(data.phone)
                                    : ''
                            }
                            `}
                    </p>
                </div>
            </div>
        </>
    )
}

export default ReviewShippingDetails
