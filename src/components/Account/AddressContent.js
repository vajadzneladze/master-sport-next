const AddressContent = () => {
    return (
        <div className ="content address">
            <div className ="row">
                <div className ="col-12 col-sm-6 col-md-4 col-xl-3 overflow-hidden">
                    <div className ="add d-flex flex-column justify-content-center align-items-center">
                        <img
                            src="/address-plus.svg"
                            alt="add"
                            className ="plus"
                        />
                        <h3 className ="text-center">Add Address</h3>
                    </div>
                </div>

                <div className ="col-12 col-sm-6 col-md-4 col-xl-3 overflow-hidden">
                    <div className ="address-details">
                        <h5>Residential address</h5>
                        <h3>George Chachua</h3>
                        <p>
                            87 Nonie Ln Deatsville AL 36022-5355
                            georg.chachua@gmail.com (788) 732-7832
                        </p>

                        <div className ="actions d-flex justify-content-between">
                            <img src="/delete.svg" />

                            <a href=""> Edit </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressContent
