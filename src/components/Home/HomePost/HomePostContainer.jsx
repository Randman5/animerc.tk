import {connect} from "react-redux";
import HomePost from "./HomePost";
import {addNews, addPosts, addPreviews} from "../../../redux/reducers/homeReducer";
import {useCallback, useEffect} from "react";
import image from "../../../images/slider/image1.jpg";

const HomePostContainer = ({addPosts,posts,namePosts,addNews,news,addPreviews,previews}) =>{

    const switchPosts = useCallback((name) =>{
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
                    {link: '#',date: '01 Мая', img: image, name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
                    {link: '#',date: '01 Мая', img: image, name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
                    {link: '#',date: '01 Мая', img: image, name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
                    {link: '#',date: '01 Мая', img: image, name:'Зомбиленд. Сага: Месть', info: 'Добавлена 4-я серия: Озвучка SovetRomantica. Плеер Sr.'},
                ])
            case 'news':
                return addNews([
                    {link: '#',date: '24 Мая', name:'Семь универсальных сюжетов ч.2'},
                    {link: '#',date: '21 Мая', name:'Запреты аниме (только) в РФ (обновлено 17.05)'},
                    {link: '#',date: '13 Апр', name:'Фейковые аккаунты и ТОП-100'},
                    {link: '#',date: '19 Мар', name:'С 12 апреля сайт снова заблокировали в РФ(обн. 15.04)'},
                    {link: '#',date: '01 Фев', name:'Блокировка сайта в Казахстане'},
                    {link: '#',date: '27 Дек', name:'Дайджест самых интересных новостей мира аниме'},
                ])
            case 'previews':
                return addPreviews([
                    {link: '#',date: '17 Мая', name:'Фантастический мир с обращённым в красавицу мужчиной и…', info: 'Комедия, Приключения, Фэнтези, Исэкай'},
                    {link: '#',date: '16 Мая', name:'Далёкий паладин', info: 'Приключения, Фэнтези'},
                    {link: '#',date: '16 Мая', name:'Голубой период', info: 'Сэйнэн, Драма, Искусство, Школьная жизнь'},
                    {link: '#',date: '16 Мая', name:'Судьба/Великий приказ: Финальная сингулярность — Соломон', info: 'Фэнтези, Магия, Экшен, Сверхъестественное'},
                    {link: '#',date: '16 Мая', name:'Маг на полную ставку', info: 'Фэнтези, Магия, Экшен, Школьная жизнь, Не японское'},
                ])
            default:
                return
        }
    },[addPosts,addPreviews,addNews])

    useEffect(()=>{
        switchPosts(namePosts)
    },[switchPosts,namePosts])

    switch (namePosts) {
        case 'last-anime':
            return (
                <HomePost namePosts={namePosts} posts={posts} />
            )
        case 'news':
            return (
                <HomePost namePosts={namePosts} posts={news} />
            )
        case 'previews':
            return (
                <HomePost namePosts={namePosts} posts={previews} />
            )
        default:
            return
    }
}

const mapStateToProps = (state) =>{
    return {
        posts: state.home.posts,
        news: state.home.news,
        previews: state.home.previews
    }
}

export default connect(mapStateToProps,{
    addPosts,
    addNews,
    addPreviews
})(HomePostContainer)
