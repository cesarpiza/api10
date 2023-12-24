import { StyleSheet } from 'react-native';
import { Styles } from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Styles.colors.background,
        height: Styles.size.booksHeight,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookContainer: {
        flex: 1,
        backgroundColor: Styles.colors.defaultColor,
        alignItems: 'center',
        marginRight: Styles.spacing.defaultSpacing / 1.5,
        paddingVertical: Styles.spacing.defaultSpacing / 1.5 * 2,
        paddingHorizontal: Styles.spacing.defaultSpacing / 1.5,
        elevation: Styles.spacing.defaultSpacing,
    },
    imageContainer: {
        width: Styles.size.imageWidth,
        height: Styles.size.imageHeight,
        marginBottom: Styles.spacing.defaultSpacing,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subTitle: {
        textTransform: 'capitalize',
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {},
});