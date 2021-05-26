import './top.sass'
import cn from "classnames";
import {Link} from "react-router-dom";
import React, {useRef} from "react";
const LoginBlock = () => {
    const loginForm = useRef(null)
    return (
        <div className="top__login-block">
            <button onClick={(e) => {
                loginForm.current.classList.toggle('top__login-form--fade')
            }} className={'top__button top__button--login'}>Вход</button>
           <form ref={loginForm} className= {cn({'top__login-form': 'top__login-form'})}>
                <input placeholder={'E-mail'} type="text" className="top__login-input"/>
                <input placeholder={'Пароль'}  type="password" className="top__login-input"/>
                <button className={'top__login-button'}>Войти</button>
                <Link className={'top__login-reset-password'} to={'#'}>Не помню пароль...</Link>
            </form>
            }
        </div>
    );
}

export default LoginBlock;
