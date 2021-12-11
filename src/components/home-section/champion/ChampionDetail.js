import React, { useEffect, useRef } from 'react'
import { closeIcon } from '../../../assets/images'
import './champion-detail.scss'

function ChampionDetail(props) {

    const iframeRef = useRef(null)
    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px'
        iframeRef.current.setAttribute('height', height)
    }, [])

    const closeHandler = () => {
        document.querySelector(`#champion-detail-${props.id}`).classList.remove('active')
        iframeRef.current.setAttribute('src', '')

        const img = document.querySelector(`#champ-img-${props.id}`)
        img.style.opacity = 0
        setTimeout(() => {
            img.remove()
        },500)
    }
    const item = props.item

    return (
        <div
            id={`champion-detail-${props.id}`}
            className={`champion-detail bg-image overlay ${props.active ? 'active': ''}`}
            style={{backgroundImage: `url(${item.bgLarge})`}}
        >
            <div className="champion-detail__content">
                <span>{item.nickName}</span>
                <h2 className="name main-color">{item.name}</h2>
                <span>Chức năng: <span className="second-color">{item.role}</span></span>
                <span>Độ khó: <span className="second-color">{item.difficulty}</span></span>
                <div className="story">
                    {item.description}
                </div>
                <span className="spotlight">Champion spotlight</span>

                <div className="video">
                    <iframe 
                        title="Champion spotlight" 
                        src="" 
                        ref={iframeRef}
                        width="100%"
                    ></iframe>
                </div>
            </div> 
            <div className="champion-detail__close" onClick={closeHandler}>
                <img src={closeIcon} alt="Close Icon" />    
            </div>       
        </div>
    )
}

export default ChampionDetail
