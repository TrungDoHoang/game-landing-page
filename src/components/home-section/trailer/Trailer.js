import React, { useEffect, useRef } from 'react'
import {bg3, trailerImg} from '../../../assets/images'
import HomeSection from '../HomeSection'
import './trailer.scss'

function Trailer(props) {
    const iframeRef = useRef(null)
    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px'
        iframeRef.current.setAttribute('height', height)
    }, [])

    return (
        <HomeSection
            className={`trailer ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay trailer__content"
            bgImage={bg3}
        >
            <div className="trailer__content__img">
                <img src={trailerImg} alt="Trailer Image" />
            </div>
            <div className="trailer__content__info">
                <div className="title">
                    <span>Tham gia cùng với</span>
                    <h2 className="main-color">Bạn bè</h2>
                </div>
                <div className="video">
                    <iframe 
                        ref={iframeRef}
                        width={'100%'}
                        title="Trailer"
                        src="https://www.youtube.com/embed/TFzkbos0oeo" 
                    ></iframe>
                </div>
            </div>
        </HomeSection>
    )
}

export default Trailer
