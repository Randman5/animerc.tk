import './top.sass'
import {Link} from "react-router-dom";
import React, {useState} from "react";
import cn from "classnames";
const Top = () => {
    const [fade,setFade] = useState(false)
    const loginHandler = () => setFade(value => !fade)

    return (
        <div className={'top'}>
            <div className="center">
                <div className="top__row">
                    <div className="top__login-block">
                        <button onClick={() => loginHandler()} className={'top__button top__button--login'}>Вход</button>
                        {fade ? <form className= {cn({
                            'top__login-form':'top__login-form',
                            fade: fade ? 'fade' : ''
                        })}>
                            <input placeholder={'E-mail'} type="text" className="top__login-input"/>
                            <input placeholder={'Пароль'}  type="password" className="top__login-input"/>
                            <button className={'top__login-button'}>Войти</button>
                            <Link className={'top__login-reset-password'} to={'#'}>Не помню пароль...</Link>
                        </form> : null
                        }
                    </div>
                    <Link to={'#'} className={'top__button top__button-register top__button--green-background'}>Регистрация</Link>
                </div>
            </div>
        </div>
    );
}

export default Top;
