import brand_logo from '../../assets/drawables/brand-logo.png';

export const BrandLogo = () => {


    return (
        <div style={styles.container}>
            <img style={styles.img} src={brand_logo} alt="logo" />
            <span style={styles.brandTitle} >MAUSAM</span>
        </div>
    )
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    img: {
        width: "25px",
        height: "25px"
    },
    brandTitle: {
        fontFamily: "OutfitSemiBold",
        fontSize: "12px"
    }
}