import { useState } from 'react'

const Forgot = () => {
    const [form, setForm] = useState({
        email: '',
    })

    const onChangeHandler = e => {
        e.preventDefault()

        setForm(prevData => {
            return {
                ...prevData,
                [e.target.name]: e.target.value,
            }
        })
    }

    const submitHandler = event => {
        event.preventDefault()

        let formData = new FormData()
        formData.append('email', form.email)

        // send request
    }

    return (
        <div className="modal-body forgot">
            <h2>Forgot Password</h2>
            <p>
                Enter your email address and we will send you a code to reset
                your password
            </p>

            <form onSubmit={submitHandler}>
                <div className="">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Info@gmail.com"
                        value={form.email}
                        required
                        onChange={e => {
                            onChangeHandler(e)
                        }}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Send
                </button>
            </form>
        </div>
    )
}

export default Forgot
