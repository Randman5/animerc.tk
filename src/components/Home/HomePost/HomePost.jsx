import React from "react";
import {Link} from "react-router-dom";
import cn from 'classnames'
const HomePost = ({namePosts,posts}) =>{
    const showImg = (namePosts,img) =>{
        switch (namePosts){
            case 'last-anime':
                return <img src={img} className={'main-page__block-img'} alt=""/>
            default:
                return null
        }
    }
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
                {showImg(namePosts,post.img)}
                 <div className="main-page__block-text">
                        <span className={'main-page__block-name'}>{post.name}</span>
                        {namePosts === 'news' ? null : <span className={'main-page__block-separator'}>-</span>}
                        <span className={'main-page__block-info'}>{post.info}</span>
                    </div>
                </Link>
            })}
        </>
    )
}
export default HomePost