import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';
import {
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import Home from './pages/home';
import Details from './pages/details';
import { Styles } from './styles/theme';

export default function App() {

    const { Navigator, Screen } = createNativeStackNavigator();

    useEffect(() => {
        StatusBar.setHidden(true);
    }, []);

    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name='Home'
                    component={Home}
                    options={{
                        headerShown: false,
                    }}
                />
                <Screen
                    name='Details'
                    component={Details}
                    options={{
                        header: ({ navigation }) => {
                            return (
                                <View style={styles.headerContainer}>
                                    <TouchableOpacity
                                        style={{
                                            alignSelf: 'flex-start',
                                        }}
                                        onPress={() => {
                                            navigation.goBack();
                                        }}
                                    >
                                        <AntDesign name="arrowleft" size={38} color="black" />
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}

export const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        position: "absolute",
        backgroundColor: Styles.colors.background2,
        paddingLeft: Styles.spacing.defaultSpacing * 2,
        paddingVertical: Styles.spacing.defaultSpacing,
        borderBottomWidth: 1,
        borderBottomColor: Styles.colors.defaultColor2,
    }
});