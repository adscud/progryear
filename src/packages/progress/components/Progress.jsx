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
            <Bar>
                <Filler width={percentage} />
            </Bar>
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

function Bar ({ children }) {
    return (
        <div className="progress-bar">
            {children}
        </div>
    )
}

function Filler ({ width }) {
    return <div className="progress-filler" style={{ width: `${width}%` }} />
}
