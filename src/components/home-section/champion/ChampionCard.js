import React, { useRef } from 'react'
import './champion-card.scss'

function ChampionCard(props) {
    const cardRef = useRef(null)

    const clickCard = () => {
        const img = cardRef.current.querySelector('img')
        const pos = img.getBoundingClientRect()

        const newNode = img.cloneNode(true)
        newNode.style.width = img.offsetWidth + 'px'
        newNode.style.height = img.offsetHeight + 'px'
        newNode.style.position = 'absolute'
        newNode.style.top = pos.top + 'px'
        newNode.style.left = pos.left + 'px'
        newNode.style.zIndex = '102'

        newNode.style.transition = 'all 0.7s ease'
        newNode.id = `champ-img-${props.id}`

        setTimeout(() => {
            newNode.style.width = 'auto'
            newNode.style.height = '100%'
            newNode.style.top = 0
            newNode.style.left = 0
        },)

        document.body.appendChild(newNode)

        const videoURL = 'https://www.youtube.com/embed/'+ props.item.video
        document.querySelector(`#champion-detail-${props.id} iframe`).setAttribute('src', videoURL)
        document.querySelector(`#champion-detail-${props.id} iframe`).classList.add('active')

    }
    return (
        <div className="champion-card" onClick={clickCard} ref={cardRef}>
            <div className="frame">
                <div className="bg-image bg overlay" style={{ backgroundImage: `url(${props.item.bg})` }}></div>
            </div>
            <img src={props.item.img} alt="Champion Image" />
            <div className="name">{props.item.name}</div>
        </div>
    )
}

export default ChampionCard
