import { StyleSheet } from 'react-native';
import { Styles } from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Styles.colors.background2,
        height: Styles.size.headerHeight,
        justifyContent: 'center',
        padding: Styles.spacing.defaultSpacing * 2,
        rowGap: Styles.spacing.defaultSpacing,
        borderBottomWidth: 1,
        borderBottomColor: Styles.colors.defaultColor2,
    },
    title: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: 'center',
    },
    textInputContainer: {
        flexDirection: 'row',
    },
    textInput: {
        flex: 0.7,
        fontSize: 20,
        backgroundColor: Styles.colors.defaultColor,
        padding: Styles.spacing.defaultSpacing,
        borderTopLeftRadius: Styles.spacing.borderRadius,
        borderBottomLeftRadius: Styles.spacing.borderRadius,
    },
    buttonContainer: {
        flex: 0.3,
        backgroundColor: Styles.colors.defaultColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: Styles.spacing.borderRadius,
        borderBottomRightRadius: Styles.spacing.borderRadius,
    },
});