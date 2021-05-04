import './main-page.sass'
import Slider from "../../components/Slider/Slider";
import {Swiper,SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Autoplay} from 'swiper/core'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import {useState} from "react";
import './main-page.sass'
import {Link} from "react-router-dom";
import cn from 'classnames'
import arrow from '../../images/slider/arrow.svg'
import HomeHeader from "../../components/Home/HomeHeader/HomeHeader";
import HomePost from "../../components/Home/HomePost/HomePost";


const Home = () => {
    SwiperCore.use([Navigation, Autoplay])
    const [images,setImages] = useState([])
    return (
        <main className={'content'}>
            <section className={'main-page'}>
                <div className="center">
                    <Slider setImages={setImages}>
                        <HomeHeader title={'Аниме весеннего сезона'}/>
                        <Swiper slidesPerGroup ={4} loop autoplay navigation={{
                            prevEl: '.arrow--prev',
                            nextEl:'.arrow--next'
                        }} slidesPerView={8}>
                            {images.map((slide, index) =>{
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
                    </Slider>
                    <div className="main-page__update-wrapper">
                        <div className="main-page__block">
                            <HomeHeader title={'обновления аниме'} link={'#'} linkTitle={'Все обновления'} />
                            <HomePost/>
                        </div>
                        <div className="main-page__block">
                            <HomeHeader title={'Новости'} link={'#'} linkTitle={'Все новости'} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
