import Link from 'next/link'
import { useState } from 'react'

const Register = ({ showModalHandler }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const [form, setForm] = useState({
        name,
        email: '',
        phone: '',
        password: '',
        confirm: '',
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
        formData.append('password', form.password)
        formData.append('confirm', form.confirm)
        formData.append('phone', form.phone)
        formData.append('name', form.name)

        // send request
    }

    return (
        <div className="modal-body registration">
            <h2>Registration</h2>
            <p>Hi welcome back, you’ve been missed</p>

            <form onSubmit={submitHandler}>
                <div className="">
                    <label htmlFor="name" className="form-label">
                        Full Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={form.name}
                        placeholder="Enter full name"
                        onChange={e => {
                            onChangeHandler(e)
                        }}
                    />
                </div>
                <div className="">
                    <label htmlFor="phone" className="form-label">
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        className="form-control"
                        aria-describedby="phoneHelp"
                        placeholder="Enter phone number"
                        onChange={e => {
                            onChangeHandler(e)
                        }}
                    />
                </div>
                <div className="">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Info@gmail.com"
                        onChange={e => {
                            onChangeHandler(e)
                        }}
                    />
                </div>
                <div className="position-relative">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>

                    <img
                        src={showPassword ? '/show.svg' : '/hide.svg'}
                        onClick={() => setShowPassword(prev => !prev)}
                        className="position-absolute"
                    />
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="**********"
                        value={form.password}
                        required
                        onChange={e => {
                            onChangeHandler(e)
                        }}
                    />
                </div>
                <div className="position-relative">
                    <label htmlFor="confirm" className="form-label">
                        Password
                    </label>

                    <img
                        src={showConfirmPassword ? '/show.svg' : '/hide.svg'}
                        onClick={() => setShowConfirmPassword(prev => !prev)}
                        className="position-absolute"
                    />
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="confirm"
                        name="confirm"
                        className="form-control"
                        placeholder="**********"
                        value={form.confirm}
                        required
                        onChange={e => {
                            onChangeHandler(e)
                        }}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Registration
                </button>
            </form>

            <span>
                Already have an account?
                <Link href="" onClick={e => showModalHandler(e, 'login')}>
                    Sign in
                </Link>
            </span>
        </div>
    )
}

export default Register
