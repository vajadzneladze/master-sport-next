const CartItem = ({ data, deleteItem }) => {
    const {
        id,
        title,
        description,
        isSale,
        isNew,
        price,
        newPrice,
    } = data

    const badgeClass = isSale && newPrice ? 'sale' : isNew ? 'new' : ''
    
    

    return (
        <div className="item">
            <div className="block">
                <div className="img">
                    <img src="/cart-1.svg" />
                </div>

                <div className="info">
                    <h3>{title || ''}</h3>
                    <p>{description || ''}</p>

                    <h3>Consoles</h3>
                    <p>TOUCH XL</p>
                </div>
            </div>

            <div className={`price ${badgeClass}`}>
                <button onClick={() => deleteItem(id)}>Remove</button>

                <p className="mb-0">
                    ${isSale && newPrice ? newPrice : price}
                    <del>{isSale && newPrice ? '$' + price : ''}</del>
                </p>
            </div>
        </div>
    )
}

export default CartItem
