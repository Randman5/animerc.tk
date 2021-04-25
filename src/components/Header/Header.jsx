
import './header.sass'
import HeaderList from "./HeaderList";

const Header = () => {
    return (
        <header className={'header'}>
            <div className="center">
                <div className="header__row">
                    <HeaderList/>
                </div>
            </div>
        </header>
    );
}

export default Header;
