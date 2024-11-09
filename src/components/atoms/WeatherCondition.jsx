import { COLORS } from "../../assets/colors"

export const WeatherCondition = ({ label, value, txtColor, bgColor }) => {

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "14px",
            width: "110px",
            borderRadius: "14px",
            backgroundColor: COLORS.secondary,
        },
        label: {
            fontFamily: "OutfitLight",
            fontSize: "12px",
            marginBottom: "8px",
        },
        value: {
            fontFamily: "OutfitMedium",
            fontSize: "18px",
        }
    }

    return (
        // <div style={{}}>

        // </div>
        <div style={{ ...styles.container, backgroundColor: bgColor }}>
            <span style={{ ...styles.label, color: txtColor }}>{label}</span>
            <span style={{ ...styles.value, color: txtColor }}>{value}</span>
        </div>
    )
}

