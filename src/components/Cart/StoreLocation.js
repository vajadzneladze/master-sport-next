const StoreLocation = ({ id,  title, isActive = false, selectLoc }) => {
    return (
        <div className={`speed ${isActive ? 'active' : ''}`} onClick={() =>selectLoc(id) }>
            <h3>{title}</h3>
        </div>
    )
}

export default StoreLocation
