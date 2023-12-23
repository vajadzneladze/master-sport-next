const DeliverySpeedItem = ({
    id,
    title = '',
    description = '',
    selectHandler,
    selectedId,
}) => {
    return (
        <div
            className={`speed ${id === selectedId ? 'active' : ''}`}
            onClick={() => selectHandler(id)}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    ) 
}

export default DeliverySpeedItem
