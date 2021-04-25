import './top.sass'
import {Link} from "react-router-dom";
import LoginBlock from "./LoginBlock";
const Top = () => {
    return (
        <div className={'top'}>
            <div className="center">
                <div className="top__row">
                    <LoginBlock/>
                    <Link to={'#'} className={'top__button top__button-register top__button--green-background'}>Регистрация</Link>
                </div>
            </div>
        </div>
    );
}

export default Top;
