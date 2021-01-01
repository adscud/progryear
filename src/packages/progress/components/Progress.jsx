import React from 'react'
import './Progress.js.css'

export const Progress = () => {
    const [ width, setWidth ] = React.useState(0)

    return (
        <div className="progress-container">
            <Title />
            <Bar>
                <Filler width={width} />
            </Bar>
        </div>
    )
}

function Title () {
    return (
        <h2 className="progress-title">Be brave, the year is almost done 👀</h2>
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
