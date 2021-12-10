import React from 'react'
import './button.scss'

function Button(props) {
    return (
        <button className={`btn ${props.className}`}>
            {props.children}
        </button>
    )
}

export default Button
