import React from 'react'
import {Link} from "react-router-dom";

const HomeHeader = ({title, link, linkTitle})=>{
    return (
        <div className="home-header">
                                <span className="home-header__title">
                                    {title}
                                </span>
            { link && linkTitle && <Link to={link} className="home-header__link">{linkTitle}</Link> }
        </div>
    )
}
export default HomeHeader