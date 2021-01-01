import React from 'react'
import './Progress.js.css'

export const Progress = () => {
    const [ width, setWidth ] = React.useState(0)

    return (
        <div className="progress-container">
            <Bar>
                <Filler width={width} />
            </Bar>
        </div>
    )
}

function Bar({ children }) {
    return (
        <div className="progress-bar">
            {children}
        </div>
    )
}

function Filler ({ width }) {
    return <div className="progress-filler" style={{ width: `${width}%` }} />
}
