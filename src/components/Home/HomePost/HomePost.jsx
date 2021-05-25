import React from "react";
import {Link} from "react-router-dom";
import cn from 'classnames'
const HomePost = ({namePosts,posts}) =>{
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
                 {namePosts === 'news' ? null : <img src={post.img} className={'main-page__block-img'} alt=""/>}
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