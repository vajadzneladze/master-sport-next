import Partner from '@/components/Partners/Partner'
import PartnersSection from '@/components/Partners/PartnersSection'
import QuestionsSection from '@/components/Questions/QuestionsSection'

const About = () => {
    return (
        <>
            <section id="home" className="about">
                <div className="content position-absolute container">
                    <h2 className="mx-auto text-center">About Us</h2>
                </div>

                <img
                    src="/about-bg.svg"
                    className="home-bg"
                    alt="about-page-bg"
                />
            </section>

            <section id="partners" className=" container-fluid partners-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-none d-md-block  col-md-3 position-relative z-3">
                            <p>
                                85,000 companies have already built apps with
                                Glide.
                            </p>
                            <div className="coverage"></div>
                        </div>

                        <div className="col-12 col-md-9">
                            <PartnersSection classes="border-bottom-0 py-0" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="some-info" className="container">
                <div className="row">
                    <h2 className="col-12 col-md-6">
                        ONE BRAND. EVERYTHING FITNESS.
                    </h2>
                    <p className="col-12 col-md-7">
                        Shaping a seamless future where every parcel's journey
                        from click to customer is fast and effortless.​
                    </p>
                </div>

                <div className="row align-items-stretch">
                    <div className="col-12 col-md-4">
                        <h3>Company Structure​</h3>
                        <p>
                            We target evolving sectors where there is structural
                            demand, but there are barriers to large scale
                            investment that restrict supply.
                            <br />
                            <br />
                            We have a preference for real estate which is
                            affordable to the broadest possible range of
                            end-users. <br />
                            <br />
                            To date we have focused on the living and healthcare
                            sectors, but we have the expertise to invest
                            wherever we see the right long-term fundamentals.
                        </p>
                    </div>

                    <div className="col-12 col-md-4">
                        <h3>Values​</h3>
                        <p>
                            Our investments are designed to unlock the growth
                            potential of our investee businesses. <br />
                            <br />
                            The Matter team embrace the operational side of real
                            estate investing and we support our investee
                            businesses with the experience and infrastructure
                            required to grow. <br />
                            <br />
                            We also foster collaboration between investee
                            businesses where together they can offer a stronger
                            proposition to their end-users and other
                            stakeholders.
                        </p>
                    </div>

                    <div className="col-12 col-md-4">
                        <h3>Vision & Mission​</h3>
                        <p>
                            Matter is committed to investing in real estate
                            which meets social or societal needs, to reducing
                            our environmental impact and to operating with good
                            governance.
                            <br />
                            <br />
                            We do this because we believe that it leads to
                            better outcomes for all stakeholders.
                            <br />
                            <br />
                            Matter is a signatory to the UN Principles for
                            Responsible Investment.
                        </p>
                    </div>
                </div>
            </section>

            <section id="posters" className="container-fluid p-0">
                <div className="grid-container">
                    <div className="grid-item grid-item-1">
                        <img src="/about-poster-1.svg" />
                    </div>
                    <div className="grid-item grid-item-2 position-relative">
                        <div className="position-absolute w-100 h-100 d-flex">
                            <div className="info">
                                <h3>Virtual Active</h3>
                                <p className="d-none d-md-block">
                                    Virtual Active transports users to 60 exotic
                                    locales with footage that matches their pace
                                    and resistance or incline that varies to
                                    match terrain.
                                </p>
                            </div>
                        </div>
                        <img src="/about-poster-2.svg" />
                    </div>
                    <div className="grid-item grid-item-3 position-relative">
                        <div className="position-absolute w-100 h-100 d-flex">
                            <div className="info">
                                <h3>Sprint 8</h3>
                                <p className="d-none d-md-block">
                                    An immersive version of our exclusive Sprint
                                    8 sprint-intensity program stimulates
                                    natural human growth hormone to burn more
                                    fat and build lean muscle in short 20-minute
                                    workouts.
                                </p>
                            </div>
                        </div>
                        <img src="/about-poster-3.svg" />
                    </div>
                    <div className="grid-item grid-item-4 position-relative">
                        <div className="position-absolute w-100 h-100 d-flex justify-content-end align-items-center">
                            <div className="info">
                                <h3>Wireless Charging</h3>
                                <p>
                                    Wireless charging allows members to charge
                                    their personal devices while keeping their
                                    screens in view.
                                </p>
                            </div>
                        </div>
                        <img src="/about-poster-4.svg" />
                    </div>
                </div>
            </section>

            <QuestionsSection
                title="Any Questions?"
                description=" Frequently asked questions"
            />
        </>
    )
}

export default About
