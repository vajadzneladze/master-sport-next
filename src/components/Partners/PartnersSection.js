import React from 'react'
import Partner from './Partner'

const PartnersSection = ({ module = ''  , classes = ''}) => {
    return (
        <section id="partners" className={`container-fluid ${module}  ${classes}`}>
            <div className="d-flex wrapper">
                <Partner img={'/p-1.svg'} url={''} />
                <Partner img={'/p-2.svg'} url={''} />
                <Partner img={'/p-3.svg'} url={''} />
                <Partner img={'/p-4.svg'} url={''} />
                <Partner img={'/p-5.svg'} url={''} />
                <Partner img={'/p-6.svg'} url={''} />
            </div>
        </section>
    )
}

export default PartnersSection
