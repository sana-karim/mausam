import { WeatherCondition } from '../../atoms/WeatherCondition';
import './WeatherCard.css';
import { COLORS } from '../../../assets/colors';
import { WeatherCondition as Pressure } from '../../atoms/WeatherCondition';
import { WeatherCondition as Visibility } from '../../atoms/WeatherCondition';
import { WeatherCondition as Humidity } from '../../atoms/WeatherCondition';
import weather_card_cloud_icn from '../../../assets/drawables/weather-card-cloud-icn.png';
import { MinTemperature, Temperature } from '../../atoms/Temperature';

export const WeatherCard = () => {

    const TopComponent = () => {
        return (
            <div className='top-component'>
                <div className='top-component-img'>
                    <div className='top-component-img-holder'>
                        <img src={weather_card_cloud_icn} alt="weatherIcn" />
                    </div>
                </div>
                <div className='top-component-data'>
                    <span className='title'>Weather</span>
                    <span className='subtitle'>Whats the weather</span>
                </div>
            </div>
        )
    }

    const MiddleComponent = () => {
        return (
            <div className='middle-component'>
                <div className='middle-component-top'>
                    <Temperature />
                    <MinTemperature />
                </div>
                <span>Partly Cloudy</span>
            </div>
        )
    }
    const BottomComponent = () => {
        return (
            <div className='bottom-component'>
                <WeatherCondition label={"Pressure"} value={"800mb"} txtColor={COLORS.white} bgColor={COLORS.secondary} />
                <Visibility label={"Visibility"} value={"4.3 Km"} txtColor={COLORS.black} bgColor={COLORS.tertiary} />
                <Humidity label={"Humidity"} value={"87%"} txtColor={COLORS.black} bgColor={COLORS.white} />
            </div>
        )
    }

    return (
        <div className='weather-card'>
            <TopComponent />
            <MiddleComponent />
            <BottomComponent />
        </div>
    )
}