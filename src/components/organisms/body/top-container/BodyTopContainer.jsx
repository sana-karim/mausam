import { AirQualityCard } from '../../../molecules/air-quality-card/AirQualityCard';
import { WeatherCard } from '../../../molecules/weather-card/WeatherCard';
import './BodyTopContainer.css';



export const BodyTopContainer = () => {
    return (
        <div className='body-top-container'>
            <WeatherCard />
            <WeatherCard />
            {/* <AirQualityCard /> */}
        </div>
    )
}