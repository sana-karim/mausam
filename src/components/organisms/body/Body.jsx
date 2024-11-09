import { Header } from '../../molecules/Header';
import './Body.css';
import { BodyBottomContainer } from './bottom-container/BodyBottomContainer';
import { BodyTopContainer } from './top-container/BodyTopContainer';

export const Body = () => {
    return (
        <div className='body-main-container'>
            <div className='body-header-container-parent'>
                <Header />
            </div>
            <div className='body-top-container-parent'>
                <BodyTopContainer />
            </div>
            <div className='body-bottom-container-parent'>
                <BodyBottomContainer />
            </div>
        </div>
    )
}