import './search-bar.sass'
const SearchBar = () =>{
    return (
            <div className="search-bar">
                <div className="center">
                    <form className={'search-bar__form'}>
                        <input placeholder={'Найти аниме по названию'} className={'search-bar__input'} type="text"/>
                    </form>
                </div>
            </div>
    )
}

export default SearchBar