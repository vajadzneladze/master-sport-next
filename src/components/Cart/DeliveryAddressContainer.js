import DeliverySingleAddress from './DeliverySingleAddress'

const DeliveryAddressContainer = ({
    data,
    selectedId,
    selectAddress,
    editForm,
    addingForm,
}) => {
    return (
        <div className="addresses ">
            {data.map((item, index) => {
                return (
                    <DeliverySingleAddress
                        data={item}
                        key={index}
                        isSelected={item.id === selectedId}
                        selectAddress={selectAddress}
                        editForm={editForm}
                    />
                )
            })}

            <span
                className="add-new"
                onClick={() => {
                    addingForm()
                }}>
                {' '}
                Add New Address{' '}
            </span>
        </div>
    )
}

export default DeliveryAddressContainer
