import { useEffect } from 'react'
import Login from './Login'
import Register from './Register'
import Forgot from './Forgot'

const FormModal = ({ type, showModal }) => {
    useEffect(() => {
        window.addEventListener('click', closeModalHandler)

        return () => {
            window.removeEventListener('click', closeModalHandler)
        }
    }, [])

    const closeModalHandler = e => {
        const content = document.querySelector('#auth-modal')

        if (content === e.target) {
            showModal(null)
        }
    }

    const showModalHandler = (e, str) => {
        e.preventDefault()
        showModal(str)
    }

    return (
        <div
            className={`modal  w-100  ${type && 'show'}`}
            id="auth-modal"
            tabIndex="-1"
            aria-labelledby="auth-modal"
            aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    {type === 'login' && <Login showModalHandler={showModalHandler} />}

                    {type === 'registration' && (
                        <Register showModalHandler={showModalHandler} />
                    )}

                    {type === 'forgot' && <Forgot />}
                </div>
            </div>
        </div>
    )
}

export default FormModal
