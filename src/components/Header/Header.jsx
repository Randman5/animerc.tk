import {Link} from 'react-router-dom'
import './header.sass'
const Header = () => {
    return (
            <header className={'header'}>
                <div className="center">
                    <div className="header__row">
                        <Link to={'/'} >Home</Link>
                        <Link to={'/test'} >Test</Link>
                    </div>
                </div>
            </header>
    );
}

export default Header;
