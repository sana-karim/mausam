import { Body } from "../../components/organisms/body/Body";
import { Hamburger } from "../../components/organisms/Hamburger"
import { RightSection } from "../../components/organisms/right-section/RightSection";
import './WeatherApp.css';

export const WeatherApp = () => {
    return (
        <div className="root-container">
            <div className="hamburger-container">
                <Hamburger />
            </div>
            <div className="body-container">
                <Body />
            </div>
            <div className='weather-prediction-container'>
                <RightSection />
            </div>
        </div>
    )
}