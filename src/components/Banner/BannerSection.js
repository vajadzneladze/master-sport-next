import Link from 'next/link'

const BannerSection = () => {
    return (
        <section
            id="slide-banner"
            className ="container-fluid d-flex align-items-center">
            <div className ="container content">
                <h2>FEEL GOOD, PERFORM BETTER</h2>

                <p>
                    Train hard & look damn good while you do it in new Adapt
                    Camo
                </p>

                <button>
                    <Link href="">Shop now</Link>
                </button>
            </div>
        </section>
    )
}

export default BannerSection
