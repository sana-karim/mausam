import { SearchBar } from '../atoms/SearchBar';
import './Header.css';
import profile_img from '../../assets/drawables/profile.png';
import notification_icn from '../../assets/drawables/notification-icn.png';

export const Header = () => {
    return (
        <div className='profile-container'>
            <div className='profile-icon-container'>
                <img src={profile_img}></img>
            </div>
            <div className='profile-name-container'>
                <span>Hello</span>
                <span>Jack Grealish</span>
            </div>
            <div className='search-notification-container'>
                <SearchBar />
                <img className='notification-icn' src={notification_icn} alt="" />
            </div>
        </div>
    )
}