const BagItem = ({
    id,
    title,
    description,
    imgUrl,
    price,
    newPrice,
    isSale,
    isNew,
    quantity = 1,
    deleteHandler,
    setCountHandler,
    module = '',
}) => {
    const badgeClass = isSale && newPrice ? 'sale' : isNew ? 'new' : ''


    return (
        <div className="item d-flex">
            <div className="img">
                <img
                    src={
                        imgUrl && imgUrl.length > 0
                            ? imgUrl[0]
                            : '/product-1.png'
                    }
                />
            </div>

            <div className="info">
                <div className="top d-flex flex-column flex-lg-row justify-content-md-between">
                    <h3 className="order-2 order-lg-1">{title}</h3>
                    <p className={`price order-1 order-lg-2 ${badgeClass}`}>
                        ${isSale && newPrice ? newPrice : price}
                        <del> {isSale && newPrice ? '$' + price : ''}</del>
                    </p>
                </div>
                <p>{description}</p>

                <div className="bottom d-flex justify-content-between">
                    <div className="count d-flex  flex-row flex-lg-column  ">
                        <h4>Quantity</h4>
                        <form>
                            <select
                                className="form-select count-select"
                                value={quantity}
                                onChange={e =>
                                    setCountHandler(id, e.target.value)
                                }>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </form>
                    </div>

                    {module !== 'order-review' && (
                        <button
                            className="d-flex"
                            onClick={() => deleteHandler(id)}>
                            <p className="d-none d-lg-block">delete</p>
                            <img
                                className="d-block d-lg-none"
                                src="/trash-mobile.svg"
                            />
                            <img
                                className="d-none d-lg-block"
                                src="/trash.svg"
                            />
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BagItem
