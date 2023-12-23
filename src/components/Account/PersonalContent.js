const PersonalContent = () => {
    return (
        <div className ="content personal">
            <div className ="d-flex flex-column">
                <div className ="field d-flex">
                    <div className ="icon d-flex justify-content-center">
                        <img src="/personal-icon-profile.svg" />
                    </div>

                    <div className ="d-flex flex-wrap info align-items-center">
                        <div className ="">
                            <h4 className ="prop-name">Name</h4>
                            <p className ="prop-value">George Chachua</p>
                        </div>

                        <div className ="">
                            <h4 className ="prop-name">Customer number</h4>
                            <p className ="prop-value">41353670206708</p>
                        </div>

                        <div className ="">
                            <h4 className ="prop-name">Telephone number</h4>
                            <p className ="prop-value">+49 7822 422408</p>
                        </div>
                    </div>

                    <button>Edit</button>
                </div>
                <div className ="field d-flex">
                    <div className ="icon d-flex justify-content-center">
                        <img src="/personal-message-icon.svg" />
                    </div>

                    <div className ="d-flex flex-wrap info ">
                        <div className ="">
                            <h4 className ="prop-name">Email address</h4>
                            <p className ="prop-value">George Chachua</p>
                        </div>

                        <div className ="">
                            <span>E-mail confirmed</span>
                        </div>
                    </div>

                    <button>Edit</button>
                </div>
                <div className ="field d-flex">
                    <div className ="icon d-flex justify-content-center">
                        <img src="/personal-icon-password.svg" />
                    </div>

                    <div className ="d-flex flex-wrap info align-items-center">
                        <div className ="">
                            <h4 className ="prop-name">Password</h4>
                            <p className ="prop-value">********************</p>
                        </div>
                    </div>

                    <button>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default PersonalContent
