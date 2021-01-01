import React from 'react'
import { convertTimeToPercentage } from "../utils"
import './Progress.js.css'

export const Progress = () => {
    const [ percentage, setPercentage ] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setPercentage(convertTimeToPercentage())
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="progress-container">
            <Title width={percentage} />
            <Bar percentage={percentage} />
        </div>
    )
}

function Title ({ width }) {
    return (
        <div className="progress-title-counter">
            <h2 className="progress-title">Be brave, the year is almost done 👀</h2>
            <p className="progress-counter"> {width}% </p>
        </div>
    )
}

function Bar ({ percentage }) {
    const [ date ] = React.useState(new Date())
    const [ empty ] = React.useState(percentage - 100)
    return (
        <>
            <div className="progress-bar" style={{
                background: `linear-gradient(90deg, #FFFFFF ${percentage}%, #101010 ${empty}%)`
            }}/>
            <p className="progress-bar-subtitle">We spent {percentage}% of {date.getUTCFullYear()}</p>
        </>
    )
}
