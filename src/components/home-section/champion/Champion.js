import React from 'react'
import HomeSection from '../HomeSection'
import { bg2 } from '../../../assets/images'
import './champion.scss'

function Champion(props) {
    return (
        <HomeSection
            className={`welcome ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay"
            bgImage={bg2}
        >
        </HomeSection>
    )
}

export default Champion
