import './champion.scss'

import HomeSection from '../HomeSection'
import ChampionCard from './ChampionCard'

import { bg2 } from '../../../assets/images'
import banner from '../../../assets/images/banner.jpg';
import { championsData } from '../../../assets/dummy';
import pic1 from '../../../assets/images/Characters/pic1.png'
import pic2 from '../../../assets/images/Characters/pic2.png'
import pic3 from '../../../assets/images/Characters/pic3.png'
import pic4 from '../../../assets/images/Characters/pic4.png'

import { Swiper, SwiperSlide } from 'swiper/react'

const Champion = props => {
    return (
        <HomeSection
            className={`champion ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay"
            bgImage={banner}
        >
            <div className="container relative">
                <div className="champion-list">
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={0}
                        grabCursor={true}
                        nested={true}
                    >
                        {
                            championsData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <ChampionCard item={item} id={index}/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </HomeSection>
    )
}

export default Champion
