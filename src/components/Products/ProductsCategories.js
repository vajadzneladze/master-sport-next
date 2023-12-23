const ProductsCategories = ({ data, filtered, setFiltered }) => {
    const onChangeHandler = e => {
        const id = e.target.id
        let newArray = []

        if (!filtered.includes(id)) {
            newArray = [...filtered, id]
        } else {
            const filteredArray = filtered.filter(item => item !== id)
            newArray = [...filteredArray]
        }

        setFiltered(newArray)
    }

    return (
        <div className="position-relative">
            {data.map((item, index) => {
                return (
                    <div className="filter-cat" key={index}>
                        <h3>{item.title}</h3>
                        <form action="" method="get">
                            {item.cats.map((navItem, i) => {
                                const id = `filter-${index}-${i}`

                                return (
                                    <div
                                        className="filter-item d-flex align-items-center"
                                        key={id}>
                                        <input
                                            type="checkbox"
                                            className="form-check-input d-none"
                                            id={id}
                                            name={id}
                                            checked={
                                                filtered.includes(id) &&
                                                'checked'
                                            }
                                            onChange={onChangeHandler}
                                        />

                                        <label
                                            className={`form-check-label custom-checkbox `}
                                            htmlFor={id}></label>

                                        <label
                                            className={`form-check-label  ${
                                                filtered.includes(id) &&
                                                'checked'
                                            }`}
                                            htmlFor={id}>
                                            {navItem}
                                        </label>
                                    </div>
                                )
                            })}
                        </form>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductsCategories
