import { StyleSheet } from 'react-native';
import { Styles } from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Styles.colors.defaultColor,
    },
    imageContainer: {
        alignItems: 'center',
    },
    image: {
        width: Styles.size.imageWidth * 2.3,
        height: Styles.size.imageHeight * 2.3,
        resizeMode: 'contain',
        marginBottom: Styles.spacing.defaultSpacing * 3,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: 'capitalize',
    },
    text: {
        fontSize: 18,
        marginTop: Styles.spacing.defaultSpacing / 2,
    },
});