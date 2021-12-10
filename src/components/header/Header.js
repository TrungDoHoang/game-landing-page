import React from 'react'
import { logo } from '../../assets/images'
import './header.scss'
function Header() {
    return (
        <div className="header">
            <div className="header__inner container">
                <div className="header__logo">
                    <img src={logo} alt="App logo" />
                </div>
                <ul className="header__nav">
                    <li><a href="#">Giới thiệu</a></li>
                    <li><a href="#">Tin tức</a></li>
                    <li><a href="#">Tướng</a></li>
                    <li><a href="#">Hỗ trợ</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
