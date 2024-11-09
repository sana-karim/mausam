import { COLORS } from "../../assets/colors"
import { FONTS } from "../../fonts/fonts"

export const Temperature = () => {
    return (
        <div style={styles.temperature}>22°C</div>
    )
}
export const MinTemperature = () => {
    return (
        <div style={styles.minTemp}>
            11° C
        </div>
    )
}

const styles = {
    temperature: {
        fontFamily: FONTS.MEDIUM,
        fontSize: "30px",
        marginRight: "10px"
    },
    minTemp: {
        fontFamily: FONTS.MEDIUM,
        fontSize: "12px",
        backgroundColor: COLORS.white,
        borderRadius: "6px",
        padding: "2px 6px",
        alignSelf: "center"
    }
}