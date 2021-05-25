import {connect} from "react-redux";
import HomePost from "./HomePost";
import {addNews, addPosts} from "../../../redux/reducers/homeReducer";
import {useEffect} from "react";
import image from "../../../images/slider/image1.jpg";

const HomePostContainer = ({addPosts,posts,namePosts,addNews,news}) =>{
    const switchPosts = (name) =>{
        switch (name){
            case 'last-anime':
              return addPosts([
                    {link: '#',date: '01 Мая', img: image, name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
                    {link: '#',date: '01 Мая', img: image, name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
                    {link: '#',date: '01 Мая', img: image, name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
                    {link: '#',date: '01 Мая', img: image, name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
                    {link: '#',date: '01 Мая', img: image, name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
                    {link: '#',date: '01 Мая', img: image, name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
                    {link: '#',date: '01 Мая', img: image, name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
                    {link: '#',date: '01 Мая', img: image, name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
                ])
            case 'news':
                return addNews([
                    {link: '#',date: '01 Мая', name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
                    {link: '#',date: '01 Мая', name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
                    {link: '#',date: '01 Мая', name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
                    {link: '#',date: '01 Мая', name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
                    {link: '#',date: '01 Мая', name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
                    {link: '#',date: '01 Мая', name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
                    {link: '#',date: '01 Мая', name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
                    {link: '#',date: '01 Мая', name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
                ])
            default:
                return
        }
    }
    useEffect(()=>{
        switchPosts(namePosts)
    })
    switch (namePosts) {
        case 'last-anime':
            return (
                <HomePost posts={posts} />
            )
        case 'news':
            return (
                <HomePost posts={news} />
            )
        default:
            return
    }
}

const mapStateToProps = (state) =>{
    return {
        posts: state.home.posts,
        news: state.home.news
    }
}

export default connect(mapStateToProps,{
    addPosts,
    addNews
})(HomePostContainer)
