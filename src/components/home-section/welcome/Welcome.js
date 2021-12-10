import hoverEffect from 'hover-effect'
import React, { useEffect } from 'react'
import {
    bg1, 
    champAhri, 
    champAshe, 
    champGaren,
    distortion
} from '../../../assets/images'
import Button from '../../button/Button'
import HomeSection from '../HomeSection'
import './welcome.scss'

const champImgs = [
    champAshe,
    champAhri,
    champGaren,
]
function Welcome(props) {

    useEffect(() => {
        const welcomeImgs = document.querySelectorAll('#welcome__img__slide > img')
        let animates = []
        welcomeImgs.forEach((item, index) => {
            let nextImg = welcomeImgs[index === welcomeImgs.length - 1 ? 0 : index + 1].getAttribute('src')
            let animation = new hoverEffect({
                parent: document.querySelector('#welcome__img__slide'),
                intensity: 0.5,
                image1: item.getAttribute('src'),
                image2: nextImg,
                displacementImage: distortion,
                hover: false,
                // imagesRatio: 0.8
            })
            animates.push(animation)
        })
        welcomeImgs.forEach(e => e.remove())


        let currItem = 0

        const autoImageSlide = () => {
            let prevItem = currItem
            currItem = (currItem + 1) % animates.length

            if (!document.hidden) {
                animates[prevItem].next()
            }

            setTimeout(() => {
                let canvas = document.querySelectorAll('#welcome__img__slide > canvas')
                document.querySelector('#welcome__img__slide').appendChild(canvas[0])
                animates[prevItem].previous()
            }, 3000);
        }

        setInterval(autoImageSlide, 5000);
    }, [])

    return (
        <HomeSection
            className={`welcome ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay welcome__content"
            bgImage={bg1}
        >
            <div className="welcome__info relative">
                <div className="welcome__info__content">
                    <div className="title">
                        <span>Welcome To</span>
                        <h2 className="main-color">Summoner's Rift</h2>
                    </div>
                    <div className="description mt-4">
                        Liên Minh Huyền Thoại là một trò chơi chiến thuật đồng đội nơi hai đội với năm vị 
                        tướng mạnh mẽ sẽ đối đầu nhau nhằm mục tiêu phá hủy căn cứ đối phương. Chọn một 
                        trong hơn 150 vị tướng để tạo ra những pha thi đấu xuất thần, hạ gục đối thủ, san 
                        phẳng trụ địch và hướng đến chiến thắng vinh quang.
                    </div>
                    <div className="btns mt-4">
                        <Button className="btn-main">CHƠI NGAY</Button>
                        <Button className="btn-second">BẮT ĐẦU</Button>    
                    </div>
                </div>
            </div>
            <div className="welcome__img relative">
                <div className="welcome__img__slide" id="welcome__img__slide">
                    {
                        champImgs.map((item, index) => {
                            return <img src={item} alt="Champion" key={index} />
                        })
                    }
                </div>
            </div>
        </HomeSection>
    )
}

export default Welcome
