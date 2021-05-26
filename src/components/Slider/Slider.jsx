import './slider.sass'
import HomeHeader from "../Home/HomeHeader/HomeHeader";
import {Link} from "react-router-dom";
import cn from "classnames";
import arrow from "../../images/slider/arrow.svg";
import SwiperCore, {Lazy,Autoplay, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/lazy/lazy.scss'
const Slider = ({slides}) =>{
    SwiperCore.use([Navigation, Autoplay,Lazy])
    return (
        <div className={'slider'}>
            <HomeHeader title={'Аниме весеннего сезона'}/>
            <Swiper lazy={true} slidesPerGroup ={4} loop autoplay navigation={{
                prevEl: '.arrow--prev',
                nextEl:'.arrow--next'
            }} slidesPerView={7}>
                {slides.map((slide, index) =>{
                    return  <SwiperSlide key={index} >
                        <Link to={''} className={'slider__link'} href="">
                            <img  className={cn('slider__image','swiper-lazy')} data-src={slide.image} alt=""/>
                            <span title={slide.title} className={'slider__name'}>
                                        {slide.name}
                                    </span>
                        </Link>
                        <div className="swiper-lazy-preloader"/>
                    </SwiperSlide>
                })}
                <button title={'prev'} className={cn( 'arrow-wrapper', 'arrow-wrapper--prev')}><img src={arrow} className={'arrow arrow--prev'} alt=""/></button>
                <button title={'next'} className={cn( 'arrow-wrapper',  'arrow-wrapper--next')}><img src={arrow} className={'arrow arrow--next'} alt=""/></button>
            </Swiper>
        </div>
    )
}

export default Slider