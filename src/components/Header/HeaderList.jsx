import {Link} from 'react-router-dom'

const HeaderList = () => {
    return (
                    <ul className={'header__list'}>
                        <li className={'header__list-item'}>
                            <Link to={'#'} className={'header__link'}>
                                Главная
                            </Link>
                        </li >
                        <li className={'header__list-item'}>
                            <Link to={'#'} className={'header__link'}>
                                Каталог
                                <span>аниме</span>
                            </Link >
                        </li>
                        <li className={'header__list-item'}>
                            <Link to={'#'} className={'header__link'}>
                                Топ-100
                                <span>аниме</span>
                            </Link>
                        </li>
                        <li className={'header__list-item'}>
                            <Link to={'#'} className={'header__link'}>
                                Случайное
                                <span>аниме</span>
                            </Link>
                        </li>
                        <li className={'header__list-item'}>
                            <Link to={'#'} className={'header__link'}>
                                Сообщество
                            </Link>
                        </li>
                        <li className={'header__list-item'}>
                            <Link to={'#'} className={'header__link'}>
                                Видео
                                <span>блоггеров</span>
                            </Link>
                        </li>
                        <li className={'header__list-item'}>
                            <Link to={'#'} className={'header__link'}>
                                Помощь
                            </Link>
                        </li>
                    </ul>
    );
}

export default HeaderList;
