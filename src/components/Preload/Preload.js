import { useEffect, useState } from 'react'

const Preload = ({ isLoaded }) => {
    const [num, setNum] = useState(33)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNum(prev => prev < 99 && prev + 1)
        }, 50)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div
            id="loading-screen"
            className={`loading-animation${isLoaded ? '-end' : ''}`}>
            <div className="loading-screen-bg"></div>

            <div className="row loading-titles">
                <div className="col-4 bg-success"></div>
                <div className="col-4">
                    <img src="/loading/logo.png" alt="logo" />
                    <p>FEEL GOOD , PERFORM BETTER</p>
                </div>
                <div className="col-4 bg-success"></div>
            </div>

            <div className="row loading-percentage">
                <div className="col-12">{num}%</div>
            </div>
        </div>
    )
}

export default Preload
