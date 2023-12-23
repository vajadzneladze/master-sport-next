const PaymentMethod = ({ id, title, img, isChecked = false, selectMethod }) => {
    return (
        <div className="form-check p-0" onClick={() => selectMethod(id)}>
            <input
                className="form-check-input d-none"
                type="radio"
                name="payment"
                id={`pay-${id}`}
                defaultChecked={isChecked}
            />
            <label
                className="form-check-label custom-radio pe-0 me-0"
                htmlFor={`pay-${id}`}></label>
            <label className="form-check-label pt-0" htmlFor={`pay-${id}`}>
                {title || ''}
                {img && <img src={img} />}
            </label>
        </div>
    )
}

export default PaymentMethod
