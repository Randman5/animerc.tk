import './top.sass'
import {Link} from "react-router-dom";
import React, {useState} from "react";
const Top = () => {
    const [loginForm,setLoginForm] = useState(false)
    const loginHandler = () => setLoginForm(value => !loginForm)

    return (
        <div className={'top'}>
            <div className="center">
                <div className="top__row">
                    <div className="top__login-block">
                        <button onClick={() => loginHandler()} className={'top__button top__button--login'}>Вход</button>
                        {loginForm ? <form className="top__login-form">
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
