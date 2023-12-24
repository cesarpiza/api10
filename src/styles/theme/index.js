import { Dimensions } from "react-native"

const { width, height } = Dimensions.get('window');

export const Styles = {
    size: {
        headerHeight: height * 0.2,
        booksHeight: height * 0.8,
        imageWidth: width * 0.25,
        imageHeight: 0,
    },
    spacing: {
        defaultSpacing: 15,
        borderRadius: 30,
    },
    colors: {
        background: '#E0E0E0',
        background2: '#9F80FA',
        defaultColor: '#ffffff',
        defaultColor2: '#B3B3B3',
    }
}
Styles.size.imageHeight = Styles.size.imageWidth / 100 * 50.602409638554 + Styles.size.imageWidth;