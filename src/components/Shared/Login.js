import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Login = ({ showModalHandler }) => {
    
    const { locale } = useRouter()

    const [showPassword, setShowPassword] = useState(false)

    const [form, setForm] = useState({
        email: '',
        password: '',
        remember: false,
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
        formData.append('password', form.email)

        // send request
    }

    return (
        <div className="modal-body login">
            <h2>Sing in</h2>
            <p>Hi welcome back, you’ve been missed</p>

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
                <div className="mb-1 position-relative">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>

                    <img src={showPassword ? '/show.svg': '/hide.svg'} onClick  = { () => setShowPassword(prev => !prev) }  className = 'position-absolute'/>
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
                <div className="form-check d-flex justify-content-between align-items-center ps-0">
                    <div className="d-flex align-items-center gap-2 ">
                        <input
                            type="checkbox"
                            className="form-check-input d-none"
                            id="check"
                            name="remember"
                            onChange={e => {
                                onChangeHandler(e)
                            }}
                        />

                        <label
                            className="form-check-label custom-checkbox pe-0 me-0"
                            htmlFor="check"></label>

                        <label className="form-check-label" htmlFor="check">
                            Remember me
                        </label>
                    </div>

                    <div className="forgot">
                        <Link
                            href=""
                            className="txt forgot-btn"
                            onClick={e => showModalHandler(e, 'forgot')}>
                            Forgot Password?
                        </Link>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>

            <h4>Or Sign In With</h4>

            <div className="socials d-flex justify-content-around align-items-center">
                <div className="item">
                    <Link href="">
                        <img src="/socials/google.svg" alt="google" />
                    </Link>
                </div>

                <div className="item">
                    <Link href="">
                        <img src="/socials/apple.svg" alt="apple" />
                    </Link>
                </div>

                <div className="item">
                    <Link href="">
                        <img src="/socials/facebook.svg" alt="facebook" />
                    </Link>
                </div>
            </div>

            <span>
                Not a member?
                <Link
                    href=""
                    onClick={e => showModalHandler(e, 'registration')}>
                    Register now
                </Link>
            </span>
        </div>
    )
}

export default Login
