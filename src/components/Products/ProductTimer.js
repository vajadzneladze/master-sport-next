import { useEffect, useState } from 'react'

const ProductTimer = ({ endTime }) => {
    const [timeRemaining, setTimeRemaining] = useState(
        calculateTimeRemaining(endTime),
    )

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining(endTime))
        }, 1000)

        return () => clearInterval(timerInterval)
    }, [endTime]) // Include endTime as a dependency

    function calculateTimeRemaining(time) {
        const now = new Date().getTime()
        const end = new Date(time).getTime()
        const timeLeft = end - now

        if (timeLeft <= 0) {
            // Timer has expired
            return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
            (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        )
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

        return { days, hours, minutes, seconds }
    }

    return (
        <p className="text-end mb-0">
            End time
            <span>
                {timeRemaining.days}
                <sup>d</sup> &nbsp; {timeRemaining.hours} <sup>h</sup> &nbsp;
                {timeRemaining.minutes}
                <sup>m</sup>
            </span>
        </p>
    )
}

export default ProductTimer
