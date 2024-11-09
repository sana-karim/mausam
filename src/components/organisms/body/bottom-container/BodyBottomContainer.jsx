import { TemperatureToday } from '../../../molecules/temperature-today/TemperatureToday'
import { TemperatureTomorrow } from '../../../molecules/temperature-tomorrow/TemperatureTomorrow'
import './BodyBottomContainer.css'

export const BodyBottomContainer = () => {
    return (
        <div className='body-bottom-container'>
            <div className='body-bottom-temperature-today'>
                <TemperatureToday />
            </div>
            <div className='body-bottom-temperature-tomorrow'>
                <TemperatureTomorrow />
            </div>
        </div>
    )
}