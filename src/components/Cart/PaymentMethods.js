import PaymentMethod from './PaymentMethod'

const PaymentMethods = ({
    data,
    title,
    selectMethod,
    selectedId,
    toPayment,
}) => {
    return (
        <div className="">
            <h3>{title}</h3>

            <form className="payment-methods">
                {data.map((item, index) => {
                    return (
                        <PaymentMethod
                            key = {item.id}
                            {...item}
                            isChecked={selectedId === item.id}
                            selectMethod={selectMethod}
                        />
                    )
                })}

                <span className="divider"></span>

                <button type="button" onClick={toPayment}>
                    Continue To Payment
                </button>
            </form>
        </div>
    )
}

export default PaymentMethods
