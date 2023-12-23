import DeliverySpeedItem from './DeliverySpeedItem'

const DeliveryShippingSpeed = ({
    data,
    selectSpeed,
    selectedSpeedId,
    toPayment,
}) => {
    return (
        <div className="shipping-speed  position-relative overflow-hidden">
            <h2>Select your shipping speed</h2>

            {data.map((item, index) => {
                return (
                    <DeliverySpeedItem
                        key={index}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        selectHandler={selectSpeed}
                        selectedId={selectedSpeedId}
                    />
                )
            })}

            <button onClick={toPayment}>Continue To Payment</button>
        </div>
    )
}

export default DeliveryShippingSpeed
