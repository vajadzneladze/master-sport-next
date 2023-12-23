import useTranslation from 'next-translate/useTranslation'

const DeliveryForm = ({ data, onSubmit, onChange }) => {
    const { t } = useTranslation('common')

    return (
        <div className="address-info d-block">
            <div className="row">
                <div className="col-12 col-md-6">
                    <input
                        type="text"
                        name="country"
                        onChange={e => {
                            onChange(e)
                        }}
                        placeholder={t('country')}
                        value={data?.country}
                        className="form-control"
                        required
                    />
                </div>

                <div className="col-12 col-md-6">
                    <input
                        type="text"
                        name="city"
                        onChange={e => {
                            onChange(e)
                        }}
                        placeholder={t('city')}
                        value={data?.city}
                        className="form-control"
                        required
                    />
                </div>

                <div className="col-12 col-md-12">
                    <input
                        type="text"
                        name="address"
                        onChange={e => {
                            onChange(e)
                        }}
                        placeholder={t('address')}
                        value={data?.address}
                        className="form-control"
                        required
                    />
                </div>

                <div className="col-12 col-md-6">
                    <input
                        type="email"
                        name="email"
                        onChange={e => {
                            onChange(e)
                        }}
                        placeholder={t('email')}
                        value={data?.email}
                        className="form-control"
                        required
                    />
                </div>

                <div className="col-12 col-md-6">
                    <input
                        type="tel"
                        name="phone"
                        onChange={e => {
                            onChange(e)
                        }}
                        placeholder={t('phone')}
                        value={data?.phone}
                        className="form-control"
                        required
                    />
                </div>

                <div className="col-12 col-md-6 offset-0 offset-md-6">
                    <button onClick={onSubmit}>Save and Continue</button>
                </div>
            </div>
        </div>
    )
}

export default DeliveryForm
