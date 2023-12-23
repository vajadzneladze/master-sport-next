import React, { useState } from 'react'

const PerfonmanceBox = () => {
    const [isMetric, setIsMetric] = useState(true)

    return (
        <div className="box">
            <h3>Performance Plus Treadmill</h3>

            <div className="switcher">
                <div
                    className={isMetric ? 'active' : ''}
                    onClick={() => setIsMetric(true)}>
                    Metric
                </div>
                <div
                    className={!isMetric ? 'active' : ''}
                    onClick={() => setIsMetric(false)}>
                    Imperial
                </div>
            </div>

            <div className="d-flex flex-column">
                <div className="item">
                    <p>RUNNING SURFACE</p>
                    <span>157 x 61 cm</span>
                </div>

                <div className="item">
                    <p>SPEED RANGE</p>
                    <span>0.8–26 km/h</span>
                </div>

                <div className="item">
                    <p>INCLINE RANGE</p>
                    <span>0–20%</span>
                </div>
            </div>
        </div>
    )
}

export default PerfonmanceBox
