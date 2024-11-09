import searchbar_icn from '../../assets/drawables/searchbar-icn.png';
import './SearchBar.css'

export const SearchBar = () => {
    return (
        <div className='search-bar-container'>
            <input className='search-bar' type="text" placeholder='Search anything' />
            <img src={searchbar_icn} />
        </div>
    )
}