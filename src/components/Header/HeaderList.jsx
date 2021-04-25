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
                            <div className="header__sub-menu">
                                <span className="header__sub-menu-item">
                                    <Link to={'#'}>Все аниме</Link>
                                </span>
                                <span className="header__sub-menu-item"><Link to={'#'}>Анонсы</Link></span>
                                <span className="header__sub-menu-item"><Link to={'#'}>Расписание онгоингов</Link></span>
                                <span className="header__sub-menu-item"><Link to={'#'}>Онгоинги</Link></span>
                            </div>
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
                            <div className="header__sub-menu">
                                <span className="header__sub-menu-item"><Link to={'#'}>Рецензии</Link></span>
                                <span className="header__sub-menu-item"><Link to={'#'}>Пользователи</Link></span>
                                <span className="header__sub-menu-item"><Link to={'#'}>Чат</Link></span>
                            </div>
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
                            <div className="header__sub-menu">
                                <span className="header__sub-menu-item">
                                    <Link to={'#'}>FAQ</Link>
                                </span>
                                <span className="header__sub-menu-item"><Link to={'#'}>Правила сайта</Link></span>
                                <span className="header__sub-menu-item"><Link to={'#'}>Информация для правообладателей из РФ</Link></span>
                                <span className="header__sub-menu-item"><Link to={'#'}>Политика конфиденциальности</Link></span>
                            </div>
                        </li>
                    </ul>
    );
}

export default HeaderList;
