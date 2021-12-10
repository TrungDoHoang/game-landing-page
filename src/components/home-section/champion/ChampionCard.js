import React from 'react'
import './champion-card.scss'

function ChampionCard(props) {
    return (
        <div className="champion-card">
            <div className="frame">
                <div className="bg-image bg overlay" style={{backgroundImage: `url(${props.item.bg})`}}></div>
            </div>
            <img src={props.item.img} alt="Champion Image" />
            <div className="name">{props.item.name}</div>
        </div>
    )
}

export default ChampionCard
