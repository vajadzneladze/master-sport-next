import Link from 'next/link'

const GymItem = ({ classes = '' }) => {
    return (
        <div className={classes + ` h-40 item`}>
            <div className="top position-relative d-flex justify-content-center align-items-center">
                <img src="/sup-1.png" />
                <div className="overlay">
                    <Link href = '/training/view/1'> </Link>
                </div>
                <h3 className="position-relative">
                    Leg <span> Press </span>
                </h3>
            </div>
            <div className="bottom">
                <h3>
                    <Link href="/training/view/1"> Leg Press </Link>
                </h3>
                <p>
                    HIGH INTENSITY WORKOUT THAT INCREASES AEROBIC & ANAEROBIC
                    CAPACITY
                </p>
            </div>
        </div>
    )
}

export default GymItem
