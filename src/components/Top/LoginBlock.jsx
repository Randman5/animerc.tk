import './top.sass'
import cn from "classnames";
import {Link} from "react-router-dom";
import React, {useState} from "react";
const LoginBlock = () => {
    const [fade,setFade] = useState(false)
    const loginHandler = () => {
        return setFade(value => !value) // переключатель формы
    }
    return (
        <div className="top__login-block">
            <button onClick={() => loginHandler()} className={'top__button top__button--login'}>Вход</button>
            {fade ? <form className= {cn({
                'top__login-form':'top__login-form',
                'top__login-form--fade': fade && 'top__login-form--fade'
            })}>
                <input placeholder={'E-mail'} type="text" className="top__login-input"/>
                <input placeholder={'Пароль'}  type="password" className="top__login-input"/>
                <button className={'top__login-button'}>Войти</button>
                <Link className={'top__login-reset-password'} to={'#'}>Не помню пароль...</Link>
            </form> : null
            }
        </div>
    );
}

export default LoginBlock;
