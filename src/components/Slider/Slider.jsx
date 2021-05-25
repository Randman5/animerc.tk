import './slider.sass'
import HomeHeader from "../Home/HomeHeader/HomeHeader";
import {Link} from "react-router-dom";
import cn from "classnames";
import arrow from "../../images/slider/arrow.svg";
import SwiperCore, {Autoplay, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
const Slider = ({slides}) =>{
    SwiperCore.use([Navigation, Autoplay])
    return (
        <div className={'slider'}>
            <HomeHeader title={'Аниме весеннего сезона'}/>
            <Swiper slidesPerGroup ={4} loop autoplay navigation={{
                prevEl: '.arrow--prev',
                nextEl:'.arrow--next'
            }} slidesPerView={8}>
                {slides.map((slide, index) =>{
                    return  <SwiperSlide key={index} >
                        <Link to={''} className={'slider__link'} href="">
                            <img  className={'slider__image'} src={slide.image} alt=""/>
                            <span className={'slider__name'}>
                                        {slide.name}
                                    </span>
                        </Link>
                    </SwiperSlide>
                })}
                <button title={'prev'} className={cn( 'arrow-wrapper', 'arrow-wrapper--prev')}><img src={arrow} className={'arrow arrow--prev'} alt=""/></button>
                <button title={'next'} className={cn( 'arrow-wrapper',  'arrow-wrapper--next')}><img src={arrow} className={'arrow arrow--next'} alt=""/></button>
            </Swiper>
        </div>
    )
}

export default Slider