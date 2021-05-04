import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import image from "../../../images/slider/image1.jpg";
import cn from 'classnames'
const HomePost = () =>{
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        setPosts([
            {link: '#',date: '01 Мая', img: image, name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
            {link: '#',date: '01 Мая', img: image, name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
            {link: '#',date: '01 Мая', img: image, name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
            {link: '#',date: '01 Мая', img: image, name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
            {link: '#',date: '01 Мая', img: image, name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
            {link: '#',date: '01 Мая', img: image, name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
            {link: '#',date: '01 Мая', img: image, name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
            {link: '#',date: '01 Мая', img: image, name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
        ])
    },[setPosts])
    return (
        <>
            {posts.map((post, index)=>{
             return <Link key={index} to={post.link} className={cn({
                 'main-page__block-post': 'main-page__block-post',
                 'main-page__block-post--not-even' : index % 2 === 1 && 'main-page__block-post--not-even'
             })}>
                    <div className="main-page__block-date">
                        {post.date}
                    </div>
                    <img src={post.img} className={'main-page__block-img'} alt=""/>
                    <div className="main-page__block-text">
                        <span className={'main-page__block-name'}>{post.name}</span>
                        <span className={'main-page__block-separator'}>-</span>
                        <span className={'main-page__block-info'}>{post.info}</span>
                    </div>
                </Link>
            })}
        </>
    )
}
export default HomePost