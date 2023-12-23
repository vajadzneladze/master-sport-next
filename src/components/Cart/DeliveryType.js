const DeliveryType = ({ type, setType }) => {
    return (
        <div className="order-type">
            <div className="row">
                <div className="col-6" onClick={() => setType('ship')}>
                    <div className={type === 'ship' ? 'active' : ''}>
                        <img src="/shipping.svg" /> Ship
                    </div>
                </div>

                <div className="col-6" onClick={() => setType('pick')}>
                    <div className={type !== 'ship' ? 'active' : ''}>
                        <img src="/location-dark.svg" /> Pick Up
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryType
