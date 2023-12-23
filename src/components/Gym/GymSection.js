const GymSection = () => {
    /** Video Play & Pause **/
    const playVideo = el => {
        let video = el.currentTarget.querySelector('video')
        video.play()
    }

    const pauseVideo = el => {
        let video = el.currentTarget.querySelector('video')
        video.pause()
        video.currentTime = 0
    }

    return (
        <section id="gym-equipment" className="h-100 container-fluid bg-dark">
            <div className="container">
                <h3>Innovate home GYM equipment</h3>
                <p>
                    We are taking Nordic Curl training to the next level with
                    The Nordic Pro.
                </p>

                <div className="grid-container overflow-hidden">
                    <div
                        className="grid-item grid-item-1 position-relative overflow-hidden"
                        onMouseOver={playVideo}
                        onMouseLeave={pauseVideo}>
                        <h4 className="moving-title d-none d-md-block">
                            REVERSE - REVERSE - REVERSE - REVERSE - REVERSE -
                            REVERSE - REVERSE - REVERSE - REVERSE
                        </h4>
                        <div className="info position-absolute d-flex flex-column w-100 h-100">
                            <h3>
                                <a href=""> THE REVERSE </a>
                            </h3>
                            <p className="text-center text-md-start">
                                BUILD STRENGTH WITH COMPOUND & ISOLATION
                                RESISTANCE EXERCISES
                            </p>
                        </div>
                        <video loop playsInline muted>
                            <source src="/videos/ms-1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div
                        className="grid-item grid-item-2 position-relative overflow-hidden"
                        onMouseOver={playVideo}
                        onMouseLeave={pauseVideo}>
                        <h4 className="moving-title d-none d-md-block">
                            AEROBIC - AEROBIC - AEROBIC - AEROBIC - AEROBIC -
                            AEROBIC - AEROBIC - AEROBIC - AEROBIC
                        </h4>

                        <div className="info position-absolute w-100 h-100 d-flex flex-column justify-content-end">
                            <h3>
                                <a href=""> AEROBIC </a>
                            </h3>
                            <p className="d-none d-lg-block">
                                HIGH INTENSITY WORKOUT THAT INCREASES AEROBIC &
                                ANAEROBIC CAPACITY
                            </p>
                        </div>
                        <video loop playsInline muted>
                            <source src="/videos/ms-2.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div
                        className="grid-item grid-item-3 position-relative overflow-hidden"
                        onMouseOver={playVideo}
                        onMouseLeave={pauseVideo}>
                        <h4 className="moving-title d-none d-md-block">
                            STRENGTH - STRENGTH - STRENGTH - STRENGTH - STRENGTH
                            - STRENGTH - STRENGTH - STRENGTH - STRENGTH -
                            STRENGTH
                        </h4>
                        <div className="info position-absolute w-100 h-100 d-flex flex-column justify-content-end">
                            <h3>
                                <a href=""> STRENGTH </a>
                            </h3>
                            <p className="d-none d-lg-block">
                                HIGH INTENSITY WORKOUT THAT INCREASES AEROBIC &
                                ANAEROBIC CAPACITY
                            </p>
                        </div>
                        <video loop playsInline muted>
                            <source src="/videos/ms-3.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div
                        className="grid-item grid-item-4 position-relative overflow-hidden"
                        onMouseOver={playVideo}
                        onMouseLeave={pauseVideo}>
                        <h4 className="moving-title d-none d-md-block">
                            CONDITIONING - CONDITIONING - CONDITIONING -
                            CONDITIONING - CONDITIONING - CONDITIONING -
                            CONDITIONING - CONDITIONING
                        </h4>
                        <div className="info position-absolute w-100 h-100 d-flex flex-column justify-content-end">
                            <h3>
                                <a href=""> CONDITIONING </a>
                            </h3>
                            <p className="d-none d-lg-block">
                                HIGH INTENSITY WORKOUT THAT INCREASES AEROBIC &
                                ANAEROBIC CAPACITY
                            </p>
                        </div>
                        <video loop playsInline muted>
                            <source src="/videos/ms-4.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GymSection
