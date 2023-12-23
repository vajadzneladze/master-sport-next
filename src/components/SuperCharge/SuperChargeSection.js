import GymItem from './GymItem'

const SuperChargeSection = ({ title = '', description = '' , module = '' }) => {
    return (
        <section className={`container everything-you-need ${module}`}>
            <div className="row">
                <div className="titles col-12 col-md-8">
                    <h3>{title}</h3>
                    <h4>{description}</h4>
                </div>
            </div>

            <div className="row supercharge">
                <GymItem classes="col-12 col-md-6 col-lg-4 " />
                <GymItem classes="col-12 col-md-6 col-lg-4 " />
                <GymItem classes="col-12 col-md-6 col-lg-4 " />
            </div>
        </section>
    )
}

export default SuperChargeSection
