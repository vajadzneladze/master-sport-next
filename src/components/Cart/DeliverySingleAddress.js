const DeliverySingleAddress = ({
    data,
    isSelected = false,
    selectAddress,
    editForm,
}) => {
    return (
        <div
            className={`single-address position-relative d-flex justify-content-between ${
                isSelected ? 'active' : ''
            }`}
            onClick={() => selectAddress(data.id)}>
            <address>
                {` ${data?.country}    ${data?.address}  ${data?.email}  ${data?.phone} `}
            </address>

            <span className="edit" onClick={() => editForm(data.id)}>
                Edit
            </span>
        </div>
    )
}

export default DeliverySingleAddress
