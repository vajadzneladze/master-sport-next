import { Wrapper, Status } from '@googlemaps/react-wrapper'
import Map from '../../components/Map'
import Marker from '../../components/Marker'
import useTranslation from 'next-translate/useTranslation'


import { useState } from 'react'

const Contact = () => {
    const { t } = useTranslation('common')

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        contact_message: '',
    })

    const changeData = e => {
        e.preventDefault()
        setForm(prevData => {
            return {
                ...prevData,
                [e.target.name]: e.target.value,
            }
        })
    }

    const sendMessage = async e => {
        e.preventDefault()

        let formData = new FormData()
        formData.append('name', form.name)
        formData.append('phone', form.phone)
        formData.append('email', form.email)
        formData.append('contact_message', form.contact_message)
        
    }
    return (
        <section className="container-fluid" id="contact">
            <div className="container form-layer">
                <div className="contact-form">
                    <h2>Contact Form</h2>
                    <p>Here you can send your info us</p>

                    <form onSubmit={sendMessage}>
                        <div className="input-group">
                            <input
                                name="name"
                                onChange={e => {
                                    changeData(e)
                                }}
                                placeholder={t('saxeli')}
                                value={form.name}
                                className="form-control"
                                id="name"
                                required
                            />
                        </div>

                        <div className="input-group">
                            <input
                                name="email"
                                onChange={e => {
                                    changeData(e)
                                }}
                                placeholder={t('email')}
                                value={form.email}
                                className="form-control"
                                id="email"
                                required
                            />
                        </div>

                        <div className="input-group">
                            <input
                                name="phone"
                                onChange={e => {
                                    changeData(e)
                                }}
                                placeholder={t('phone')}
                                value={form.phone}
                                className="form-control"
                                id="phone"
                                required
                            />
                        </div>

                        <div className="input-group">
                            <textarea
                                name="contact_message"
                                onChange={e => {
                                    changeData(e)
                                }}
                                value={form.contact_message}
                                className="form-control"
                                placeholder={t('shetyobineba')}
                                id="message"
                                required></textarea>
                        </div>

                        <button className="sendBtn" type="submit">
                            {t('gagzavna')}
                        </button>
                    </form>
                </div>
            </div>

            <div id="map"></div>
        </section>
    )
}

export default Contact
