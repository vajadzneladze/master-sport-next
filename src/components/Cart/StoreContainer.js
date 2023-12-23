import StoreLocation from './StoreLocation'

const StoreContainer = ({ data, selectedId, selectLocId, toPayment }) => {
    return (
        <div className="pick-up   shipping-speed position-relative overflow-hidden">
            <h2>Select a store location</h2>

            {data.map((item, index) => {
                return (
                    <StoreLocation
                        id={item.id}
                        key={index}
                        title={item.title}
                        isActive={selectedId === item.id}
                        selectLoc={selectLocId}
                    />
                )
            })}

            <button onClick={toPayment}>Continue To Payment</button>
        </div>
    )
}

export default StoreContainer
