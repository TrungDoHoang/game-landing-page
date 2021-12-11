import React, { useEffect, useRef } from 'react'
import { bgVideo } from '../../../assets/videos'
import Button from '../../button/Button'
import './credit.scss'

function Credit(props) {
    const videoRef = useRef(null)
    useEffect(() => {
        videoRef.current.play()
        const pauseVideo = () => {
            if (!document.hidden) {
                videoRef.current.play()
            } else {
                videoRef.current.pause()
            }
            document.addEventListener('webkitvisibilitychange', pauseVideo)

            return () => {
                document.removeEventListener('webkitvisibilitychange', pauseVideo)
            }
        }
    }, [])
    return (
        <div className={`credit overlay ${props.isActive ? 'active' : ''}`}>
            <video
                ref={videoRef}
                width="100%"
                height="auto"
                loop
                className="overlay"
                muted
            >
                <source src={bgVideo} type="video/mp4"/>
            </video>
            <div className="credit__content">
                <div className="title">
                    <span>Bắt đầu trở thành</span>
                    <h2 className="main-color mt-4">
                        HUYỀN THOẠI
                    </h2>
                </div>
                <div className="btns mt-4">
                    <Button className="btn-main">CHƠI NGAY</Button>
                    <Button className="btn-second">BẮT ĐẦU</Button>
                </div>
            </div>
        </div>
    )
}

export default Credit
